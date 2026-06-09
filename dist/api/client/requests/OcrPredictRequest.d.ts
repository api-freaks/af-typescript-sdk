/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         model: "mini-ocr-v1",
 *         model: "mini-ocr-v1"
 *     }
 */
export interface OcrPredictRequest {
    /** Your API key */
    apiKey: string;
    /** URL of the image or PDF (required if `file` not provided) */
    url?: string;
    /** OCR model to use. */
    model: OcrPredictRequest.OcrPredictRequestModel;
    /** Specify page range for multi-page PDFs (e.g., '1,3,5-10' or 'allpages'). **Note:** This parameter can only be used with .pdf file types. */
    page_range?: string;
    /** Define OCR zones using coordinates (top:left:height:width). Multiple zones can be defined using commas. Only available for model 'ocr-v1'. **Note:** This parameter cannot be used with .pdf and .zip file types as it can only be applied to single image queries. */
    zone?: string;
    /** Set to 1 to split output text into individual lines (default: 0) */
    new_line?: number;
}
export declare namespace OcrPredictRequest {
    /** OCR model to use. `mini-ocr-v1` for CAPTCHA OCR, `ocr-v1` for general OCR */
    const OcrPredictRequestModel: {
        readonly MiniOcrV1: "mini-ocr-v1";
        readonly OcrV1: "ocr-v1";
    };
    type OcrPredictRequestModel = (typeof OcrPredictRequestModel)[keyof typeof OcrPredictRequestModel];
}
