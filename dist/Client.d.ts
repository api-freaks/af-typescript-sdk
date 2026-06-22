import * as ApifreaksApi from "./api/index.js";
import type { BaseClientOptions, BaseRequestOptions } from "./BaseClient.js";
import { type NormalizedClientOptions } from "./BaseClient.js";
import * as core from "./core/index.js";
export declare namespace ApifreaksApiClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ApifreaksApiClient {
    protected readonly _options: NormalizedClientOptions<ApifreaksApiClient.Options>;
    constructor(options?: ApifreaksApiClient.Options);
    /**
     * Get detailed geolocation data for an IP address including country, city, timezone, currency, and optional security and user-agent information
     *
     * @param {ApifreaksApi.GeolocationLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.LockedError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.geolocationLookup({
     *         apiKey: "apiKey"
     *     })
     */
    geolocationLookup(request: ApifreaksApi.GeolocationLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.GeolocationLookupResponse>;
    private __geolocationLookup;
    /**
     * Retrieve detailed geolocation data for multiple IP addresses in a single request.
     * Supports up to `50,000` IP-addresses/host-names per request.
     *
     * @param {ApifreaksApi.BulkGeolocationLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.bulkGeolocationLookup({
     *         apiKey: "apiKey",
     *         ips: ["ips"]
     *     })
     */
    bulkGeolocationLookup(request: ApifreaksApi.BulkGeolocationLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.BulkGeolocationLookupResponseItem[]>;
    private __bulkGeolocationLookup;
    /**
     * Get comprehensive security information for a given IP address. Detects VPNs, proxies, Tor nodes, and other security threats.
     *
     * @param {ApifreaksApi.IpSecurityLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.LockedError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.ipSecurityLookup({
     *         apiKey: "apiKey"
     *     })
     */
    ipSecurityLookup(request: ApifreaksApi.IpSecurityLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.IpSecurityLookupResponse>;
    private __ipSecurityLookup;
    /**
     * The Bulk IP Security Lookup API allows you to retrieve security details for up to `50,000` IP-addresses in a single request.
     *
     * @param {ApifreaksApi.BulkIpSecurityLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.bulkIpSecurityLookup({
     *         apiKey: "apiKey",
     *         ips: ["ips"]
     *     })
     */
    bulkIpSecurityLookup(request: ApifreaksApi.BulkIpSecurityLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.BulkIpSecurityLookupResponseItem[]>;
    private __bulkIpSecurityLookup;
    /**
     * Convert a given address or place name into geographic coordinates (latitude and longitude).
     *
     * @param {ApifreaksApi.GeocoderSearchRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.geocoderSearch({
     *         apiKey: "apiKey",
     *         query: "query"
     *     })
     */
    geocoderSearch(request: ApifreaksApi.GeocoderSearchRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.GeocoderSearchResponseItem[]>;
    private __geocoderSearch;
    /**
     * Convert geographic coordinates (latitude and longitude) into a human-readable address or place name.
     *
     * @param {ApifreaksApi.GeocoderReverseRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.geocoderReverse({
     *         apiKey: "apiKey",
     *         lat: 1.1,
     *         lon: 1.1
     *     })
     */
    geocoderReverse(request: ApifreaksApi.GeocoderReverseRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.GeocoderReverseResponse>;
    private __geocoderReverse;
    /**
     * Retrieve current WHOIS information for a domain name.
     * This endpoint provides detailed registration information including registrar details,
     * dates, nameservers, and registrant information.
     *
     * @param {ApifreaksApi.DomainWhoisLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.RequestTimeoutError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.domainWhoisLookup({
     *         apiKey: "apiKey",
     *         domainName: "domainName"
     *     })
     */
    domainWhoisLookup(request: ApifreaksApi.DomainWhoisLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.DomainWhoisLookupResponse>;
    private __domainWhoisLookup;
    /**
     * Retrieve WHOIS information for `100 Domains per Request`.
     *
     * @param {ApifreaksApi.BulkDomainWhoisLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.bulkDomainWhoisLookup({
     *         apiKey: "apiKey",
     *         domainNames: ["domainNames"]
     *     })
     */
    bulkDomainWhoisLookup(request: ApifreaksApi.BulkDomainWhoisLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.BulkDomainWhoisLookupResponse>;
    private __bulkDomainWhoisLookup;
    /**
     * Returns WHOIS registration details for a specified IP address (IPv4 or IPv6).
     *
     * @param {ApifreaksApi.IpWhoisLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.ipWhoisLookup({
     *         apiKey: "apiKey",
     *         ip: "ip"
     *     })
     */
    ipWhoisLookup(request: ApifreaksApi.IpWhoisLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.IpWhoisLookupResponse>;
    private __ipWhoisLookup;
    /**
     * Returns WHOIS registration details for a specified ASN, with or without the 'as' prefix.
     *
     * @param {ApifreaksApi.AsnWhoisLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.asnWhoisLookup({
     *         apiKey: "apiKey",
     *         asn: "asn"
     *     })
     */
    asnWhoisLookup(request: ApifreaksApi.AsnWhoisLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.AsnWhoisLookupResponse>;
    private __asnWhoisLookup;
    /**
     * Retrieve historical WHOIS records for a domain name.
     * This endpoint provides a timeline of all recorded changes in domain registration information.
     *
     * @param {ApifreaksApi.DomainWhoisHistoryRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.domainWhoisHistory({
     *         apiKey: "apiKey",
     *         domainName: "domainName"
     *     })
     */
    domainWhoisHistory(request: ApifreaksApi.DomainWhoisHistoryRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.DomainWhoisHistoryResponse>;
    private __domainWhoisHistory;
    /**
     * Performs a reverse WHOIS search using one or more search parameters like keyword, email, owner, or company.
     *
     * @param {ApifreaksApi.DomainWhoisReverseRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.domainWhoisReverse({
     *         apiKey: "apiKey"
     *     })
     */
    domainWhoisReverse(request: ApifreaksApi.DomainWhoisReverseRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.DomainWhoisReverseResponse>;
    private __domainWhoisReverse;
    /**
     * Retrieve real-time DNS records for any hostname. Supports multiple record types including A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME records.
     *
     * @param {ApifreaksApi.DomainDnsLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.RequestTimeoutError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.domainDnsLookup({
     *         apiKey: "apiKey",
     *         type: ["type"]
     *     })
     */
    domainDnsLookup(request: ApifreaksApi.DomainDnsLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.DomainDnsLookupResponse>;
    private __domainDnsLookup;
    /**
     * Perform DNS lookups for multiple hostnames in a single request. Supports up to `100 host-names per request`
     * and returns DNS records including A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME records.
     *
     * @param {ApifreaksApi.BulkDomainDnsLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.RequestTimeoutError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.bulkDomainDnsLookup({
     *         apiKey: "apiKey",
     *         type: ["type"],
     *         domainNames: ["domainNames"]
     *     })
     */
    bulkDomainDnsLookup(request: ApifreaksApi.BulkDomainDnsLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.BulkDomainDnsLookupResponse>;
    private __bulkDomainDnsLookup;
    /**
     * Retrieve historical DNS records for any hostname. Access unique historical data for A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME records,
     * including subdomains. Results are paginated with up to 100 unique records per page.
     *
     * @param {ApifreaksApi.DomainDnsHistoryRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.RequestTimeoutError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.domainDnsHistory({
     *         apiKey: "apiKey",
     *         "host-name": "host-name",
     *         type: ["type"]
     *     })
     */
    domainDnsHistory(request: ApifreaksApi.DomainDnsHistoryRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.DomainDnsHistoryResponse>;
    private __domainDnsHistory;
    /**
     * Retrieve all the hostnames associated with any particular A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME DNS records. For instance, you can access all the hostnames hosted on any IP/CIDR notation, all the domain names using Cloudflare name servers, and all the domain names using Google Mailbox
     *
     * @param {ApifreaksApi.DomainDnsReverseRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.RequestTimeoutError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.domainDnsReverse({
     *         apiKey: "apiKey",
     *         type: "A",
     *         value: "value"
     *     })
     */
    domainDnsReverse(request: ApifreaksApi.DomainDnsReverseRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.DomainDnsReverseResponse>;
    private __domainDnsReverse;
    /**
     * Execute a series of web scraping instructions on a target URL.
     * Supports various operations like form filling, clicking, data extraction, and CAPTCHA solving.
     *
     * @param {ApifreaksApi.WebScrapeRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.MethodNotAllowedError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.RequestTimeoutError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.webScrape({
     *         apiKey: "apiKey",
     *         url: "https://example.com",
     *         body: {
     *             blockUrl: ["https://example.com/ads.js", "https://tracker.example.com/*"],
     *             cookies: [{
     *                     name: "sessionid",
     *                     value: "abc123"
     *                 }, {
     *                     name: "user_pref",
     *                     value: "darkmode"
     *                 }],
     *             instructions: [{
     *                     fill: {
     *                         place: "#username",
     *                         value: "myuser"
     *                     }
     *                 }, {
     *                     fill: {
     *                         place: "#password",
     *                         value: "mypassword"
     *                     }
     *                 }, {
     *                     click: "#loginButton"
     *                 }, {
     *                     wait: 2000
     *                 }, {
     *                     extract: {
     *                         html: "#profile",
     *                         text: "#welcome-message",
     *                         user_data: "#user-info"
     *                     }
     *                 }, {
     *                     blockElement: [".ad-banner", "//div[@class='popup']"]
     *                 }, {
     *                     generalImageCaptcha: [{
     *                             imagePath: "#captcha-img",
     *                             textField: "#captcha-input",
     *                             imageUpdatePath: "#refresh-captcha",
     *                             captchaFailedPath: "#captcha-error",
     *                             model: "mini-ocr-v1"
     *                         }]
     *                 }]
     *         }
     *     })
     *
     * @example
     *     await client.webScrape({
     *         apiKey: "apiKey",
     *         url: "https://example.com",
     *         body: {
     *             instructions: [{
     *                     postForm: {
     *                         selector: "#loginForm"
     *                     }
     *                 }, {
     *                     extract: {
     *                         html: "#main-content",
     *                         text: "#welcome-message"
     *                     }
     *                 }, {
     *                     getForm: {
     *                         selector: "#searchForm"
     *                     }
     *                 }, {
     *                     extract: {
     *                         text: "#search-results"
     *                     }
     *                 }]
     *         }
     *     })
     */
    webScrape(request: ApifreaksApi.WebScrapeRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.WebScrapeResponse>;
    private __webScrape;
    /**
     * Validates a single email address and returns result.
     *
     * @param {ApifreaksApi.EmailValidateRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.RequestTimeoutError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.emailValidate({
     *         apiKey: "apiKey",
     *         email: "email"
     *     })
     */
    emailValidate(request: ApifreaksApi.EmailValidateRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.EmailValidateResponse>;
    private __emailValidate;
    /**
     * Validates a bulk of email addresses and returns result for each. Maximum `10` email addresses per request.
     *
     * @param {ApifreaksApi.BulkEmailValidateRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.RequestTimeoutError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.bulkEmailValidate({
     *         apiKey: "apiKey",
     *         emailData: [{
     *                 email: "email"
     *             }]
     *     })
     */
    bulkEmailValidate(request: ApifreaksApi.BulkEmailValidateRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.BulkEmailValidateResponse>;
    private __bulkEmailValidate;
    /**
     * Validates a single phone number and returns detailed metadata including carrier, line type, geolocation, time zones, and standardized formats.
     *
     * @param {ApifreaksApi.PhoneValidateRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.MethodNotAllowedError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.RequestTimeoutError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.phoneValidate({
     *         apiKey: "apiKey",
     *         number: "+14155552671"
     *     })
     *
     * @example
     *     await client.phoneValidate({
     *         apiKey: "apiKey",
     *         number: "03301112233",
     *         region: "PK"
     *     })
     *
     * @example
     *     await client.phoneValidate({
     *         apiKey: "apiKey",
     *         number: "0014155552671",
     *         dialer_region: "AU"
     *     })
     */
    phoneValidate(request: ApifreaksApi.PhoneValidateRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PhoneValidateResponse>;
    private __phoneValidate;
    /**
     * Validates up to 100 phone numbers in a single request. Each number is processed independently — invalid entries return per-number errors without affecting the rest of the batch.
     *
     * @param {ApifreaksApi.BulkPhoneValidateRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.MethodNotAllowedError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.RequestTimeoutError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.bulkPhoneValidate({
     *         apiKey: "apiKey",
     *         numbers: [{
     *                 number: "+14155552671"
     *             }, {
     *                 number: "+447911123456"
     *             }, {
     *                 number: "+919876543210"
     *             }]
     *     })
     *
     * @example
     *     await client.bulkPhoneValidate({
     *         apiKey: "apiKey",
     *         numbers: [{
     *                 number: "03301112233",
     *                 region: "PK"
     *             }, {
     *                 number: "number",
     *                 region: "GB"
     *             }, {
     *                 number: "number",
     *                 region: "IN"
     *             }]
     *     })
     *
     * @example
     *     await client.bulkPhoneValidate({
     *         apiKey: "apiKey",
     *         numbers: [{
     *                 number: "+14155552671"
     *             }, {
     *                 number: "03301112233",
     *                 region: "PK"
     *             }, {
     *                 number: "0014155552671",
     *                 dialer_region: "AU"
     *             }]
     *     })
     */
    bulkPhoneValidate(request: ApifreaksApi.BulkPhoneValidateRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.BulkPhoneValidateResponseItem[]>;
    private __bulkPhoneValidate;
    /**
     * Retrieve comprehensive SSL certificate information without the certificate chain.
     * This endpoint provides detailed information about the SSL certificate including expiry dates, issuer details, and encryption methods.
     *
     * @param {ApifreaksApi.DomainSslLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.domainSslLookup({
     *         apiKey: "apiKey",
     *         domainName: "domainName"
     *     })
     */
    domainSslLookup(request: ApifreaksApi.DomainSslLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.DomainSslLookupResponse>;
    private __domainSslLookup;
    /**
     * Retrieve the complete SSL certificate chain from root Certificate Authority (CA) to end-user certificate.
     * This endpoint provides comprehensive information about each certificate in the chain.
     *
     * @param {ApifreaksApi.DomainSslChainLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.domainSslChainLookup({
     *         apiKey: "apiKey",
     *         domainName: "domainName"
     *     })
     */
    domainSslChainLookup(request: ApifreaksApi.DomainSslChainLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.DomainSslChainLookupResponse>;
    private __domainSslChainLookup;
    /**
     * The Domain Search API is designed to simplify the process of finding available domain names across all top-level domains (TLDs) and second-level domains (SLDs).
     *
     * @param {ApifreaksApi.DomainAvailabilityCheckRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.RequestTimeoutError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.domainAvailabilityCheck({
     *         apiKey: "apiKey",
     *         domain: "domain"
     *     })
     */
    domainAvailabilityCheck(request: ApifreaksApi.DomainAvailabilityCheckRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.DomainAvailabilityCheckResponse>;
    private __domainAvailabilityCheck;
    /**
     * Perform Bulk Domain Availability checks using a list of domains. Supports upto `100 Domains Per Request`.
     *
     * @param {ApifreaksApi.BulkDomainAvailabilityCheckRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.RequestTimeoutError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.bulkDomainAvailabilityCheck({
     *         apiKey: "apiKey",
     *         domainNames: ["domainNames"]
     *     })
     */
    bulkDomainAvailabilityCheck(request: ApifreaksApi.BulkDomainAvailabilityCheckRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.BulkDomainAvailabilityCheckResponse>;
    private __bulkDomainAvailabilityCheck;
    /**
     * The Domain Search API is designed to simplify the process of finding available domain names across all top-level domains (TLDs) and second-level domains (SLDs).
     *
     * @param {ApifreaksApi.DomainAvailabilitySuggestionsRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.RequestTimeoutError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.domainAvailabilitySuggestions({
     *         apiKey: "apiKey",
     *         domain: "domain"
     *     })
     */
    domainAvailabilitySuggestions(request: ApifreaksApi.DomainAvailabilitySuggestionsRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.DomainAvailabilitySuggestionsResponse>;
    private __domainAvailabilitySuggestions;
    /**
     * The Subdomain Lookup API is designed to retrieve subdomains related to the given domain name. It helps you explore subdomains that are available for registration or usage.
     *
     * @param {ApifreaksApi.SubdomainsLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.RequestTimeoutError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.subdomainsLookup({
     *         apiKey: "apiKey",
     *         domain: "domain"
     *     })
     */
    subdomainsLookup(request: ApifreaksApi.SubdomainsLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.SubdomainsLookupResponse>;
    private __subdomainsLookup;
    /**
     * This API merges multiple PDF files into a single PDF, in the order they are provided
     *
     * @param {ApifreaksApi.PdfMergeRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.UnsupportedMediaTypeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pdfMerge({
     *         apiKey: "apiKey"
     *     })
     */
    pdfMerge(request: ApifreaksApi.PdfMergeRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfMergeResponse>;
    private __pdfMerge;
    /**
     * This API removes a selection or range of pages from a PDF file.
     *
     * @param {ApifreaksApi.PdfRemovePagesRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.UnsupportedMediaTypeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pdfRemovePages({
     *         apiKey: "apiKey",
     *         pages: "pages"
     *     })
     */
    pdfRemovePages(request: ApifreaksApi.PdfRemovePagesRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfRemovePagesResponse>;
    private __pdfRemovePages;
    /**
     * This API splits a PDF into multiple parts based on specified page numbers or ranges.
     *
     * @param {ApifreaksApi.PdfSplitRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.UnsupportedMediaTypeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pdfSplit({
     *         apiKey: "apiKey"
     *     })
     */
    pdfSplit(request: ApifreaksApi.PdfSplitRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfSplitResponse>;
    private __pdfSplit;
    /**
     * This API rotates pages of a PDF by a specified angle (in multiples of 90 degrees).
     *
     * @param {ApifreaksApi.PdfRotateRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.UnsupportedMediaTypeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pdfRotate({
     *         apiKey: "apiKey",
     *         rotate: 1
     *     })
     */
    pdfRotate(request: ApifreaksApi.PdfRotateRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfRotateResponse>;
    private __pdfRotate;
    /**
     * This API compresses a given PDF file to reduce its file size.
     *
     * @param {ApifreaksApi.PdfCompressRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.UnsupportedMediaTypeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pdfCompress({
     *         apiKey: "apiKey",
     *         compression_level: "low"
     *     })
     */
    pdfCompress(request: ApifreaksApi.PdfCompressRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfCompressResponse>;
    private __pdfCompress;
    /**
     * This API extracts specific pages or page ranges from a PDF file and returns them as a new PDF.
     *
     * @param {ApifreaksApi.PdfExtractPagesRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pdfExtractPages({
     *         apiKey: "apiKey",
     *         pages: "pages"
     *     })
     */
    pdfExtractPages(request: ApifreaksApi.PdfExtractPagesRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfExtractPagesResponse>;
    private __pdfExtractPages;
    /**
     * API endpoint that linearizes any given PDF, restructuring it for faster loading and page-by-page viewing in web browsers.
     *
     * @param {ApifreaksApi.PdfLinearizeRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pdfLinearize({
     *         apiKey: "apiKey"
     *     })
     */
    pdfLinearize(request: ApifreaksApi.PdfLinearizeRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfLinearizeResponse>;
    private __pdfLinearize;
    /**
     * This API encrypts a PDF file by setting a password required to open it.
     *
     * @param {ApifreaksApi.PdfEncryptRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.UnsupportedMediaTypeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pdfEncrypt({
     *         apiKey: "apiKey",
     *         user_password: "user_password"
     *     })
     */
    pdfEncrypt(request: ApifreaksApi.PdfEncryptRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfEncryptResponse>;
    private __pdfEncrypt;
    /**
     * This API decrypts PDF files, removing all encryption, including open passwords and permission restrictions.
     *
     * @param {ApifreaksApi.PdfDecryptRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.UnsupportedMediaTypeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pdfDecrypt({
     *         apiKey: "apiKey",
     *         file_password: "file_password"
     *     })
     */
    pdfDecrypt(request: ApifreaksApi.PdfDecryptRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfDecryptResponse>;
    private __pdfDecrypt;
    /**
     * This API applies permission restrictions on a PDF file, such as disabling printing, copying, or editing. This can include password protection to enforce restrictions.
     *
     * @param {ApifreaksApi.PdfRestrictRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.UnsupportedMediaTypeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pdfRestrict({
     *         apiKey: "apiKey",
     *         user_password: "user_password",
     *         restrictions: ["print_high"]
     *     })
     */
    pdfRestrict(request: ApifreaksApi.PdfRestrictRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfRestrictResponse>;
    private __pdfRestrict;
    /**
     * This API removes permission restrictions from a PDF while keeping it encrypted. If you want to remove all security (including encryption), use the `/pdf/decrypt` endpoint instead.
     *
     * @param {ApifreaksApi.PdfUnrestrictRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.UnsupportedMediaTypeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pdfUnrestrict({
     *         apiKey: "apiKey",
     *         file_password: "file_password"
     *     })
     */
    pdfUnrestrict(request: ApifreaksApi.PdfUnrestrictRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfUnrestrictResponse>;
    private __pdfUnrestrict;
    /**
     * This API converts a given PDF file into a sequence of PNG images.
     *
     * @param {ApifreaksApi.PdfConvertToPngRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pdfConvertToPng({
     *         apiKey: "apiKey"
     *     })
     */
    pdfConvertToPng(request: ApifreaksApi.PdfConvertToPngRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfConvertToPngResponse>;
    private __pdfConvertToPng;
    /**
     * This API converts a given PDF file into a sequence of JPG images.
     *
     * @param {ApifreaksApi.PdfConvertToJpgRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pdfConvertToJpg({
     *         apiKey: "apiKey"
     *     })
     */
    pdfConvertToJpg(request: ApifreaksApi.PdfConvertToJpgRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfConvertToJpgResponse>;
    private __pdfConvertToJpg;
    /**
     * This API converts a given PDF file into a sequence of TIFF images. The output images can be saved as a single TIFF file, or as a sequence of TIFF files.
     *
     * @param {ApifreaksApi.PdfConvertToTiffRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pdfConvertToTiff({
     *         apiKey: "apiKey"
     *     })
     */
    pdfConvertToTiff(request: ApifreaksApi.PdfConvertToTiffRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfConvertToTiffResponse>;
    private __pdfConvertToTiff;
    /**
     * Converts a PDF file to a BMP image.
     *
     * @param {ApifreaksApi.PdfConvertToBmpRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pdfConvertToBmp({
     *         apiKey: "apiKey"
     *     })
     */
    pdfConvertToBmp(request: ApifreaksApi.PdfConvertToBmpRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfConvertToBmpResponse>;
    private __pdfConvertToBmp;
    /**
     * This API converts a given PDF file into a sequence of GIF images.
     *
     * @param {ApifreaksApi.PdfConvertToGifRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pdfConvertToGif({
     *         apiKey: "apiKey"
     *     })
     */
    pdfConvertToGif(request: ApifreaksApi.PdfConvertToGifRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfConvertToGifResponse>;
    private __pdfConvertToGif;
    /**
     * This API uploads multiple PDF files to the API Freaks server and generates their unique file IDs.
     *
     * @param {ApifreaksApi.PdfUploadResourcesRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.UnsupportedMediaTypeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pdfUploadResources({
     *         apiKey: "apiKey"
     *     })
     */
    pdfUploadResources(request: ApifreaksApi.PdfUploadResourcesRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfUploadResourcesResponse>;
    private __pdfUploadResources;
    /**
     * This API uploads PDF files to the API Freaks server in binary format.
     *
     * @param {core.file.Uploadable} uploadable
     * @param {ApifreaksApi.PdfUploadBinaryRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.UnsupportedMediaTypeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     */
    pdfUploadBinary(uploadable: core.file.Uploadable, request: ApifreaksApi.PdfUploadBinaryRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfUploadBinaryResponse>;
    private __pdfUploadBinary;
    /**
     * This API downloads PDF files or ZIP archives from the server using their unique resource ID.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     */
    pdfDownloadResource(request: ApifreaksApi.PdfDownloadResourceRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<core.BinaryResponse>;
    private __pdfDownloadResource;
    /**
     * This API checks the status of a previously initiated PDF processing task using its unique task ID.
     *
     * @param {ApifreaksApi.PdfGetTaskStatusRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.pdfGetTaskStatus({
     *         apiKey: "apiKey",
     *         task_id: "task_id"
     *     })
     */
    pdfGetTaskStatus(request: ApifreaksApi.PdfGetTaskStatusRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfGetTaskStatusResponse>;
    private __pdfGetTaskStatus;
    /**
     * This API checks the status of a PDF file using its unique file ID, providing information about its creation and potential deletion time.
     *
     * @param {ApifreaksApi.PdfGetFileStatusRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.pdfGetFileStatus({
     *         apiKey: "apiKey",
     *         file_id: "file_id"
     *     })
     */
    pdfGetFileStatus(request: ApifreaksApi.PdfGetFileStatusRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfGetFileStatusResponse>;
    private __pdfGetFileStatus;
    /**
     * This API retrieves a list of all PDF files uploaded and generated by a specific user. Please note that if the user is part of an organization, only the Organization Administrator can access this endpoint. Organization Members cannot access this endpoint.
     *
     * @param {ApifreaksApi.PdfListFilesRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.pdfListFiles({
     *         apiKey: "apiKey"
     *     })
     */
    pdfListFiles(request: ApifreaksApi.PdfListFilesRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfListFilesResponse>;
    private __pdfListFiles;
    /**
     * This API deletes a PDF file using its unique file ID.
     *
     * @param {ApifreaksApi.PdfDeleteFileRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.pdfDeleteFile({
     *         apiKey: "apiKey",
     *         file_id: "file_id"
     *     })
     */
    pdfDeleteFile(request: ApifreaksApi.PdfDeleteFileRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.PdfDeleteFileResponse>;
    private __pdfDeleteFile;
    /**
     * Capture full-page screenshots and videos of websites with advanced options like device simulation, custom code injection, cookie banner blocking, and scrollable content recording.
     * Supports multiple output formats including JSON, image, GIF, MP4, and WebM.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ProxyAuthenticationRequiredError}
     * @throws {@link ApifreaksApi.RequestTimeoutError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.NoResponseError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     */
    screenshotCapture(request: ApifreaksApi.ScreenshotCaptureRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<core.BinaryResponse>;
    private __screenshotCapture;
    /**
     * Our Bulk Screenshot API allows you to capture screenshots of multiple webpages simultaneously, saving you time and effort. Instead of manually capturing each page one by one, you can batch process URLs and receive high-quality screenshots in the format you choose.
     *  Maximum `50 URLs` per request.
     *
     * @param {ApifreaksApi.BulkScreenshotCaptureRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.bulkScreenshotCapture({
     *         apiKey: "apiKey",
     *         urls: [{
     *                 url: "url"
     *             }]
     *     })
     */
    bulkScreenshotCapture(request: ApifreaksApi.BulkScreenshotCaptureRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.BulkScreenshotCaptureResponse>;
    private __bulkScreenshotCapture;
    /**
     * Get live forex rates for all world currencies with customizable update frequency
     *
     * @param {ApifreaksApi.CurrencyLatestRatesRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.currencyLatestRates({
     *         apiKey: "apiKey"
     *     })
     */
    currencyLatestRates(request: ApifreaksApi.CurrencyLatestRatesRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.CurrencyLatestRatesResponse>;
    private __currencyLatestRates;
    /**
     * Get historical exchange rates for any specific date
     *
     * @param {ApifreaksApi.CurrencyHistoricalRatesRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.currencyHistoricalRates({
     *         apiKey: "apiKey",
     *         date: "2023-01-15"
     *     })
     */
    currencyHistoricalRates(request: ApifreaksApi.CurrencyHistoricalRatesRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.CurrencyHistoricalRatesResponse>;
    private __currencyHistoricalRates;
    /**
     * Convert amount between currencies using the latest exchange rates
     *
     * @param {ApifreaksApi.CurrencyConvertLatestRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.currencyConvertLatest({
     *         apiKey: "apiKey",
     *         from: "from",
     *         to: "to"
     *     })
     */
    currencyConvertLatest(request: ApifreaksApi.CurrencyConvertLatestRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.CurrencyConvertLatestResponse>;
    private __currencyConvertLatest;
    /**
     * Convert amount between currencies using historical rates
     *
     * @param {ApifreaksApi.CurrencyConvertHistoricalRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.currencyConvertHistorical({
     *         apiKey: "apiKey",
     *         from: "from",
     *         to: "to",
     *         date: "2023-01-15"
     *     })
     */
    currencyConvertHistorical(request: ApifreaksApi.CurrencyConvertHistoricalRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.CurrencyConvertHistoricalResponse>;
    private __currencyConvertHistorical;
    /**
     * Get exchange rates for a time range
     *
     * @param {ApifreaksApi.CurrencyTimeSeriesRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.currencyTimeSeries({
     *         apiKey: "apiKey",
     *         startDate: "2023-01-15"
     *     })
     */
    currencyTimeSeries(request: ApifreaksApi.CurrencyTimeSeriesRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.CurrencyTimeSeriesResponse>;
    private __currencyTimeSeries;
    /**
     * Get currency fluctuation data for a time period
     *
     * @param {ApifreaksApi.CurrencyFluctuationRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.currencyFluctuation({
     *         apiKey: "apiKey",
     *         startDate: "2023-01-15",
     *         base: "USD"
     *     })
     */
    currencyFluctuation(request: ApifreaksApi.CurrencyFluctuationRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.CurrencyFluctuationResponse>;
    private __currencyFluctuation;
    /**
     * Convert amount using user's location
     *
     * @param {ApifreaksApi.CurrencyConvertByIpRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.currencyConvertByIp({
     *         apiKey: "apiKey",
     *         from: "from"
     *     })
     */
    currencyConvertByIp(request: ApifreaksApi.CurrencyConvertByIpRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.CurrencyConvertByIpResponse>;
    private __currencyConvertByIp;
    /**
     * Get list of all supported currencies with their metadata
     *
     * @param {ApifreaksApi.CurrencySupportedRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.currencySupported({
     *         apiKey: "apiKey"
     *     })
     */
    currencySupported(request: ApifreaksApi.CurrencySupportedRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.CurrencySupportedResponse>;
    private __currencySupported;
    /**
     * Get currency symbols and codes
     *
     * @param {ApifreaksApi.CurrencySymbolsRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.currencySymbols({
     *         apiKey: "apiKey"
     *     })
     */
    currencySymbols(request: ApifreaksApi.CurrencySymbolsRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.CurrencySymbolsResponse>;
    private __currencySymbols;
    /**
     * Get information about historical data availability and limits
     *
     * @param {ApifreaksApi.CurrencyHistoricalLimitsRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.currencyHistoricalLimits({
     *         apiKey: "apiKey"
     *     })
     */
    currencyHistoricalLimits(request: ApifreaksApi.CurrencyHistoricalLimitsRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.CurrencyHistoricalLimitsResponse>;
    private __currencyHistoricalLimits;
    /**
     * Get live commodity rates with customizable update frequency
     *
     * @param {ApifreaksApi.CommodityLatestRatesRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.commodityLatestRates({
     *         apiKey: "apiKey",
     *         symbols: ["symbols"],
     *         updates: "10m"
     *     })
     */
    commodityLatestRates(request: ApifreaksApi.CommodityLatestRatesRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.CommodityLatestRatesResponse>;
    private __commodityLatestRates;
    /**
     * Get historical commodity rates for a specific date
     *
     * @param {ApifreaksApi.CommodityHistoricalRatesRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.commodityHistoricalRates({
     *         apiKey: "apiKey",
     *         date: "2023-01-15",
     *         symbols: ["symbols"]
     *     })
     */
    commodityHistoricalRates(request: ApifreaksApi.CommodityHistoricalRatesRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.CommodityHistoricalRatesResponse>;
    private __commodityHistoricalRates;
    /**
     * Get commodity price fluctuation data for a time period
     *
     * @param {ApifreaksApi.CommodityFluctuationRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.commodityFluctuation({
     *         apiKey: "apiKey",
     *         symbols: ["symbols"],
     *         startDate: "2023-01-15",
     *         endDate: "2023-01-15"
     *     })
     */
    commodityFluctuation(request: ApifreaksApi.CommodityFluctuationRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.CommodityFluctuationResponse>;
    private __commodityFluctuation;
    /**
     * Get commodity rates for a time range
     *
     * @param {ApifreaksApi.CommodityTimeSeriesRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.commodityTimeSeries({
     *         apiKey: "apiKey",
     *         symbols: ["symbols"],
     *         startDate: "2023-01-15",
     *         endDate: "2023-01-15"
     *     })
     */
    commodityTimeSeries(request: ApifreaksApi.CommodityTimeSeriesRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.CommodityTimeSeriesResponse>;
    private __commodityTimeSeries;
    /**
     * Get list of supported commodities
     *
     * @param {ApifreaksApi.CommoditySymbolsRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.commoditySymbols({
     *         apiKey: "apiKey"
     *     })
     */
    commoditySymbols(request: ApifreaksApi.CommoditySymbolsRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.CommoditySymbolsResponse>;
    private __commoditySymbols;
    /**
     * Retrieves a list of supported countries.
     *
     * @param {ApifreaksApi.VatSupportedCountriesRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.vatSupportedCountries({
     *         apiKey: "apiKey"
     *     })
     */
    vatSupportedCountries(request: ApifreaksApi.VatSupportedCountriesRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.VatSupportedCountriesResponse>;
    private __vatSupportedCountries;
    /**
     * Fetches VAT rate based on the specified or originating IP address.
     *
     * @param {ApifreaksApi.VatRateByIpRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.vatRateByIp({
     *         apiKey: "apiKey"
     *     })
     */
    vatRateByIp(request: ApifreaksApi.VatRateByIpRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.VatRateByIpResponseItem[]>;
    private __vatRateByIp;
    /**
     * Fetches VAT rates for a single country or state provided via query parameters.
     *
     * @param {ApifreaksApi.VatRateByCountryRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.vatRateByCountry({
     *         apiKey: "apiKey",
     *         country: "country"
     *     })
     */
    vatRateByCountry(request: ApifreaksApi.VatRateByCountryRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.VatRateByCountryResponseItem[]>;
    private __vatRateByCountry;
    /**
     * Retrieves VAT details for multiple countries or country-state combinations in a single request. Maximum of `100` entries per request are allowed.
     *
     * @param {ApifreaksApi.BulkVatRateByCountryRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.bulkVatRateByCountry({
     *         apiKey: "apiKey",
     *         countries: [{
     *                 country: "PAK"
     *             }, {
     *                 country: "United_States",
     *                 state: "New_York"
     *             }]
     *     })
     */
    bulkVatRateByCountry(request: ApifreaksApi.BulkVatRateByCountryRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.BulkVatRateByCountryResponse>;
    private __bulkVatRateByCountry;
    /**
     * Validates an EU or UK VAT number and returns registration status details.
     *
     * @param {ApifreaksApi.VatValidateRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.vatValidate({
     *         apiKey: "apiKey",
     *         vatNumber: "vatNumber"
     *     })
     */
    vatValidate(request: ApifreaksApi.VatValidateRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.VatValidateResponse>;
    private __vatValidate;
    /**
     * Checks an IBAN for structural validity, checksum accuracy, and bank metadata.
     *
     * @param {ApifreaksApi.IbanValidateRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.ibanValidate({
     *         apiKey: "apiKey",
     *         iban: "iban"
     *     })
     */
    ibanValidate(request: ApifreaksApi.IbanValidateRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.IbanValidateResponse>;
    private __ibanValidate;
    /**
     * Fetches SWIFT codes for a given country, bank, and city.
     *
     * @param {ApifreaksApi.SwiftCodeFindRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.swiftCodeFind({
     *         apiKey: "apiKey"
     *     })
     */
    swiftCodeFind(request: ApifreaksApi.SwiftCodeFindRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<string[]>;
    private __swiftCodeFind;
    /**
     * Fetches detailed information about a SWIFT code.
     *
     * @param {ApifreaksApi.SwiftCodeLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.swiftCodeLookup({
     *         apiKey: "apiKey",
     *         swiftCode: "swiftCode"
     *     })
     */
    swiftCodeLookup(request: ApifreaksApi.SwiftCodeLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.SwiftCodeLookupResponse>;
    private __swiftCodeLookup;
    /**
     * @param {ApifreaksApi.ZipcodeLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.zipcodeLookup({
     *         apiKey: "apiKey",
     *         code: "code"
     *     })
     */
    zipcodeLookup(request: ApifreaksApi.ZipcodeLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.ZipcodeLookupResponse>;
    private __zipcodeLookup;
    /**
     * Validates a bulk of ZIP/postal codes and returns result for each. Maximum `100` ZIP/postal codes per request.
     *
     * @param {ApifreaksApi.BulkZipcodeLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.bulkZipcodeLookup({
     *         apiKey: "apiKey",
     *         codes: ["codes"]
     *     })
     */
    bulkZipcodeLookup(request: ApifreaksApi.BulkZipcodeLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.BulkZipcodeLookupResponse>;
    private __bulkZipcodeLookup;
    /**
     * @param {ApifreaksApi.ZipcodeSearchByCityRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.zipcodeSearchByCity({
     *         apiKey: "apiKey",
     *         city: "city",
     *         country: "country"
     *     })
     */
    zipcodeSearchByCity(request: ApifreaksApi.ZipcodeSearchByCityRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.ZipcodeSearchByCityResponse>;
    private __zipcodeSearchByCity;
    /**
     * @param {ApifreaksApi.ZipcodeSearchByRegionRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.zipcodeSearchByRegion({
     *         apiKey: "apiKey",
     *         country: "country",
     *         region: "region"
     *     })
     */
    zipcodeSearchByRegion(request: ApifreaksApi.ZipcodeSearchByRegionRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.ZipcodeSearchByRegionResponse>;
    private __zipcodeSearchByRegion;
    /**
     * @param {ApifreaksApi.ZipcodeSearchByRadiusRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.zipcodeSearchByRadius({
     *         apiKey: "apiKey",
     *         radius: 1.1
     *     })
     */
    zipcodeSearchByRadius(request: ApifreaksApi.ZipcodeSearchByRadiusRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.ZipcodeSearchByRadiusResponse>;
    private __zipcodeSearchByRadius;
    /**
     * Get distance between postal codes. Maximum `100` postal codes per request.
     *
     * @param {ApifreaksApi.ZipcodeDistanceRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.zipcodeDistance({
     *         apiKey: "apiKey",
     *         compare: ["compare"],
     *         country: "country"
     *     })
     */
    zipcodeDistance(request: ApifreaksApi.ZipcodeDistanceRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.ZipcodeDistanceResponse>;
    private __zipcodeDistance;
    /**
     * Get matching ZIP/postal code pairs within a specified distance. Maximum `100` postal codes per request.
     *
     * @param {ApifreaksApi.ZipcodeDistanceMatchRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.zipcodeDistanceMatch({
     *         apiKey: "apiKey",
     *         codes: ["codes"],
     *         country: "country"
     *     })
     */
    zipcodeDistanceMatch(request: ApifreaksApi.ZipcodeDistanceMatchRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.ZipcodeDistanceMatchResponse>;
    private __zipcodeDistanceMatch;
    /**
     * Get current weather data including temperature, humidity, precipitation, wind conditions, atmospheric pressure, and air quality for any location. Accepts city names, coordinates, or IP addresses. Also includes astronomy data and timezone-aware timestamps.
     *
     * @param {ApifreaksApi.CurrentWeatherRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.currentWeather({
     *         apiKey: "apiKey"
     *     })
     */
    currentWeather(request: ApifreaksApi.CurrentWeatherRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.CurrentWeatherResponse>;
    private __currentWeather;
    /**
     * Retrieve current weather conditions for up to `50 locations` in a single request. A maximum of 50 locations (city names, IP addresses, or geographic coordinates) can be included in the request body.
     *
     * @param {ApifreaksApi.BulkCurrentWeatherRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.bulkCurrentWeather({
     *         apiKey: "apiKey",
     *         locations: [{
     *                 location: "lahore"
     *             }, {
     *                 lat: 32.5,
     *                 long: 74.5
     *             }, {
     *                 ip: "8.8.8.8"
     *             }, {
     *                 location: "seoul"
     *             }]
     *     })
     */
    bulkCurrentWeather(request: ApifreaksApi.BulkCurrentWeatherRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.BulkCurrentWeatherResponse>;
    private __bulkCurrentWeather;
    /**
     * Access comprehensive weather forecasts with customizable precision - choose from daily overviews, hourly breakdowns, or even minute-by-minute data. Configure your date ranges or use the default 7-day forecast for standard weather planning.
     *
     * @param {ApifreaksApi.WeatherForecastRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.weatherForecast({
     *         apiKey: "apiKey"
     *     })
     */
    weatherForecast(request: ApifreaksApi.WeatherForecastRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.WeatherForecastResponse>;
    private __weatherForecast;
    /**
     * Access past weather conditions for specific dates with records going back to 1940. Retrieve comprehensive historical data with both daily and hourly precision options.
     *
     * @param {ApifreaksApi.HistoricalWeatherRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.historicalWeather({
     *         apiKey: "apiKey",
     *         date: "2023-01-15"
     *     })
     */
    historicalWeather(request: ApifreaksApi.HistoricalWeatherRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.HistoricalWeatherResponse>;
    private __historicalWeather;
    /**
     * Pull historical weather information for date ranges up to 90 days (daily data) or 7 days (hourly data). Get consistent formatting across your specified date range with reliable historical weather patterns.
     *
     * @param {ApifreaksApi.WeatherTimeSeriesRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.weatherTimeSeries({
     *         apiKey: "apiKey",
     *         startDate: "2023-01-15",
     *         endDate: "2023-01-15"
     *     })
     */
    weatherTimeSeries(request: ApifreaksApi.WeatherTimeSeriesRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.WeatherTimeSeriesResponse>;
    private __weatherTimeSeries;
    /**
     * Provides hourly forecasts of marine conditions including wave heights, wave directions, wave periods, swell info, sea surface temperatures, and ocean currents. Supports multiple geographical points and returns daily max wave statistics for up to 7 days. Ideal for maritime planning, navigation, and coastal activities.
     *
     * @param {ApifreaksApi.MarineWeatherRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.marineWeather({
     *         apiKey: "apiKey"
     *     })
     */
    marineWeather(request: ApifreaksApi.MarineWeatherRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.MarineWeatherResponse>;
    private __marineWeather;
    /**
     * Monitor and predict air quality conditions using European and US AQI standards. Track pollutant concentrations including PM10, PM2.5, carbon monoxide, nitrogen dioxide, sulfur dioxide, ozone, and dust particles. Get current readings plus hourly forecasts up to 5 days ahead, complete with UV index and aerosol measurements for comprehensive air quality assessment.
     *
     * @param {ApifreaksApi.AirQualityRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.airQuality({
     *         apiKey: "apiKey"
     *     })
     */
    airQuality(request: ApifreaksApi.AirQualityRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.AirQualityResponse>;
    private __airQuality;
    /**
     * Provides flood forecast data for a given location, including river discharge metrics such as mean, median, maximum, minimum, and percentile values (p25, p75). Requires a startDate and endDate, with the date range limited to 16 days. Location can be specified using city name, latitude/longitude, or IP address.
     *
     * @param {ApifreaksApi.FloodForecastRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.floodForecast({
     *         apiKey: "apiKey",
     *         startDate: "2023-01-15",
     *         endDate: "2023-01-15"
     *     })
     */
    floodForecast(request: ApifreaksApi.FloodForecastRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.FloodForecastResponse>;
    private __floodForecast;
    /**
     * Retrieve countries, optionally filtered by region or subregion.
     *
     * @param {ApifreaksApi.GetCountriesRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.getCountries({
     *         apiKey: "apiKey"
     *     })
     */
    getCountries(request: ApifreaksApi.GetCountriesRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.GetCountriesResponse>;
    private __getCountries;
    /**
     * @param {ApifreaksApi.GetCountryDetailsRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.getCountryDetails({
     *         apiKey: "apiKey",
     *         country: "country"
     *     })
     */
    getCountryDetails(request: ApifreaksApi.GetCountryDetailsRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.GetCountryDetailsResponse>;
    private __getCountryDetails;
    /**
     * @param {ApifreaksApi.GetRegionsRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.getRegions({
     *         apiKey: "apiKey"
     *     })
     */
    getRegions(request: ApifreaksApi.GetRegionsRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.GetRegionsResponse>;
    private __getRegions;
    /**
     * @param {ApifreaksApi.GetSubregionsRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.getSubregions({
     *         apiKey: "apiKey",
     *         region: "region"
     *     })
     */
    getSubregions(request: ApifreaksApi.GetSubregionsRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.GetSubregionsResponse>;
    private __getSubregions;
    /**
     * Retrieve administrative units based on ISO 3166-1 alpha-2 country code.
     *
     * @param {ApifreaksApi.GetAdminLevelsRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.getAdminLevels({
     *         apiKey: "apiKey",
     *         country: "country"
     *     })
     */
    getAdminLevels(request: ApifreaksApi.GetAdminLevelsRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.GetAdminLevelsResponse>;
    private __getAdminLevels;
    /**
     * Retrieve administrative divisions for a given country using ISO 3166-1 alpha-2 country codes. You can optionally filter by administrative levels.
     *
     * @param {ApifreaksApi.GetAdminUnitsRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.getAdminUnits({
     *         apiKey: "apiKey",
     *         country: "country"
     *     })
     */
    getAdminUnits(request: ApifreaksApi.GetAdminUnitsRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.GetAdminUnitsResponse>;
    private __getAdminUnits;
    /**
     * Retrieve detailed administrative unit information by country and optionally filtered by admin code.
     *
     * @param {ApifreaksApi.GetAdminUnitDetailsRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.getAdminUnitDetails({
     *         apiKey: "apiKey",
     *         country: "country",
     *         admin_unit: "admin_unit"
     *     })
     */
    getAdminUnitDetails(request: ApifreaksApi.GetAdminUnitDetailsRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.GetAdminUnitDetailsResponse>;
    private __getAdminUnitDetails;
    /**
     * Retrieve a list of cities within a country, optionally filtered by an administrative unit code.
     *
     * @param {ApifreaksApi.GetCitiesRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.getCities({
     *         apiKey: "apiKey",
     *         country: "country"
     *     })
     */
    getCities(request: ApifreaksApi.GetCitiesRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.GetCitiesResponse>;
    private __getCities;
    /**
     * Get list of all supported flags with their metadata
     *
     * @param {ApifreaksApi.GetSupportedFlagsRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.getSupportedFlags({
     *         apiKey: "apiKey"
     *     })
     */
    getSupportedFlags(request: ApifreaksApi.GetSupportedFlagsRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.GetSupportedFlagsResponseItem[]>;
    private __getSupportedFlags;
    /**
     * Retrieve the flag for a specific country
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     */
    getFlags(request: ApifreaksApi.GetFlagsRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<core.BinaryResponse>;
    private __getFlags;
    /**
     * Retrieve current time, date, and timezone-related information by specifying a timezone name, location address, location coordinates, IP address, or use the client IP address if no parameter is passed.
     *
     * @param {ApifreaksApi.TimezoneLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.timezoneLookup({
     *         apiKey: "apiKey"
     *     })
     */
    timezoneLookup(request: ApifreaksApi.TimezoneLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.TimezoneLookupResponse>;
    private __timezoneLookup;
    /**
     * Converts a given time from one timezone to another using various input types like timezone name, coordinates, location, or codes.
     *
     * @param {ApifreaksApi.TimezoneConvertRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.timezoneConvert({
     *         apiKey: "apiKey"
     *     })
     */
    timezoneConvert(request: ApifreaksApi.TimezoneConvertRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.TimezoneConvertResponse>;
    private __timezoneConvert;
    /**
     * Parse User Agent string to get detailed browser, device, and operating system information
     *
     * @param {ApifreaksApi.UserAgentLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.userAgentLookup({
     *         apiKey: "apiKey",
     *         userAgent: "userAgent"
     *     })
     */
    userAgentLookup(request: ApifreaksApi.UserAgentLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.UserAgentLookupResponse>;
    private __userAgentLookup;
    /**
     * Parse up to `50,000 User-Agent strings` at once in a single request.
     *
     * @param {ApifreaksApi.BulkUserAgentLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.bulkUserAgentLookup({
     *         apiKey: "apiKey",
     *         uaStrings: ["uaStrings"]
     *     })
     */
    bulkUserAgentLookup(request: ApifreaksApi.BulkUserAgentLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.BulkUserAgentLookupResponseItem[]>;
    private __bulkUserAgentLookup;
    /**
     * Perform Optical Character Recognition (OCR) on images, PDFs, or ZIP archives. Supports two models: `mini-ocr-v1` for CAPTCHA-optimized OCR and `ocr-v1` for general-purpose document text extraction. Supports zonal OCR to extract text from specific regions of an image.
     *
     * **Notes:**
     * - The `zone` query parameter cannot be given with .pdf and .zip types as it can only be applied to single image query.
     * - The `page_range` query parameter cannot be given in any other type except .pdf types.
     * - PDFs containing images in them are allowed only for processing.
     * - The `mini-ocr-v1` model doesn’t support the following query parameters:
     *     - `page_range` (.pdf types)
     *     - `zone`
     *
     * @param {ApifreaksApi.OcrPredictRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.ocrPredict({
     *         apiKey: "apiKey",
     *         model: "mini-ocr-v1",
     *         model: "mini-ocr-v1"
     *     })
     */
    ocrPredict(request: ApifreaksApi.OcrPredictRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.OcrPredictResponse>;
    private __ocrPredict;
    /**
     * Analyze text for grammar errors and return the exact words flagged as grammatically incorrect with zero-based word positions.
     *
     * @param {ApifreaksApi.GrammarDetectRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.grammarDetect({
     *         apiKey: "apiKey",
     *         text: "The global mental is health crisis is now a serious and compelex problem. It need quick and ongoing action from policymakers, healthcare workers, and the whole society."
     *     })
     */
    grammarDetect(request: ApifreaksApi.GrammarDetectRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.GrammarDetectResponse>;
    private __grammarDetect;
    /**
     * Submit text with grammatical issues and receive a clean grammar-corrected result for proofreading and content workflows.
     *
     * @param {ApifreaksApi.GrammarCorrectRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.grammarCorrect({
     *         apiKey: "apiKey",
     *         text: "The global mental is health crisis is now a serious and compelex problem. It need quick and ongoing action from policymakers, healthcare workers, and the whole society."
     *     })
     */
    grammarCorrect(request: ApifreaksApi.GrammarCorrectRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.GrammarCorrectResponse>;
    private __grammarCorrect;
    /**
     * Analyze text and return weak, vague, or filler words with zero-based word positions to help writers produce clearer and more concise content.
     *
     * @param {ApifreaksApi.WeakWordsDetectRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.weakWordsDetect({
     *         apiKey: "apiKey",
     *         text: "Many people cannot get the support they need to handle their conditions well."
     *     })
     */
    weakWordsDetect(request: ApifreaksApi.WeakWordsDetectRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.WeakWordsDetectResponse>;
    private __weakWordsDetect;
    /**
     * Analyze text readability using industry-standard formulas including Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog Index, SMOG Index, Coleman-Liau Index, and Automated Readability Index.
     *
     * @param {ApifreaksApi.ReadabilityScoreRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.readabilityScore({
     *         apiKey: "apiKey",
     *         text: "The global mental is health crisis is now a serious and compelex problem. It needs quick and ongoing action from policymakers, healthcare workers, and the whole society."
     *     })
     */
    readabilityScore(request: ApifreaksApi.ReadabilityScoreRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.ReadabilityScoreResponse>;
    private __readabilityScore;
    /**
     * Retrieve sunrise and sunset times, current position of the moon, and other related information by specifying a location address, location coordinates, IP address, or using the client IP address if no parameter is passed.
     *
     * @param {ApifreaksApi.AstronomyLookupRequest} request
     * @param {ApifreaksApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ApifreaksApi.BadRequestError}
     * @throws {@link ApifreaksApi.UnauthorizedError}
     * @throws {@link ApifreaksApi.PaymentRequiredError}
     * @throws {@link ApifreaksApi.ForbiddenError}
     * @throws {@link ApifreaksApi.NotFoundError}
     * @throws {@link ApifreaksApi.NotAcceptableError}
     * @throws {@link ApifreaksApi.ContentTooLargeError}
     * @throws {@link ApifreaksApi.TooManyRequestsError}
     * @throws {@link ApifreaksApi.InternalServerError}
     * @throws {@link ApifreaksApi.ServiceUnavailableError}
     * @throws {@link ApifreaksApi.GatewayTimeoutError}
     *
     * @example
     *     await client.astronomyLookup({
     *         apiKey: "apiKey"
     *     })
     */
    astronomyLookup(request: ApifreaksApi.AstronomyLookupRequest, requestOptions?: ApifreaksApiClient.RequestOptions): core.HttpResponsePromise<ApifreaksApi.AstronomyLookupResponse>;
    private __astronomyLookup;
    /**
     * Make a passthrough request using the SDK's configured auth, retry, logging, etc.
     * This is useful for making requests to endpoints not yet supported in the SDK.
     * The input can be a URL string, URL object, or Request object. Relative paths are resolved against the configured base URL.
     *
     * @param {Request | string | URL} input - The URL, path, or Request object.
     * @param {RequestInit} init - Standard fetch RequestInit options.
     * @param {core.PassthroughRequest.RequestOptions} requestOptions - Per-request overrides (timeout, retries, headers, abort signal).
     * @returns {Promise<Response>} A standard Response object.
     */
    fetch(input: Request | string | URL, init?: RequestInit, requestOptions?: core.PassthroughRequest.RequestOptions): Promise<Response>;
}
