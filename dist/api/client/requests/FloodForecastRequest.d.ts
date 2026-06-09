import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         startDate: "2023-01-15",
 *         endDate: "2023-01-15"
 *     }
 */
export interface FloodForecastRequest {
    /** Your API key */
    apiKey: string;
    /** Response format returned by the API. */
    format?: ApifreaksApi.FloodForecastRequestFormat;
    /** Starting date for flood forecast data in YYYY-MM-DD format. Forecast dates must be current or future dates only. Past dates are not allowed for forecast data. The difference between endDate and startDate must not exceed 16 days. */
    startDate: string;
    /** End date for flood forecast data in YYYY-MM-DD format. Forecast dates must be current or future dates only. Past dates are not allowed for forecast data. The difference between endDate and startDate must not exceed 16 days. */
    endDate: string;
    /** City name, place name, or full address. */
    location?: string;
    /** Latitude of the location. */
    lat?: number;
    /** Longitude of the location. */
    long?: number;
    /** IP(v4 or v6) address for location inference. */
    ip?: string;
    /** Only daily precision is supported; returns flood forecast data for the selected date range. */
    precision?: ApifreaksApi.FloodForecastRequestPrecision;
    /** Timezone for the results. */
    timezone?: string;
}
