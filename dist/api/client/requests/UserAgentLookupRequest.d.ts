import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey"
 *     }
 */
export interface UserAgentLookupRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response */
    format?: ApifreaksApi.UserAgentLookupRequestFormat;
    /** The User-Agent string to parse, sent as the User-Agent HTTP header. */
    "User-Agent": string;
}
