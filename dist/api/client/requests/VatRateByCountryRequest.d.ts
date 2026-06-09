import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         country: "country"
 *     }
 */
export interface VatRateByCountryRequest {
    /** Your API key */
    apiKey: string;
    /** Specify the desired response format. Options: 'json' (default) or 'xml'. */
    format?: ApifreaksApi.VatRateByCountryRequestFormat;
    /** Country identifier in Alpha-2 (PK), Alpha-3 (PAK), or full name (Pakistan). Combine with the optional "state" query for sub-national VAT; values are case-insensitive and may use underscores instead of spaces. */
    country: string;
    /** Optional state or region in Alpha-2 (NY) or full name (New_York). Use with "country" for state-level VAT; values are case-insensitive and may use underscores. */
    state?: string;
}
