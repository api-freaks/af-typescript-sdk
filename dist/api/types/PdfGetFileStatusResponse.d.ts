export interface PdfGetFileStatusResponse {
    /** The unique identifier of the file. */
    fileId: string;
    /** The name of the file. */
    fileName?: string | undefined;
    /** The type of the file (e.g., 'pdf'). */
    fileType?: string | undefined;
    /** The timestamp when the file was created. */
    fileCreationTime: string;
    /** Date on which the file is scheduled to be deleted, in UTC. */
    fileDeletionTime?: string | undefined;
}
