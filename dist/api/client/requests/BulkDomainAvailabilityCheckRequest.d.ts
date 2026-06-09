import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         domainNames: ["domainNames"]
 *     }
 */
export interface BulkDomainAvailabilityCheckRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.BulkDomainAvailabilityCheckRequestFormat;
    /** Specify the data source for domain availability checks. Use "dns" for DNS-based lookups or "whois" for WHOIS-based lookups. By default, "dns" is used. */
    source?: ApifreaksApi.BulkDomainAvailabilityCheckRequestSource;
    /** List of domain names to check. */
    domainNames: string[];
}
