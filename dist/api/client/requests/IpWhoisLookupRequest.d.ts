import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         ip: "ip"
 *     }
 */
export interface IpWhoisLookupRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.IpWhoisLookupRequestFormat;
    /** The IP address (IPv4 or IPv6) for which WHOIS data is requested. */
    ip: string;
}
