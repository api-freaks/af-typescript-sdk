import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as ApifreaksApi from "../index.js";
export declare class ProxyAuthenticationRequiredError extends errors.ApifreaksApiError {
    constructor(body: ApifreaksApi.ProxyAuthenticationRequiredErrorBody, rawResponse?: core.RawResponse);
}
