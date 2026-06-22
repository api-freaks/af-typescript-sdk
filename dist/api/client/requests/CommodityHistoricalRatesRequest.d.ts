import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         date: "2023-01-15",
 *         symbols: ["symbols"]
 *     }
 */
export interface CommodityHistoricalRatesRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.CommodityHistoricalRatesRequestFormat;
    /** Historical date (YYYY-MM-DD) */
    date: string;
    /** Comma-separated list of commodity symbols **Required** */
    symbols: string | string[];
}
