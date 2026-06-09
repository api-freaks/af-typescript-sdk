import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as ApifreaksApi from "../index.js";
export declare class NoResponseError extends errors.ApifreaksApiError {
    constructor(body: ApifreaksApi.NoResponseErrorBody, rawResponse?: core.RawResponse);
}
