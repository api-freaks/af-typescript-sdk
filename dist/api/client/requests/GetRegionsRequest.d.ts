import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey"
 *     }
 */
export interface GetRegionsRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response */
    format?: ApifreaksApi.GetRegionsRequestFormat;
}
