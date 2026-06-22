import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         type: ["type"],
 *         domainNames: ["domainNames"]
 *     }
 */
export interface BulkDomainDnsLookupRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.BulkDomainDnsLookupRequestFormat;
    /**
     * A comma-separated list of DNS record types for lookup.
     * Possible values: A, AAAA, MX, NS, SOA, SPF, TXT, CNAME, or all
     */
    type: string | string[];
    /** List of IP addresses to look up. */
    ipAddresses?: string[] | undefined;
    /** List of hostnames to lookup DNS records for */
    domainNames: string[];
}
