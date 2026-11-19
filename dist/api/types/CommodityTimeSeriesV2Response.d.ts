export interface CommodityTimeSeriesV2Response {
    /** API request success indicator. "true" for successful requests. */
    success: boolean;
    /** The start date of the time series data in YYYY-MM-DD format. */
    startDate: string;
    /** The end date of the time series data in YYYY-MM-DD format. */
    endDate: string;
    /** Map of trading dates (YYYY-MM-DD) to per-symbol OHLC data. Non-trading days are excluded. */
    rates: Record<string, Record<string, CommodityTimeSeriesV2Response.Rates.Value>>;
    /** Present only on a 206 Partial Content response, when some requested symbols could not be resolved on any date in the range. Map of each unresolved symbol to a detail message and optional close-match suggestions. */
    unresolved?: Record<string, CommodityTimeSeriesV2Response.Unresolved.Value> | undefined;
}
export declare namespace CommodityTimeSeriesV2Response {
    namespace Rates {
        interface Value {
            /** Opening price on the given date. 0 for monthly-updated commodities. */
            open: number;
            /** Highest price on the given date. 0 for monthly-updated commodities. */
            high: number;
            /** Lowest price on the given date. 0 for monthly-updated commodities. */
            low: number;
            /** Closing price on the given date. */
            close: number;
        }
    }
    namespace Unresolved {
        interface Value {
            /** Detail message explaining why this symbol was not resolved. */
            message?: string | undefined;
            /** Optional list of supported symbols that closely match the unresolved symbol. */
            suggestions?: string[] | undefined;
        }
    }
}
