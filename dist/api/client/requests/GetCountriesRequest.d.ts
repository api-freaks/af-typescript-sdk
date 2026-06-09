import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey"
 *     }
 */
export interface GetCountriesRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response */
    format?: ApifreaksApi.GetCountriesRequestFormat;
    /** Optional filter to return countries within a specific region from the region endpoint. */
    region?: string;
    /** Optional filter to return countries within a specific subregion from the subregion endpoint. */
    subregion?: string;
}
