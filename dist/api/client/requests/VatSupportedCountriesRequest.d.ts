import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey"
 *     }
 */
export interface VatSupportedCountriesRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. Default is JSON. */
    format?: ApifreaksApi.VatSupportedCountriesRequestFormat;
    /** Which list to return: VAT (`VAT_Supported_Countries_And_States`), IBAN (`IBAN_Supported_Countries`) or SWIFT (`SWIFT_Supported_Countries`). Each value returns only its own list. If omitted (or unknown), all three lists are returned. */
    type?: ApifreaksApi.VatSupportedCountriesRequestType;
}
