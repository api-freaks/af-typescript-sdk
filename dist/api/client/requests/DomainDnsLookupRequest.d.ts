import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         type: ["type"]
 *     }
 */
export interface DomainDnsLookupRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.DomainDnsLookupRequestFormat;
    /** Hostname or URL whose DNS records are required. Give either `host-name` or `ipAddress`. */
    "host-name"?: string;
    /** The IP address whose PTR (reverse DNS) record is required. Give either `host-name` or `ipAddress`; with `ipAddress`, set `type` to `all` or `PTR`. */
    ipAddress?: string;
    /** DNS record types to look up, sent as a comma-separated list (e.g. `A,MX`). Possible values: A, AAAA, MX, NS, SOA, SPF, TXT, CNAME, PTR, or all. When ipAddress is provided, use "all" or "PTR". */
    type?: string | string[];
}
