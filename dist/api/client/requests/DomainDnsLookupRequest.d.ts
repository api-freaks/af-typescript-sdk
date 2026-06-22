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
    /** Hostname or URL whose DNS records are required. */
    "host-name"?: string;
    /** The IP address for requested DNS's PTR record. 'type' parameter must be set to 'all'. */
    ipAddress?: string;
    /** A comma-separated list of DNS record types for lookup. Possible values: A, AAAA, MX, NS, SOA, SPF, TXT, CNAME, or all. When ipAddress is provided, type must be "all". */
    type: string | string[];
}
