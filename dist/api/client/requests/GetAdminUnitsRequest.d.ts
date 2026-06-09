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
    /** Comma-separated list to filter results by one or more administrative levels. */
    adminLevels?: string | string[];
}
