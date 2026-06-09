import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         date: "2023-01-15"
 *     }
 */
export interface HistoricalWeatherRequest {
    /** Your API key */
    apiKey: string;
    /** Response format returned by the API. */
    format?: ApifreaksApi.HistoricalWeatherRequestFormat;
    /** Specific date for which to fetch weather data in YYYY-MM-DD format. Historical dates must be past dates only. Current or future dates are not allowed for historical data. Data available from 1940 onwards. */
    date: string;
    /** City name, place name, or full address. */
    location?: string;
    /** Latitude of the location. */
    lat?: number;
    /** Longitude of the location. */
    long?: number;
    /** IP(v4 or v6) address for location inference. */
    ip?: string;
    /** Precision of the historical data. **Note:** 'daily' returns daily aggregates, 'hourly' returns hourly data. */
    precision?: ApifreaksApi.HistoricalWeatherRequestPrecision;
    /** Timezone for the results. */
    timezone?: string;
}
