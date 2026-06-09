import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         email: "email"
 *     }
 */
export interface EmailValidateRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response */
    format?: ApifreaksApi.EmailValidateRequestFormat;
    /** Email address to validate */
    email: string;
    /** Name of the email address */
    name?: string;
    /** IP address of the email address */
    ip?: string;
}
