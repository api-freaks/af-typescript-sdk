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
    /** Array of User-Agent strings to parse. Maximum 20000 strings per request — exceeding that returns a 413. */
    uaStrings: string[];
}
