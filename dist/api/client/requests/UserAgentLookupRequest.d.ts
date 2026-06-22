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
    /** The User-Agent string to look up. Sent as the "User-Agent" HTTP header. **Required** */
    userAgent: string;
    /** Format of the response */
    format?: ApifreaksApi.UserAgentLookupRequestFormat;
}
