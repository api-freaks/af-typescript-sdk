export interface CurrencySupportedResponse {
    /** A map of all supported currencies, keyed by currency code. */
    supportedCurrenciesMap: Record<string, CurrencySupportedResponse.SupportedCurrenciesMap.Value>;
}
export declare namespace CurrencySupportedResponse {
    namespace SupportedCurrenciesMap {
        interface Value {
            currencyCode: string;
            /** Currency name; null for some entries (e.g. crypto tokens). */
            currencyName: string | null;
            /** Country code; null for currencies not tied to a country. */
            countryCode: string | null;
            /** Country name; null for currencies not tied to a country. */
            countryName: string | null;
            status: Value.Status;
            availableFrom: string;
            availableUntil: string;
            icon: string;
        }
        namespace Value {
            const Status: {
                readonly Available: "AVAILABLE";
                readonly Depreciated: "DEPRECIATED";
            };
            type Status = (typeof Status)[keyof typeof Status];
        }
    }
}
