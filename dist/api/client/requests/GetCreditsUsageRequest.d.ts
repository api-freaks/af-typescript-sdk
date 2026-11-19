import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey"
 *     }
 */
export interface GetCreditsUsageRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. Possible values: json, xml. */
    format?: ApifreaksApi.GetCreditsUsageRequestFormat;
}
