import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         domainName: "domainName"
 *     }
 */
export interface DomainWhoisLookupRequest {
    /** Your API key */
    apiKey: string;
    /** Response format (defaults to json) */
    format?: ApifreaksApi.DomainWhoisLookupRequestFormat;
    /** Domain name for WHOIS lookup */
    domainName: string;
}
