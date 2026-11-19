import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         country: "country"
 *     }
 */
export interface GetAdminUnitsRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.GetAdminUnitsRequestFormat;
    /** Country code in ISO 3166-1 alpha-2 format. */
    country: string;
    /** Filter results by one or more administrative level names (e.g. `land`, `state`, `province`), sent as a comma-separated list. Use the admin levels endpoint to list the levels a country has. */
    admin_level?: string | string[];
}
