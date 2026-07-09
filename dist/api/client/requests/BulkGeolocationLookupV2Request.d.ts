import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         ips: ["ips"]
 *     }
 */
export interface BulkGeolocationLookupV2Request {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.BulkGeolocationLookupV2RequestFormat;
    /** Language of the response. */
    lang?: string;
    /** Comma-separated list of fields to include in the response. */
    fields?: string;
    /** Comma-separated list of fields to exclude from the response (except "ip"). */
    excludes?: string;
    /** Comma-separated list of additional modules to include in the response. */
    include?: string;
    /** List of IP addresses, hostnames or domain names to lookup */
    ips: string[];
}
