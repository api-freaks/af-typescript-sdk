import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         codes: ["codes"],
 *         country: "country"
 *     }
 */
export interface ZipcodeDistanceMatchRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.ZipcodeDistanceMatchRequestFormat;
    /** Comma-separated list of postal/zip codes. Maximum 100 values allowed. */
    codes: string[];
    /** Country code in ISO 3166-1 alpha-2 format. */
    country: string;
    /** Maximum allowed distance between postal code pairs. */
    distance?: number;
    /** Supported distance units are m, km, mi, ft, yd, in. */
    unit?: ZipcodeDistanceMatchRequest.Unit;
}
export declare namespace ZipcodeDistanceMatchRequest {
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
