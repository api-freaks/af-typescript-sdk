import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as ApifreaksApi from "../index.js";
export declare class ServiceUnavailableError extends errors.ApifreaksApiError {
    readonly body: ApifreaksApi.ServiceUnavailableErrorBody;
    constructor(body: ApifreaksApi.ServiceUnavailableErrorBody, rawResponse?: core.RawResponse);
}
