import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey"
 *     }
 */
export interface SwiftCodeFindRequest {
    /** Your API key */
    apiKey: string;
    /** Specify the desired response format. Options: 'json' (default) or 'xml'. */
    format?: ApifreaksApi.SwiftCodeFindRequestFormat;
    /** Country name (accepts full name, e.g., Pakistan, United States). If only the country parameter is supplied, lists all banks in the country. */
    country?: string;
    /** Bank name (upper case) used to filter SWIFT codes. Should be used together with the country parameter. If only country and bank are provided (without city), returns the list of cities for that bank. */
    bank?: string;
    /** Gives SWIFT codes for a bank. Optionally specify the city (upper case) to narrow results to a specific city for that bank. */
    city?: string;
}
