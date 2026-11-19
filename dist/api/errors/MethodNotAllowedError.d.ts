import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as ApifreaksApi from "../index.js";
export declare class MethodNotAllowedError extends errors.ApifreaksApiError {
    readonly body: ApifreaksApi.MethodNotAllowedErrorBody;
    constructor(body: ApifreaksApi.MethodNotAllowedErrorBody, rawResponse?: core.RawResponse);
}
