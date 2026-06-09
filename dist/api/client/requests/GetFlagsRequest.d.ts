import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         name: "name",
 *         shape: "flat",
 *         type: "country"
 *     }
 */
export interface GetFlagsRequest {
    /** Your API key */
    apiKey: string;
    /** Country code in ISO 3166-1 alpha-2 format. */
    name: string;
    /** Flag shape. One of: `'flat'` or `'round'`. */
    shape: ApifreaksApi.GetFlagsRequestShape;
    /** Flag format. Applicable only for PNG or WEBP formats. Default is png. */
    format?: ApifreaksApi.GetFlagsRequestFormat;
    /** Flag size in pixels. Valid options: `16px`, `24px`, `32px`, `48px`, `64px`. Applicable only for PNG or WEBP formats. */
    size?: ApifreaksApi.GetFlagsRequestSize;
    /** Type of flag. One of: `country` or `organization`. */
    type: ApifreaksApi.GetFlagsRequestType;
}
