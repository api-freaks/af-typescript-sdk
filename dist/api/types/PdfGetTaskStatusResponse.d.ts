export interface PdfGetTaskStatusResponse {
    /** The unique identifier of the PDF processing task. */
    taskId: string;
    /** The current status of the task (e.g., 'queued', 'processing', 'completed', 'failed'). */
    status: string;
    /** The timestamp when the task status was created, formatted as 'yyyy-MM-dd HH:mm:ss'. */
    createdAt: string;
    /** The URL to download all output files as a single ZIP archive. This is present only when the task status is 'COMPLETED'. */
    zipOutputUrl?: string | undefined;
    /** The unique identifier for the ZIP file. This is present only when the task status is 'COMPLETED'. */
    zipFileId?: string | undefined;
    /** A list of URLs for each individual output file. This is present only when the task is 'COMPLETED'. */
    outputUrls?: string[] | undefined;
    /** A list of unique IDs for the output files. This is present only when the task is 'COMPLETED'. */
    outputIds?: string[] | undefined;
    /** A list of unique IDs for the input files submitted with the task. If the task was initiated with the `destroy` parameter set to `true`, `inputIds` will not be generated. */
    inputIds?: string[] | undefined;
    /** The error code for the PDF Task. This is included only if the task fails. */
    error?: string | undefined;
    /** A descriptive message indicating the reason for task failure. This is included only if the task fails. */
    message?: string | undefined;
    /** The timestamp when the task status will expire and be removed from the system, formatted as 'yyyy-MM-dd HH:mm:ss'. */
    expiresAt?: string | undefined;
}
