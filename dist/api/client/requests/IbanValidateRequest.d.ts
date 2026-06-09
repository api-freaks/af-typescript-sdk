import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         iban: "iban"
 *     }
 */
export interface IbanValidateRequest {
    /** Your API key */
    apiKey: string;
    /** Specify the desired response format. Options: 'json' (default) or 'xml'. */
    format?: ApifreaksApi.IbanValidateRequestFormat;
    /** IBAN to validate. */
    iban: string;
}
