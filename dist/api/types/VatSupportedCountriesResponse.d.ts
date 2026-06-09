export interface VatSupportedCountriesResponse {
    VAT_Supported_Countries_And_States?: VatSupportedCountriesResponse.VatSupportedCountriesAndStates.Item[] | undefined;
}
export declare namespace VatSupportedCountriesResponse {
    type VatSupportedCountriesAndStates = VatSupportedCountriesAndStates.Item[];
    namespace VatSupportedCountriesAndStates {
        interface Item {
            code: string;
            name: string;
            states: string[];
        }
    }
}
