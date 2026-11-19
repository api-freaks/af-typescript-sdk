/**
 * Intraday response containing the prices of the requested symbol keyed by UTC timestamp.
 */
export interface CommodityIntradayRatesV2Response {
    /** `true` for successful requests. */
    success: boolean;
    /** The symbol the prices belong to. */
    symbol: string;
    /** The UTC day requested. Format: `YYYY-MM-DD`. */
    date: string;
    /** The interval used, in lowercase form (`5M` comes back as `5m`). */
    interval: CommodityIntradayRatesV2Response.Interval;
    /** First mark of the window, `HH:mm` UTC. */
    startTime: string;
    /** Number of points in `rates` (at most 100). */
    count: number;
    /** `HH:mm` value to pass as `startTime` for the next page, or `null` when the window reached the end of the day (or the current minute, for today). */
    nextStartTime: string | null;
    /** Prices keyed by ISO 8601 UTC timestamp (for example `2026-10-14T18:00:00Z`), in ascending order. Values are rounded to two decimals. A mark with no recorded price is left out rather than filled in. */
    rates: Record<string, number>;
    /** Unit and currency of the prices, keyed by the requested symbol. Omitted when the request sets `metadata=false`. */
    metadata?: Record<string, CommodityIntradayRatesV2Response.Metadata.Value> | undefined;
    /** Present when the symbol you sent was matched to a single alternative (200, with `resolvedTo`, for example `GOLD` answered as `XAU`), or not recognized at all (404, with a `suggestions` array when close matches exist). */
    unresolved?: Record<string, CommodityIntradayRatesV2Response.Unresolved.Value> | undefined;
}
export declare namespace CommodityIntradayRatesV2Response {
    /** The interval used, in lowercase form (`5M` comes back as `5m`). */
    const Interval: {
        readonly OneM: "1m";
        readonly FiveM: "5m";
        readonly TenM: "10m";
        readonly FifteenM: "15m";
        readonly ThirtyM: "30m";
        readonly FortyFiveM: "45m";
        readonly OneH: "1h";
        readonly TwoH: "2h";
        readonly FourH: "4h";
        readonly EightH: "8h";
        readonly TwelveH: "12h";
        readonly OneD: "1d";
    };
    type Interval = (typeof Interval)[keyof typeof Interval];
    namespace Metadata {
        /**
         * Unit and currency of the prices for one commodity.
         */
        interface Value {
            /** Unit the commodity is priced in (for example `T.oz` or `Bbl`). */
            unit?: string | undefined;
            /** Currency the prices are quoted in (for example `USD`). */
            quote?: string | undefined;
        }
    }
    namespace Unresolved {
        interface Value {
            /** Detail message explaining how this symbol was handled. */
            message?: string | undefined;
            /** The supported symbol the request was answered with. */
            resolvedTo?: string | undefined;
            /** Optional list of supported symbols that closely match the unresolved symbol. */
            suggestions?: string[] | undefined;
        }
    }
}
