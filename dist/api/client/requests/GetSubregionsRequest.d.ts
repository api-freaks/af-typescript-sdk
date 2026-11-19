import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey"
 *     }
 */
export interface GetSubregionsRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response */
    format?: ApifreaksApi.GetSubregionsRequestFormat;
    /** Name of the region. If omitted, all subregions are returned. */
    region?: string;
}
