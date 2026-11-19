import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as ApifreaksApi from "../index.js";
export declare class NotAcceptableError extends errors.ApifreaksApiError {
    readonly body: ApifreaksApi.NotAcceptableErrorBody;
    constructor(body: ApifreaksApi.NotAcceptableErrorBody, rawResponse?: core.RawResponse);
}
