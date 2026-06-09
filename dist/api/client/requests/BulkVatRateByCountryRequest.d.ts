import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         countries: [{
 *                 country: "PAK"
 *             }, {
 *                 country: "United_States",
 *                 state: "New_York"
 *             }]
 *     }
 */
export interface BulkVatRateByCountryRequest {
    /** Your API key */
    apiKey: string;
    /** Specify the desired response format. Options: 'json' (default) or 'xml'. */
    format?: ApifreaksApi.BulkVatRateByCountryRequestFormat;
    countries: BulkVatRateByCountryRequest.Countries.Item[];
}
export declare namespace BulkVatRateByCountryRequest {
    type Countries = Countries.Item[];
    namespace Countries {
        interface Item {
            /** Country identifier in Alpha-2 (US), Alpha-3 (USA), or full name (United_States). Pair with "state" for regional lookup; values are case-insensitive and may use underscores. */
            country: string;
            /** Optional state identifier in Alpha-2 (NY) or full name (New_York). Use with the country field for state-level VAT; values are case-insensitive and may use underscores. */
            state?: string | undefined;
        }
    }
}
