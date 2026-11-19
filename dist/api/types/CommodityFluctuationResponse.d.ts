export interface CommodityFluctuationResponse {
    /** API request success indicator. "true" for successful requests. */
    success: boolean;
    /** Unix timestamp indicating when the response was generated. */
    timestamp?: number | undefined;
    /** Map containing detailed information for all the requested commodities keyed by commodity symbol. */
    metadata?: Record<string, CommodityFluctuationResponse.Metadata.Value> | undefined;
    /** The start date of the fluctuation interval in YYYY-MM-DD format. */
    startDate: string;
    /** The end date of the fluctuation interval in YYYY-MM-DD format. */
    endDate: string;
    /** Map keyed by commodity symbol; value contains fluctuation metrics. */
    rates: Record<string, CommodityFluctuationResponse.Rates.Value>;
}
export declare namespace CommodityFluctuationResponse {
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
            /** The price of the commodity on the start date of the interval. */
            startRate: number;
            /** The price of the commodity on the end date of the interval. */
            endRate: number;
            /** The absolute price difference between the end and start date. May be positive or negative. */
            change: number;
            /** The percentage change in price from start to end date. May be positive or negative. */
            changePercent: number;
        }
    }
}
