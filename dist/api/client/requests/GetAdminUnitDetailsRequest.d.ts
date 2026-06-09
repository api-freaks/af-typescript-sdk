import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         country: "country",
 *         admin_unit: "admin_unit"
 *     }
 */
export interface GetAdminUnitDetailsRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.GetAdminUnitDetailsRequestFormat;
    /** Country code in ISO 3166-1 alpha-2 format. */
    country: string;
    /** Optional admin code to fetch details for a specific administrative unit. */
    admin_unit: string;
}
