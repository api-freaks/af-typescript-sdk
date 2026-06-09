export interface PdfUploadResourcesResponse {
    files: PdfUploadResourcesResponse.Files.Item[];
}
export declare namespace PdfUploadResourcesResponse {
    type Files = Files.Item[];
    namespace Files {
        interface Item {
            fileName: string;
            fileId: string;
        }
    }
}
