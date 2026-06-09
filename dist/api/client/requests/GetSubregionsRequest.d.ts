import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         region: "region"
 *     }
 */
export interface GetSubregionsRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response */
    format?: ApifreaksApi.GetSubregionsRequestFormat;
    /** Name of the region. */
    region: string;
}
