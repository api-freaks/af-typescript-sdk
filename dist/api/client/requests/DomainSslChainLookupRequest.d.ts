import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         domainName: "domainName"
 *     }
 */
export interface DomainSslChainLookupRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.DomainSslChainLookupRequestFormat;
    /** Domain name or URL whose SSL certificate chain lookup is required */
    domainName: string;
    /** Set to true to get the raw openSSL response for each certificate in the chain */
    sslRaw?: boolean;
}
