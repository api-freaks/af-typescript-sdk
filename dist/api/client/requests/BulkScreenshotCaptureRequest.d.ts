import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         urls: [{
 *                 url: "url"
 *             }]
 *     }
 */
export interface BulkScreenshotCaptureRequest {
    /** Your API key */
    apiKey: string;
    format?: ApifreaksApi.BulkScreenshotCaptureRequestFormat;
    /** List of website URLs to capture screenshots of */
    urls: BulkScreenshotCaptureRequest.Urls.Item[];
}
export declare namespace BulkScreenshotCaptureRequest {
    type Urls = Urls.Item[];
    namespace Urls {
        interface Item {
            url: string;
            /** Accepts any additional properties */
            [key: string]: any;
        }
    }
}
