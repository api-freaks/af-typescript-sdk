export interface OcrPredictResponse {
    /**
     * Array containing extracted text. Structure varies based on input type and new_line parameter:
     * - Single file, new_line=0: Array with single string element
     * - Single file, new_line=1: Array of strings (one per line)
     * - Bulk/ZIP file, new_line=0: Array of strings (one per file)
     * - Bulk/ZIP file, new_line=1: Array of arrays (each inner array contains lines for respective file)
     */
    OCRText: OcrPredictResponse.OcrText;
}
export declare namespace OcrPredictResponse {
    /**
     * Array containing extracted text. Structure varies based on input type and new_line parameter:
     * - Single file, new_line=0: Array with single string element
     * - Single file, new_line=1: Array of strings (one per line)
     * - Bulk/ZIP file, new_line=0: Array of strings (one per file)
     * - Bulk/ZIP file, new_line=1: Array of arrays (each inner array contains lines for respective file)
     */
    type OcrText = string[] | string[][];
}
