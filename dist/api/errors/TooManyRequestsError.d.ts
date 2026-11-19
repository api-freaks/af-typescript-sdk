import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as ApifreaksApi from "../index.js";
export declare class TooManyRequestsError extends errors.ApifreaksApiError {
    readonly body: ApifreaksApi.TooManyRequestsErrorBody;
    constructor(body: ApifreaksApi.TooManyRequestsErrorBody, rawResponse?: core.RawResponse);
}
