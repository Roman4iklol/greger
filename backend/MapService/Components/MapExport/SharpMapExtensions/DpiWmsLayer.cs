using System;
using System.Collections.ObjectModel;
using System.Drawing;
using System.IO;
using System.Net;
using GeoAPI.Geometries;
using SharpMap;
using SharpMap.Layers;
using SharpMap.Rendering.Exceptions;
using SharpMap.Web.Wms;

namespace MapService.Components.MapExport {

    public class DpiWmsLayer : WmsLayer
    {

        // Defined due to internal workings of WmsLayer
        private readonly Collection<string> _layerList;
        private readonly Collection<string> _stylesList;
        private readonly string _mimeType;
        private readonly Color _bgColor = Color.White;
        private readonly int _ogcStandardDpi = 90;
        private readonly int _requestedDpi;

        private const string GeoserverDpi = "FORMAT_OPTIONS=dpi:";
        private const string UMNDpi = "MAP_RESOLUTION=";
        private const string QGISDpi = "DPI=";

        public DpiWmsLayer(string layername, string url, int dpi = 90) : base(layername, url)
        {
            _requestedDpi = dpi;
        }

        public override string GetRequestUrl(Envelope box, Size size)
        {
            var requestUrl = base.GetRequestUrl(box, size);

            return requestUrl + string.Format("&{0}{3}&{1}{3}&{2}{3}", 
                GeoserverDpi,
                UMNDpi,
                QGISDpi,
                _requestedDpi);
        }

        /// <summary>
        /// Renders the layer
        /// </summary>
        /// <remarks>
        /// Change from SharpMap: 
        /// throws RenderException when Content Type is not an image.
        /// Does not log.
        /// </remarks>
        /// <param name="g">Graphics object reference</param>
        /// <param name="map">Map which is rendered</param>
        public override void Render(Graphics g, MapViewport map)
        {

            Client.WmsOnlineResource resource = GetPreferredMethod();
            var myUri = new Uri(GetRequestUrl(map.Envelope, map.Size));

            var myWebRequest = WebRequest.Create(myUri);
            myWebRequest.Method = resource.Type;
            myWebRequest.Timeout = TimeOut;

            if (myWebRequest is HttpWebRequest)
            {
                (myWebRequest as HttpWebRequest).Accept = _mimeType;
                (myWebRequest as HttpWebRequest).KeepAlive = false;
                (myWebRequest as HttpWebRequest).UserAgent = "SharpMap-WMSLayer";
            }

            if (Credentials != null)
            {
                myWebRequest.Credentials = Credentials;
                myWebRequest.PreAuthenticate = true;
            }
            else
                myWebRequest.Credentials = CredentialCache.DefaultCredentials;

            if (Proxy != null)
                myWebRequest.Proxy = Proxy;

            try
            {

                using(var myWebResponse = (HttpWebResponse)myWebRequest.GetResponse())
                {

                    using (var dataStream = myWebResponse.GetResponseStream())
                    {
                        if (dataStream != null && myWebResponse.ContentType.StartsWith("image"))
                        {
                            var cLength = (int) myWebResponse.ContentLength;

                            Image img;
                            using (var ms = new MemoryStream())
                            {
                                var buf = new byte[50000];
                                int numRead = 0;
                                DateTime lastTimeGotData = DateTime.Now;
                                var moreToRead = true;
                                do
                                {
                                    try
                                    {
                                        int nr = dataStream.Read(buf, 0, buf.Length);
                                        ms.Write(buf, 0, nr);
                                        numRead += nr;

                                        if (nr == 0)
                                        {
                                            int testByte = dataStream.ReadByte();
                                            if (testByte == -1)
                                            {
                                                //moreToRead = false;
                                                break;
                                            }

                                            if ((DateTime.Now - lastTimeGotData).TotalSeconds > TimeOut)
                                            {
                                                return;
                                            }

                                            //Did not get data... sleep for a while to not spin
                                            System.Threading.Thread.Sleep(10);
                                        }
                                        else
                                        {
                                            lastTimeGotData = DateTime.Now;
                                        }

                                    }
                                    catch (IOException /*ee*/)
                                    {
                                        //This can be valid since in some cases .NET failed to parse 0-sized chunks in responses..
                                        //For now, just safely ignore the exception and assume we read all data...
                                        //Either way we will get an error later if we did not..
                                        moreToRead = false;
                                    }

                                } while (moreToRead);

                                ms.Seek(0, SeekOrigin.Begin);
                                img = Image.FromStream(ms);
                            }

                            if (ImageAttributes != null)
                                g.DrawImage(img, new Rectangle(0, 0, img.Width, img.Height), 0, 0,
                                    img.Width, img.Height, GraphicsUnit.Pixel, ImageAttributes);
                            else
                                g.DrawImage(img, Rectangle.FromLTRB(0, 0, map.Size.Width, map.Size.Height));

                            dataStream.Close();
                        }
                        else
                        {
                            if (!ContinueOnError)
                            {
                                throw new RenderException("Bad Content Type, WMS server dit not return an image.");
                            }
                        }
                    }
                    myWebResponse.Close();
                }
            }
            catch (WebException webEx)
            {
                if (!ContinueOnError)
                    throw (new RenderException(
                        "There was a problem connecting to the WMS server when rendering layer '" + LayerName + "'",
                        webEx));
            }
            catch (Exception ex)
            {
                if (!ContinueOnError)
                    throw (new RenderException("There was a problem rendering layer '" + LayerName + "'", ex));
            }
            base.Render(g, map);
        }
    }
}