export interface PdfListFilesResponse {
    files: PdfListFilesResponse.Files.Item[];
}
export declare namespace PdfListFilesResponse {
    type Files = Files.Item[];
    namespace Files {
        interface Item {
            fileId: string;
            fileName: string;
            fileType?: string | undefined;
            fileCreationTime?: string | undefined;
            fileDeletionTime?: string | undefined;
        }
    }
}
