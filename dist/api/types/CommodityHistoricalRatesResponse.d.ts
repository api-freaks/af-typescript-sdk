export interface CommodityHistoricalRatesResponse {
    /** API request success indicator. "true" for successful requests. */
    success: boolean;
    /** Unix timestamp indicating when the response was generated. */
    timestamp: number;
    /** Map containing rate data for all the requested commodities. */
    rates: Record<string, number>;
    /** Map containing detailed information for all the requested commodities keyed by commodity symbol. */
    metadata: Record<string, CommodityHistoricalRatesResponse.Metadata.Value>;
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
}
