import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey"
 *     }
 */
export interface WeatherForecastRequest {
    /** Your API key */
    apiKey: string;
    /** Response format returned by the API. */
    format?: ApifreaksApi.WeatherForecastRequestFormat;
    /** Start date for the forecast in YYYY-MM-DD format. Forecast dates must be current or future dates only. Past dates are not allowed for forecast data. The difference between startDate and endDate must not exceed 16 days. */
    startDate?: string;
    /** End date for the forecast in YYYY-MM-DD format. Forecast dates must be current or future dates only. Past dates are not allowed for forecast data. The difference between startDate and endDate must not exceed 16 days. */
    endDate?: string;
    /** Number of days for the forecast, from 1 to 16. Default is 7. Maximum value is 16. */
    forecastDays?: number;
    /** City name, place name, or full address. */
    location?: string;
    /** Latitude of the location. */
    lat?: number;
    /** Longitude of the location. */
    long?: number;
    /** IP(v4 or v6) address for location inference. */
    ip?: string;
    /** Precision of the forecast data. */
    precision?: ApifreaksApi.WeatherForecastRequestPrecision;
    /** Timezone for the results. */
    timezone?: string;
}
