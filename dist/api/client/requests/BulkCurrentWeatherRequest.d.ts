import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         locations: [{
 *                 location: "lahore"
 *             }, {
 *                 lat: 32.5,
 *                 long: 74.5
 *             }, {
 *                 ip: "8.8.8.8"
 *             }, {
 *                 location: "seoul"
 *             }]
 *     }
 */
export interface BulkCurrentWeatherRequest {
    /** Your API key */
    apiKey: string;
    /** Response format returned by the API. */
    format?: ApifreaksApi.BulkCurrentWeatherRequestFormat;
    /** Timezone for the results. */
    timezone?: string;
    /** Array of locations to fetch weather data for */
    locations: BulkCurrentWeatherRequest.Locations.Item[];
}
export declare namespace BulkCurrentWeatherRequest {
    type Locations = Locations.Item[];
    namespace Locations {
        interface Item {
            /** City name, place name, or full address */
            location?: string | undefined;
            /** Latitude */
            lat?: number | undefined;
            /** Longitude */
            long?: number | undefined;
            /** IP address */
            ip?: string | undefined;
        }
    }
}
