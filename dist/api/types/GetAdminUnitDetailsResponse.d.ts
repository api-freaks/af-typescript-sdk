/**
 * Detailed information for a single administrative unit.
 */
export interface GetAdminUnitDetailsResponse {
    /** Name of the administrative unit. */
    name: string;
    /** Administrative code of the unit. */
    admin_code: string;
    /** The unit's full ISO 3166-2 code, formed as {country}-{admin_code} (e.g. US-CA, DE-BY). */
    admin_iso3166_2?: string | undefined;
    /** Level or type of the administrative unit (e.g. land, province, state). */
    admin_level: string;
    /** Country code in ISO 3166-1 alpha-2 format. */
    country_iso3166_2: string;
    /** Name of the country. */
    country_name: string;
}
