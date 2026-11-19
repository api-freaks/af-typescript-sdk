export interface DomainTyposquattingResponse {
    status: boolean;
    totalRecords: number;
    currentPage: number;
    hasNextPage: boolean;
    totalPages: number;
    /** Opaque token to pass as pageToken on the next request. Present only when hasNextPage is true. */
    nextPageToken?: string | undefined;
    domains: DomainTyposquattingResponse.Domains.Item[];
}
export declare namespace DomainTyposquattingResponse {
    type Domains = Domains.Item[];
    namespace Domains {
        interface Item {
            domainName: string;
            /** Domain creation date (YYYY-MM-DD). May be absent for older or less-actively-tracked entries. */
            createDate?: string | undefined;
            /** Domain expiration date (YYYY-MM-DD). May be absent for older or less-actively-tracked entries. */
            expiryDate?: string | undefined;
            /** Last time the domain was observed (YYYY-MM-DD). */
            lastSeen?: string | undefined;
            /** Indicates whether the domain has dropped out of the registry and become available to register again. */
            isDropped: boolean;
        }
    }
}
