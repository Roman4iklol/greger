﻿using Microsoft.AspNetCore.Mvc;
using System.Net;
using System;
using System.Text;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System.Net.Http.Headers;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Http.Extensions;

namespace MapService.Business.FmeProxy
{
    public static class FmeProxyHandler
    {
        static readonly HttpClient client = new HttpClient();

        public static async Task<string> SendQueryToFmeServerAPI(HttpRequest incomingRequest, string urlPath)
        {
            //Better way to handle this?
            urlPath = urlPath.Replace("%2F", "/");
            
            //Just for testing purposes
            var fmeServerHost = "https://api.github.com/";//"https://fmeserver.some.domain.com";
            var fmeServerUser = "someFmeUser";
            var fmeServerPwd = "aGreatPassword";
          
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/vnd.github.v3+json"));
            client.DefaultRequestHeaders.Add("User-Agent", ".NET Foundation Repository Reporter");

            //Create request
            string url = fmeServerHost.EndsWith("/") ? fmeServerHost + urlPath : fmeServerHost + "/" + urlPath;

            var queryString = incomingRequest.QueryString.ToString();
            if (!string.IsNullOrEmpty(queryString))
                url += "?" + queryString;

            HttpRequestMessage request = new HttpRequestMessage(new HttpMethod(incomingRequest.Method), url);
            request.Headers.Add("Authorization", "Basic " + Convert.ToBase64String(Encoding.UTF8.GetBytes(fmeServerUser + ":" + fmeServerPwd)).ToString());

            //If POST set request body and headers
            var contentEncoding = incomingRequest.Headers.ContentEncoding;
            if (new HttpMethod(incomingRequest.Method) == HttpMethod.Post)
            {
                StreamReader bodyStreamReader = new StreamReader(incomingRequest.Body);
                string body = bodyStreamReader.ReadToEnd();
                request.Content = new StringContent(body);
                if (incomingRequest.ContentType != null) { request.Content.Headers.ContentType = new MediaTypeHeaderValue(incomingRequest.ContentType); }
                request.Content.Headers.ContentLength = incomingRequest.ContentLength;
            }

            //Get Response
            var response = await client.SendAsync(request);
            response.EnsureSuccessStatusCode(); //throws HttpRequestException if other than status code 200 is returned

            //Return content as string
            return await response.Content.ReadAsStringAsync();
        }
    }
}