import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         radius: 1.1
 *     }
 */
export interface ZipcodeSearchByRadiusRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.ZipcodeSearchByRadiusRequestFormat;
    /** Postal/Zip code to be used as the center point for the search. */
    code?: string;
    /** Latitude coordinate for the base location. */
    lat?: number;
    /** Longitude coordinate for the base location. */
    long?: number;
    /** Country code in ISO 3166-1 alpha-2 format. Required only when using the code parameter. */
    country?: string;
    /** Search radius for the query. The maximum allowed values are: - 100 km - 100 mi - 109361 yd - 100000 m - 328084 ft - 3937007.75 in */
    radius: number;
    /** Supported distance units are m, km, mi, ft, yd, in. */
    unit?: ApifreaksApi.ZipcodeSearchByRadiusRequestUnit;
    /** Page no. to retrieve paginated results. */
    page?: number;
}
