export interface VatSupportedCountriesResponse {
    VAT_Supported_Countries_And_States?: Record<string, VatSupportedCountriesResponse.VatSupportedCountriesAndStates.Item>[] | undefined;
    /** Array of countries supported by the IBAN Validation API. */
    IBAN_Supported_Countries?: VatSupportedCountriesResponse.IbanSupportedCountries.Item[] | undefined;
    /** Array of countries supported by the SWIFT/BIC Code Lookup and Finder APIs. */
    SWIFT_Supported_Countries?: VatSupportedCountriesResponse.SwiftSupportedCountries.Item[] | undefined;
}
export declare namespace VatSupportedCountriesResponse {
    type VatSupportedCountriesAndStates = VatSupportedCountriesAndStates.Item[];
    namespace VatSupportedCountriesAndStates {
        interface Item {
            /** ISO 3166-1 alpha-2 country code, lowercase. */
            code: string;
            /** Sub-national regions with their own VAT data, keyed by name (e.g. `california`: `us:ca`). */
            states?: Record<string, string> | undefined;
        }
    }
    type IbanSupportedCountries = IbanSupportedCountries.Item[];
    namespace IbanSupportedCountries {
        /**
         * A single country supported by the IBAN Validation API.
         */
        interface Item {
            /** ISO 3166-1 alpha-2 country code. */
            countryCode: string;
            /** Full country name. */
            name: string;
        }
    }
    type SwiftSupportedCountries = SwiftSupportedCountries.Item[];
    namespace SwiftSupportedCountries {
        /**
         * A single country supported by the SWIFT/BIC Code Lookup and Finder APIs.
         */
        interface Item {
            /** Full country name. */
            name: string;
            /** ISO 3166-1 alpha-2 country code. */
            countryCode: string;
        }
    }
}
