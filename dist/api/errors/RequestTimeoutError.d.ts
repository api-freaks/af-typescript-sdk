import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as ApifreaksApi from "../index.js";
export declare class RequestTimeoutError extends errors.ApifreaksApiError {
    readonly body: ApifreaksApi.RequestTimeoutErrorBody;
    constructor(body: ApifreaksApi.RequestTimeoutErrorBody, rawResponse?: core.RawResponse);
}
