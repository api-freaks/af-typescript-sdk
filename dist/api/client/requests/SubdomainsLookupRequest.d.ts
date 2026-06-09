import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         domain: "domain"
 *     }
 */
export interface SubdomainsLookupRequest {
    /** Your API key */
    apiKey: string;
    /** Format of the response. */
    format?: ApifreaksApi.SubdomainsLookupRequestFormat;
    /** Domain name for availability and suggestions. */
    domain: string;
    /** Filter subdomains seen after this date (format YYYY-MM-DD). */
    after?: string;
    /** Filter subdomains seen before this date( format YYYY-MM-DD). */
    before?: string;
    /** Filter subdomains by status (active or inactive). */
    status?: ApifreaksApi.SubdomainsLookupRequestStatus;
    /** Page number for paginated results. */
    page?: string;
}
