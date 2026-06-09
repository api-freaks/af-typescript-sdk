import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         vatNumber: "vatNumber"
 *     }
 */
export interface VatValidateRequest {
    /** Your API key */
    apiKey: string;
    /** Specify the desired response format. Options: 'json' (default) or 'xml'. */
    format?: ApifreaksApi.VatValidateRequestFormat;
    /** EU or UK VAT number to validate. */
    vatNumber: string;
    /** Requester EU or UK VAT number. */
    requesterVatNumber?: string;
}
