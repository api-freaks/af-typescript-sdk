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
    /** Type of supported country. Supported values: IBAN, SWIFT, VAT. By default, it returns all supported countries for all types. */
    type?: ApifreaksApi.VatSupportedCountriesRequestType;
}
