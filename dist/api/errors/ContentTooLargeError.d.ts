import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as ApifreaksApi from "../index.js";
export declare class ContentTooLargeError extends errors.ApifreaksApiError {
    readonly body: ApifreaksApi.ContentTooLargeErrorBody;
    constructor(body: ApifreaksApi.ContentTooLargeErrorBody, rawResponse?: core.RawResponse);
}
