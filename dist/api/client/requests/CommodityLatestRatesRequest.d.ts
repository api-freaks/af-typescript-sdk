import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         symbols: ["symbols"],
 *         updates: "10m"
 *     }
 */
export interface CommodityLatestRatesRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the Response */
    format?: ApifreaksApi.CommodityLatestRatesRequestFormat;
    /** Comma separated list of desired commodities symbols *(e.g. XAU,XAG,WTI,BRENT)* **Required** */
    symbols: string | string[];
    /** Exchange rates update period. Possible values are: (1) `10m` - 10 minute update (2) `1m` - 1 minute update **Required** */
    updates: ApifreaksApi.CommodityLatestRatesRequestUpdates;
    /** Specifies the target currency for the exchange rate; default quote currency is the market currency of commodity *(e.g. USD, EUR, INR)* */
    quote?: string;
}
