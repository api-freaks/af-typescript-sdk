import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         file_id: "file_id"
 *     }
 */
export interface PdfDeleteFileRequest {
    /** Your API key */
    apiKey: string;
    /** Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure. */
    format?: ApifreaksApi.PdfDeleteFileRequestFormat;
    /** The unique ID of the file to be deleted. */
    file_id: string;
}
