import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as ApifreaksApi from "../index.js";
export declare class GatewayTimeoutError extends errors.ApifreaksApiError {
    readonly body: ApifreaksApi.GatewayTimeoutErrorBody;
    constructor(body: ApifreaksApi.GatewayTimeoutErrorBody, rawResponse?: core.RawResponse);
}
