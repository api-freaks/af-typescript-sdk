export interface PdfDeleteFileResponse {
    /** The unique identifier of the file. */
    fileId: string;
    /** Indicates whether the file deletion request was successful. */
    success: boolean;
    /** A message indicating the result of the file deletion request. */
    message: string;
}
