export declare const ScreenshotCaptureRequestWaitForEvent: {
    readonly Load: "load";
    readonly Domcontentloaded: "domcontentloaded";
    readonly Networkidle: "networkidle";
};
export type ScreenshotCaptureRequestWaitForEvent = (typeof ScreenshotCaptureRequestWaitForEvent)[keyof typeof ScreenshotCaptureRequestWaitForEvent];
