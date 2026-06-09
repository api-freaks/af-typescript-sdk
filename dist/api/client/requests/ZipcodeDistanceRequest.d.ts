import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         compare: ["compare"],
 *         country: "country"
 *     }
 */
export interface ZipcodeDistanceRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.ZipcodeDistanceRequestFormat;
    /** Comma separated list of postal / zip codes with which base point is compared w.r.t. Max 100 zip codes can be provided. */
    compare: string[];
    /** Postal/Zip code to be used as the base point. */
    code?: string;
    /** Latitude coordinate for the base location. */
    lat?: number;
    /** Longitude coordinate for the base location. */
    long?: number;
    /** Country code in ISO 3166-1 alpha-2 format. */
    country: string;
    /** Supported distance units are m, km, mi, ft, yd, in. */
    unit?: ZipcodeDistanceRequest.Unit;
}
export declare namespace ZipcodeDistanceRequest {
    /** Supported distance units are m, km, mi, ft, yd, in. */
    const Unit: {
        readonly M: "m";
        readonly Km: "km";
        readonly Mi: "mi";
        readonly Ft: "ft";
        readonly Yd: "yd";
        readonly In: "in";
    };
    type Unit = (typeof Unit)[keyof typeof Unit];
}
