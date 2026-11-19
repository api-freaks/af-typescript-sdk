export interface CommodityTimeSeriesResponse {
    /** API request success indicator. "true" for successful requests. */
    success: boolean;
    /** Unix timestamp indicating when the response was generated. */
    timestamp?: number | undefined;
    /** Map containing detailed information for all the requested commodities keyed by commodity symbol. */
    metadata?: Record<string, CommodityTimeSeriesResponse.Metadata.Value> | undefined;
    /** The start date of the time series data in YYYY-MM-DD format. */
    startDate: string;
    /** The end date of the time series data in YYYY-MM-DD format. */
    endDate: string;
    /** Date-indexed map; each key is a date (YYYY-MM-DD) whose value maps commodity symbols to OHLC data. */
    rates: Record<string, Record<string, CommodityTimeSeriesResponse.Rates.Value>>;
}
export declare namespace CommodityTimeSeriesResponse {
    namespace Metadata {
        interface Value {
            /** Unit of the respective commodity. */
            unit: string;
            /** Quote currency of the respective commodity. */
            quote: string;
        }
    }
    namespace Rates {
        interface Value {
            /** Opening price of the commodity on the given date. */
            open: number;
            /** Highest price of the commodity on the given date. */
            high: number;
            /** Lowest price of the commodity on the given date. */
            low: number;
            /** Closing price of the commodity on the given date. */
            close: number;
        }
    }
}
