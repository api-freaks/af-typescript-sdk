import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as ApifreaksApi from "../index.js";
export declare class PaymentRequiredError extends errors.ApifreaksApiError {
    readonly body: ApifreaksApi.PaymentRequiredErrorBody;
    constructor(body: ApifreaksApi.PaymentRequiredErrorBody, rawResponse?: core.RawResponse);
}
