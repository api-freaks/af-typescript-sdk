import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as ApifreaksApi from "../index.js";
export declare class UnauthorizedError extends errors.ApifreaksApiError {
    readonly body: ApifreaksApi.UnauthorizedErrorBody;
    constructor(body: ApifreaksApi.UnauthorizedErrorBody, rawResponse?: core.RawResponse);
}
