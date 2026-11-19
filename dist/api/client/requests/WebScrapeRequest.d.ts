import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         url: "https://example.com",
 *         body: {
 *             instructions: [{}, {}, {}, {}, {
 *                     extract: {
 *                         "profile": "#profile",
 *                         "welcomeMessage": "#welcome-message",
 *                         "userInfo": "#user-info"
 *                     }
 *                 }, {}, {}]
 *         }
 *     }
 *
 * @example
 *     {
 *         apiKey: "apiKey",
 *         url: "https://example.com",
 *         body: {
 *             instructions: [{
 *                     postForm: {
 *                         selector: "#loginForm",
 *                         data: {
 *                             "username": "myuser",
 *                             "password": "mypassword"
 *                         }
 *                     }
 *                 }, {
 *                     extract: {
 *                         "mainContent": "#main-content",
 *                         "welcomeMessage": "#welcome-message"
 *                     }
 *                 }, {
 *                     getForm: {
 *                         selector: "#searchForm",
 *                         data: {
 *                             "query": "API scraping"
 *                         }
 *                     }
 *                 }, {
 *                     extract: {
 *                         "searchResults": "#search-results"
 *                     }
 *                 }]
 *         }
 *     }
 */
export interface WebScrapeRequest {
    /** Your API key */
    apiKey: string;
    /** Response format returned by the API. */
    format?: ApifreaksApi.WebScrapeRequestFormat;
    /** Target URL to scrape */
    url: string;
    /** Set to `true` to return the data in text format else `false` for data in html format with tags. */
    text?: boolean;
    /**
     * Set  `true` to handle websites with JavaScript. Set `false` to handle static html websites.
     *
     *
     *  Default value is `true`.
     */
    jsEnabled?: boolean;
    /** Use a proxy for the request. Pass true/false to toggle the default proxy pool, or a proxy URL string to use a specific proxy. */
    proxy?: ApifreaksApi.WebScrapeRequestProxy;
    /**
     * Ignore SSL certificate errors.
     *
     *
     *  Only works if **jsEnabled** is **true**.
     */
    sslIgnore?: boolean;
    /**
     * Specify the browser window size in the format 'width,height' (e.g., "1920w,1080h"). Default value is the default resolutions provided by web/browser.
     *
     *
     *  Only works if **jsEnabled** is **true**.
     */
    windowSize?: string;
    /**
     * Set to `true` to apply ad-blocker to the specified URL else false or ignore to not apply.
     *
     *
     *  Only works if **jsEnabled** is **true**.
     */
    adBlock?: boolean;
    /**
     * if true user can provide captcha instructions in the instructions to solve image captchas.
     *
     *
     *   Only works if **jsEnabled** is **true**.
     */
    captcha?: boolean;
    body: ApifreaksApi.WebScrapeRequestBody;
}
