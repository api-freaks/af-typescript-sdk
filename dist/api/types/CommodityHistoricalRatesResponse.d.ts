export interface CommodityHistoricalRatesResponse {
    /** API request success indicator. "true" for successful requests. */
    success: boolean;
    /** Unix timestamp indicating when the response was generated. */
    timestamp?: number | undefined;
    /** Map containing detailed information for all the requested commodities keyed by commodity symbol. */
    metadata?: Record<string, CommodityHistoricalRatesResponse.Metadata.Value> | undefined;
    /** Date for which the user requested the commodity price. Format: YYYY-MM-DD. */
    date: string;
    /** Map containing rate data for each available requested commodity symbol, keyed by symbol. */
    rates: Record<string, CommodityHistoricalRatesResponse.Rates.Value>;
}
export declare namespace CommodityHistoricalRatesResponse {
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
            /** Date for which commodity prices were fetched. Format: YYYY-MM-DD. */
            date: string;
            /** The opening price of the commodity on the given date. */
            open: number;
            /** The highest price of the commodity recorded on the given date. */
            high: number;
            /** The lowest price of the commodity recorded on the given date. */
            low: number;
            /** The closing price of the commodity on the given date. */
            close: number;
        }
    }
}
