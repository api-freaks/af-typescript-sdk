import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as ApifreaksApi from "../index.js";
export declare class UnprocessableEntityError extends errors.ApifreaksApiError {
    readonly body: ApifreaksApi.UnprocessableEntityErrorBody;
    constructor(body: ApifreaksApi.UnprocessableEntityErrorBody, rawResponse?: core.RawResponse);
}
