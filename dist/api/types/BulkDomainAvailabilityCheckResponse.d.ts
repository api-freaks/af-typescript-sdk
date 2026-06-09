export interface BulkDomainAvailabilityCheckResponse {
    bulk_domain_available_response?: BulkDomainAvailabilityCheckResponse.BulkDomainAvailableResponse.Item[] | undefined;
}
export declare namespace BulkDomainAvailabilityCheckResponse {
    type BulkDomainAvailableResponse = BulkDomainAvailableResponse.Item[];
    namespace BulkDomainAvailableResponse {
        interface Item {
            domain?: string | undefined;
            domainAvailability?: boolean | undefined;
            status?: boolean | undefined;
        }
    }
}
