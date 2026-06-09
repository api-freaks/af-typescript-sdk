import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey"
 *     }
 */
export interface AstronomyLookupRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.AstronomyLookupRequestFormat;
    /** Location name or address */
    location?: string;
    /** Latitude for location coordinates */
    lat?: number;
    /** Longitude for location coordinates */
    long?: number;
    /** IP address for location detection */
    ip?: string;
    lang?: string;
    /** Date for astronomy data (YYYY-MM-DD) */
    date?: string;
    /** Timezone of the location for which astronomy data is required */
    elevation?: number;
    time_zone?: string;
}
