import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey"
 *     }
 */
export interface TimezoneLookupV2Request {
    /** Your API key */
    apiKey: string;
    /** Format of the response */
    format?: ApifreaksApi.TimezoneLookupV2RequestFormat;
    /** IPv4 or IPv6 address to extract timezone information. */
    ip?: string;
    /** Timezone name (e.g., "Asia/Kolkata") to retrieve information directly. */
    tz?: string;
    /** Location string (preferably city and country) to extract timezone. */
    location?: string;
    /** Latitude for geolocation lookup. */
    lat?: number;
    /** Longitude for geolocation lookup. */
    long?: number;
    /** Language code for response localization (default is "en"). */
    lang?: ApifreaksApi.TimezoneLookupV2RequestLang;
    /** 3-letter IATA airport code (e.g., JFK). */
    iata_code?: string;
    /** 4-letter ICAO airport code (e.g., KJFK). */
    icao_code?: string;
    /** 5-letter UN/LO city code. */
    lo_code?: string;
}
