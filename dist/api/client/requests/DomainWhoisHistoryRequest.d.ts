import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         domainName: "domainName"
 *     }
 */
export interface DomainWhoisHistoryRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.DomainWhoisHistoryRequestFormat;
    /** Domain name for historical WHOIS lookup */
    domainName: string;
}
