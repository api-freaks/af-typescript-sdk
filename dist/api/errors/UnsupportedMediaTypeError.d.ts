import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
export declare class UnsupportedMediaTypeError extends errors.ApifreaksApiError {
    constructor(body?: unknown, rawResponse?: core.RawResponse);
}
