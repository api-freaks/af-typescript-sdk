import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         swiftCode: "swiftCode"
 *     }
 */
export interface SwiftCodeLookupRequest {
    /** Your API key */
    apiKey: string;
    /** Specify the desired response format. Options: 'json' (default) or 'xml'. */
    format?: ApifreaksApi.SwiftCodeLookupRequestFormat;
    /** SWIFT/BIC code to lookup (must be 8 or 11 characters). */
    swiftCode: string;
}
