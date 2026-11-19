import * as errors from "./index.js";
export declare class ApifreaksApiTimeoutError extends errors.ApifreaksApiError {
    constructor(message: string, opts?: {
        cause?: unknown;
    });
}
