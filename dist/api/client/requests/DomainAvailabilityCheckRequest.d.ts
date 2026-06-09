import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         domain: "domain"
 *     }
 */
export interface DomainAvailabilityCheckRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.DomainAvailabilityCheckRequestFormat;
    /** Domain name whose availability is to be checked. */
    domain: string;
    /** Specify the data source for domain availability checks. Use "dns" for DNS-based lookups or "whois" for WHOIS-based lookups. By default, "dns" is used. */
    source?: ApifreaksApi.DomainAvailabilityCheckRequestSource;
}
