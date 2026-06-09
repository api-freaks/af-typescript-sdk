import type * as core from "../../../core/index.js";
import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         user_password: "user_password"
 *     }
 */
export interface PdfEncryptRequest {
    /** Your API key */
    apiKey: string;
    /** Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure. */
    format?: ApifreaksApi.PdfEncryptRequestFormat;
    /** The unique ID of a PDF file already uploaded to the API Freaks server. Use this as an alternative to uploading a new file directly. */
    file_id?: string;
    /** If set to `true`, the input file(s) will be permanently deleted from the server immediately after the output PDF is generated. */
    destroy?: boolean;
    /** The desired name for the output encrypted PDF file. If not provided, a default name will be assigned. */
    output?: string;
    /** The password to unlock the input file if it is already protected. Either the owner password or user password can be provided. The owner password takes precedence. Password Length should be between 6 and 128 characters. */
    file_password?: string;
    /** Sets the user password required to open and view the encrypted PDF file. Password Length should be between 6 and 128 characters. */
    user_password: string;
    /** Sets the owner password for the PDF file. This password provides full access, including the ability to remove restrictions. If not provided, the `user_password` will also be used as the owner password. Password Length should be between 6 and 128 characters. */
    owner_password?: string;
    /** The URL to which the webhook notification will be sent after the task is completed. */
    webhook_url?: string;
    /** If true, a notification will also be sent by email in case the webhook request fails all the retries.  The email notification will be sent to the requesting user or their organization’s admin if part of one. */
    webhook_failure_notification?: boolean;
    /** Optional custom header for webhook requests. Format: `Key:Value` (e.g., `Authorization:Bearer token123`). This will be sent as an HTTP header in the webhook call. */
    "X-Webhook-Authorization"?: string;
    /** The PDF file to be processed. If this parameter is not provided, you must specify `file_id` to use a previously uploaded file. */
    file?: core.file.Uploadable | undefined;
}
