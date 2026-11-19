import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as ApifreaksApi from "../index.js";
export declare class ForbiddenError extends errors.ApifreaksApiError {
    readonly body: ApifreaksApi.ForbiddenErrorBody;
    constructor(body: ApifreaksApi.ForbiddenErrorBody, rawResponse?: core.RawResponse);
}
