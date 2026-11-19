import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as ApifreaksApi from "../index.js";
export declare class LockedError extends errors.ApifreaksApiError {
    readonly body: ApifreaksApi.LockedErrorBody;
    constructor(body: ApifreaksApi.LockedErrorBody, rawResponse?: core.RawResponse);
}
