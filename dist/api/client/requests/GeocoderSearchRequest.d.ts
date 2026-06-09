import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         query: "query"
 *     }
 */
export interface GeocoderSearchRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.GeocoderSearchRequestFormat;
    /** Free-form search query, e.g. Wembley Stadium, London */
    query: string;
    /** Max number of results to return (1–40). May return fewer if matches are weak. */
    limit?: number;
    /** Minimum latitude for the viewbox. Must be ≤ max_lat and between -90 and 90. */
    min_lat?: number;
    /** Maximum latitude for the viewbox. Must be ≥ min_lat and between -90 and 90. */
    max_lat?: number;
    /** Minimum longitude for the viewbox. Must be ≤ max_lon and between -180 and 180. */
    min_lon?: number;
    /** Maximum longitude for the viewbox. Must be ≥ min_lon and between -180 and 180. */
    max_lon?: number;
    /** Preferred language order for showing search results. This may either be a simple comma-separated list of language codes or a single entry. The results will be in the 1st language which is matched from the header. As a fallback if the results are not supported in the given language, 'en' will be used. */
    "Accept-Language"?: string;
}
