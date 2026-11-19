import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey"
 *     }
 */
export interface CurrentWeatherRequest {
    /** Your API key */
    apiKey: string;
    /** Response format returned by the API. Only JSON is supported. */
    format?: ApifreaksApi.CurrentWeatherRequestFormat;
    /** City name, place name, or full address. */
    location?: string;
    /** Latitude of the location. */
    lat?: number;
    /** Longitude of the location. */
    long?: number;
    /** IP(v4 or v6) address for location inference. */
    ip?: string;
    /** Timezone for the results. */
    timezone?: string;
}
