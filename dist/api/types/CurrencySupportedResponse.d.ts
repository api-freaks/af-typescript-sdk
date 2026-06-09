export interface CurrencySupportedResponse {
    /** A map of all supported currencies, keyed by currency code. */
    supportedCurrenciesMap: Record<string, CurrencySupportedResponse.SupportedCurrenciesMap.Value>;
}
export declare namespace CurrencySupportedResponse {
    namespace SupportedCurrenciesMap {
        interface Value {
            currencyCode: string;
            currencyName: string;
            countryCode: string;
            countryName: string;
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
