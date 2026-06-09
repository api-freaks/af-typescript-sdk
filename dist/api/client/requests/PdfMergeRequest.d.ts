import type * as core from "../../../core/index.js";
import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey"
 *     }
 */
export interface PdfMergeRequest {
    /** Your API key */
    apiKey: string;
    /** Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure. */
    format?: ApifreaksApi.PdfMergeRequestFormat;
    /** An array of unique file IDs referencing PDF files previously uploaded to the API Freaks server. Use this parameter to merge existing files without re-uploading them. Provide multiple IDs to merge files in the specified order. */
    file_id?: string | string[];
    /** If set to `true`, the input file(s) will be permanently deleted from the server immediately after the output PDF is generated. */
    destroy?: boolean;
    /** Specifies the desired name for the resulting merged PDF file. If not provided, a default name will be assigned. */
    output?: string;
    /** The URL to which the webhook notification will be sent after the task is completed. */
    webhook_url?: string;
    /** If true, a notification will also be sent by email in case the webhook request fails all the retries.  The email notification will be sent to the requesting user or their organization’s admin if part of one. */
    webhook_failure_notification?: boolean;
    /** Optional custom header for webhook requests. Format: `Key:Value` (e.g., `Authorization:Bearer token123`). This will be sent as an HTTP header in the webhook call. */
    "X-Webhook-Authorization"?: string;
    /** The PDF file(s) to be processed. If this parameter is not provided, you must specify `file_id` to use previously uploaded files. */
    file?: core.file.Uploadable[] | undefined;
}
