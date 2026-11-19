import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as ApifreaksApi from "../index.js";
export declare class UnsupportedMediaTypeError extends errors.ApifreaksApiError {
    readonly body: ApifreaksApi.UnsupportedMediaTypeErrorBody;
    constructor(body: ApifreaksApi.UnsupportedMediaTypeErrorBody, rawResponse?: core.RawResponse);
}
