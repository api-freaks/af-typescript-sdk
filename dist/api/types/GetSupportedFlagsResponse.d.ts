/**
 * Countries and organizations that have flags available.
 */
export interface GetSupportedFlagsResponse {
    /** Countries with a flag, each with its name and ISO 3166-1 alpha-2/alpha-3 codes. */
    supported_countries: GetSupportedFlagsResponse.SupportedCountries.Item[];
    /** Identifiers of supported organizations, usable as the flag lookup key. */
    supported_organizations: string[];
}
export declare namespace GetSupportedFlagsResponse {
    type SupportedCountries = SupportedCountries.Item[];
    namespace SupportedCountries {
        interface Item {
            name: string;
            iso2: string;
            iso3: string;
        }
    }
}
