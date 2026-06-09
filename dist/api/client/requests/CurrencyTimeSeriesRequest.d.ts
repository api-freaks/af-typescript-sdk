import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         startDate: "2023-01-15"
 *     }
 */
export interface CurrencyTimeSeriesRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.CurrencyTimeSeriesRequestFormat;
    /** Start date (format YYYY-MM-DD) of the preferred time frame */
    startDate: string;
    /** End date (format YYYY-MM-DD) of the preferred time frame */
    endDate?: string;
    /** Base currency */
    base?: string;
    /** comma separated list of desired currencies/ commodities symbols */
    symbols?: string | string[];
}
