export interface CurrencyConvertByIpResponse {
    /** Date and time with timezone (UTC) representing the exact time at which the conversion rate was recorded. */
    date: string;
    /** Base currency code whose amount will be converted. */
    from: string;
    /** Desired currency code for the converted amount. */
    to: string;
    /** Current conversion rate with the base currency as the desired converted currency and the quote currency as the 'from' currency code. */
    rate: string;
    /** IP Address whose country's currency will be extracted and used as 'to'. Defaults to the request IP if not provided. */
    ipAddress: string;
    /** The amount to be converted. */
    givenAmount: string;
    /** Converted amount in the desired currency. */
    convertedAmount: string;
}
