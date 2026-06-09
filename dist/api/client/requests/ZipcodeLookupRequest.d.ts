import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         code: "code"
 *     }
 */
export interface ZipcodeLookupRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.ZipcodeLookupRequestFormat;
    /** Comma separated list of postal / zip codes. Max. 100 values. */
    code: string;
    /** Country code in ISO 3166-1 alpha-2 format. If not provided, search results will be returned from all countries. */
    country?: string;
}
