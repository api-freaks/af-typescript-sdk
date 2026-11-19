import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         emailData: [{
 *                 email: "abc"
 *             }, {
 *                 email: "john@microsoft.com",
 *                 ip: "8.8.8.8"
 *             }, {
 *                 email: "test@mailinator.com"
 *             }]
 *     }
 */
export interface BulkDisposableEmailCheckV2Request {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.BulkDisposableEmailCheckV2RequestFormat;
    /** Entries to check. Maximum 100 per request. Must not be empty, and must not contain null entries or entries without a valid email. */
    emailData: BulkDisposableEmailCheckV2Request.EmailData.Item[];
}
export declare namespace BulkDisposableEmailCheckV2Request {
    type EmailData = EmailData.Item[];
    namespace EmailData {
        interface Item {
            /** The email address to check. */
            email: string;
            /** Optional IP address to look up for location and security data, such as the IP the signup came from. */
            ip?: string | undefined;
        }
    }
}
