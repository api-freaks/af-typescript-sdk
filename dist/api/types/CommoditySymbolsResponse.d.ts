export interface CommoditySymbolsResponse {
    /** Indicates whether the API request was successful. */
    success: boolean;
    /** An array of commodity symbol objects. */
    symbols: CommoditySymbolsResponse.Symbols.Item[];
}
export declare namespace CommoditySymbolsResponse {
    type Symbols = Symbols.Item[];
    namespace Symbols {
        interface Item {
            /** The unique ticker symbol for the commodity (e.g., "XAU", "NG-FUT"). */
            symbol: string;
            /** The full name of the commodity (e.g., "Gold", "Natural Gas Futures"). */
            name: string;
            /** The category the commodity belongs to (e.g., "Metals", "Energy"). */
            category: string;
            /** The current status of the commodity. Possible value: "active". */
            status: string;
            /** The rate at which this commodity's price is updated. */
            updateInterval: Item.UpdateInterval;
            currency: Item.Currency;
            unit: Item.Unit;
        }
        namespace Item {
            /** The rate at which this commodity's price is updated. */
            const UpdateInterval: {
                readonly PerSecond: "PER_SECOND";
                readonly PerMinute: "PER_MINUTE";
            };
            type UpdateInterval = (typeof UpdateInterval)[keyof typeof UpdateInterval];
            interface Currency {
                /** The ISO 4217 currency code (e.g., "USD"). */
                code: string;
                /** The full name of the currency (e.g., "US Dollar"). */
                name: string;
                /** The symbol of the currency (e.g., "$"). */
                symbol: string;
            }
            interface Unit {
                /** The abbreviated unit symbol (e.g., "T.oz", "MMBtu"). */
                symbol: string;
                /** The full name of the unit of measurement. */
                name: string;
            }
        }
    }
}
