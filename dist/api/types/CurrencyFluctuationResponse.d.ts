export interface CurrencyFluctuationResponse {
    /** Starting date of the interval (provided via input). */
    startDate: string;
    /** Ending date of the interval (provided via input). */
    endDate: string;
    /** Base currency with respect to which all fluctuations are calculated. */
    base: string;
    /** A map of currency symbols to their fluctuation details. */
    rateFluctuations: Record<string, CurrencyFluctuationResponse.RateFluctuations.Value>;
}
export declare namespace CurrencyFluctuationResponse {
    namespace RateFluctuations {
        interface Value {
            /** Starting rate of the currency during the interval. */
            startRate: string;
            /** Ending rate of the currency during the interval. */
            endRate: string;
            /** Absolute change in currency rate over the interval. */
            change: string;
            /** Percentage change in currency rate over the interval. */
            percentChange: string;
        }
    }
}
