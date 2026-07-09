import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey"
 *     }
 */
export interface AstronomyLookupV2Request {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.AstronomyLookupV2RequestFormat;
    /** Location name or address */
    location?: string;
    /** Latitude for location coordinates */
    lat?: number;
    /** Longitude for location coordinates */
    long?: number;
    /** IP address for location detection */
    ip?: string;
    /** Language code for response localization (default is "en"). */
    lang?: string;
    /** Date for astronomy data (YYYY-MM-DD) */
    date?: string;
    /** Elevation in meters (default 0, maximum 10,000) */
    elevation?: number;
    /** Timezone of the location for which astronomy data is required */
    time_zone?: string;
}
