import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         from: "from"
 *     }
 */
export interface CurrencyConvertByIpRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.CurrencyConvertByIpRequestFormat;
    /** Exchange rates update period (1d=daily, 1h=hourly, 10m=10 minutes, 1m=1 minute) */
    updates?: ApifreaksApi.CurrencyConvertByIpRequestUpdates;
    /** From currency symbol */
    from: string;
    /** IPv4 or IPv6 geolocated currency */
    ip?: string;
    /** Amount to convert */
    amount?: number;
}
