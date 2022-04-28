import Plausible from "plausible-tracker";

/**
 * @description Each of the provided analytics services must subscribe to two
 * events on the global observer:
 * analytics.trackPageView - takes no other parameters
 * analytics.trackEvent - requires one parameter, data. The parameter should have this type:
 *    {
 *      eventName: string,
 *      ...optionalProperties?: string | number
 *    }
 * Event name is required, while the remaining properties are optional, but could come
 * in handy when we want to provide additional payload to the event sent.
 *
 * @example
 * ```
 * // Track a page view
 * this.globalObserver.publish("analytics.trackPageView");
 *
 * // Track event named "customEvent", supply some payload
 * this.globalObserver.publish("analytics.trackEvent", {
 *  eventName: "customEvent",
 *  paramA: "foo",
 *  paramB: "bar"
 * });
 * ```
 *
 * @export
 * @class Analytics
 */
export default class Analytics {
  constructor(config, globalObserver) {
    switch (config?.type) {
      case "plausible":
        console.log(
          "Activating Plausible Analytics with config: ",
          config.options
        );

        const { domain, apiHost, trackLocalhost } = config.options;
        const plausible = Plausible({
          domain,
          apiHost,
          trackLocalhost,
        });

        // These events should be called like this and subscribed to by
        // any analytics service. Below we define two events:
        globalObserver.subscribe("analytics.trackPageView", () =>
          plausible.trackPageview()
        );

        globalObserver.subscribe(
          "analytics.trackEvent",
          ({ eventName, ...rest }) =>
            plausible.trackEvent(eventName, { props: rest })
        );
        break;
      case "matomo":
        break;

      default:
        break;
    }
  }
}
