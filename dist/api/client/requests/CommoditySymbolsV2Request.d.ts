import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey"
 *     }
 */
export interface CommoditySymbolsV2Request {
    /** Your API key */
    apiKey: string;
    /** Response format. Currently only `json` is supported. */
    format?: ApifreaksApi.CommoditySymbolsV2RequestFormat;
}
