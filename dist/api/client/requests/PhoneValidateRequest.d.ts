import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         number: "+14155552671"
 *     }
 *
 * @example
 *     {
 *         apiKey: "apiKey",
 *         number: "03301112233",
 *         region: "PK"
 *     }
 *
 * @example
 *     {
 *         apiKey: "apiKey",
 *         number: "0014155552671",
 *         dialer_region: "AU"
 *     }
 */
export interface PhoneValidateRequest {
    /** Your API key */
    apiKey: string;
    /** Specifies the desired format for the API response. Choose 'json' for a JSON object. If not provided, the API defaults to JSON format. */
    format?: ApifreaksApi.PhoneValidateRequestFormat;
    /** Phone number to validate. Accepts international format (+14155552671), local format (4155552671) with region, or IDD format (0014155552671) with dialer_region. */
    number: string;
    /** Two-letter ISO country code (e.g., US, GB). Required when number is in local format without + prefix. Cannot be used together with dialer_region. */
    region?: string;
    /** Two-letter ISO country code indicating the country the number is being dialed from. Required when number uses IDD exit code. Cannot be used together with region. */
    dialer_region?: string;
}
