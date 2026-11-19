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
            /** The rate at which this commodity's price is updated. New values may be added over time. */
            updateInterval: Item.UpdateInterval;
            currency: Item.Currency;
            unit: Item.Unit;
            /** Short description of the commodity. May be an empty string for some symbols. */
            description?: string | undefined;
            /** Data source for the symbol (e.g., World Bank). Present only for some symbols. */
            exchange?: string | undefined;
            /** Present only when status is "inactive". Date the symbol was deprecated (YYYY-MM-DD). */
            deprecationDate?: string | undefined;
            /** Optional. Present only for dated futures contracts (for example `WTIOIL-FUT-DEC26`). Contract type, currently always `futures`. */
            contract?: string | undefined;
            /** Optional. Present only for dated futures contracts. Delivery month of the contract (YYYY-MM), for example `2026-12`. */
            deliveryMonth?: string | undefined;
            /** Optional. Present for most dated futures contracts. Last trading date of the contract (YYYY-MM-DD), for example `2026-11-20`. */
            expiresAt?: string | undefined;
            /** Optional. Present only for dated futures contracts. Symbol of the continuous futures series this contract belongs to (for example `WTIOIL-FUT`). */
            underlying?: string | undefined;
        }
        namespace Item {
            /** The rate at which this commodity's price is updated. New values may be added over time. */
            const UpdateInterval: {
                readonly PerSecond: "PER_SECOND";
                readonly PerMinute: "PER_MINUTE";
                readonly Per10Minutes: "PER_10_MINUTES";
                readonly PerHour: "PER_HOUR";
                readonly PerDay: "PER_DAY";
                readonly PerWeek: "PER_WEEK";
                readonly PerMonth: "PER_MONTH";
                readonly Per6Months: "PER_6_MONTHS";
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
