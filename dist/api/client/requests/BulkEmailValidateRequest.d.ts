import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         emailData: [{
 *                 email: "email"
 *             }]
 *     }
 */
export interface BulkEmailValidateRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response */
    format?: ApifreaksApi.BulkEmailValidateRequestFormat;
    /** Array of email objects for bulk validation */
    emailData: BulkEmailValidateRequest.EmailData.Item[];
}
export declare namespace BulkEmailValidateRequest {
    type EmailData = EmailData.Item[];
    namespace EmailData {
        interface Item {
            /** Email address to validate */
            email: string;
            /** Name associated with the email address */
            name?: string | undefined;
            /** IP address associated with the email address */
            ip?: string | undefined;
        }
    }
}
