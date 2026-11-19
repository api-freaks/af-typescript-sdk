import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as ApifreaksApi from "../index.js";
export declare class InternalServerError extends errors.ApifreaksApiError {
    readonly body: ApifreaksApi.InternalServerErrorBody;
    constructor(body: ApifreaksApi.InternalServerErrorBody, rawResponse?: core.RawResponse);
}
