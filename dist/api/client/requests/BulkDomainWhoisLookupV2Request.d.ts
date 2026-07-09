import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         domainNames: ["domainNames"]
 *     }
 */
export interface BulkDomainWhoisLookupV2Request {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.BulkDomainWhoisLookupV2RequestFormat;
    /** A list of domain names for which WHOIS data is requested. */
    domainNames: string[];
}
