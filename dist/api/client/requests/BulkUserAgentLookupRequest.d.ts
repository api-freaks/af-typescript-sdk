import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         uaStrings: ["uaStrings"]
 *     }
 */
export interface BulkUserAgentLookupRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response */
    format?: ApifreaksApi.BulkUserAgentLookupRequestFormat;
    /** List of user agent strings to parse */
    uaStrings: string[];
}
