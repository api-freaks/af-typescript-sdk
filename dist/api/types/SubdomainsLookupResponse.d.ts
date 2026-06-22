export interface SubdomainsLookupResponse {
    domain: string;
    status: boolean;
    query_time: string;
    current_page: number;
    total_pages: number;
    total_records: number;
    subdomains: SubdomainsLookupResponse.Subdomains.Item[];
}
export declare namespace SubdomainsLookupResponse {
    type Subdomains = Subdomains.Item[];
    namespace Subdomains {
        interface Item {
            subdomain: string;
            first_seen: string;
            last_seen: string;
            /** The date from which the subdomain is considered inactive. Appears only if the subdomain is no longer active. */
            inactive_from?: string | undefined;
        }
    }
}
