export interface BulkDomainAvailabilityCheckResponse {
    bulk_domain_available_response: BulkDomainAvailabilityCheckResponse.BulkDomainAvailableResponse.Item[];
}
export declare namespace BulkDomainAvailabilityCheckResponse {
    type BulkDomainAvailableResponse = BulkDomainAvailableResponse.Item[];
    namespace BulkDomainAvailableResponse {
        interface Item {
            domain: string;
            domainAvailability: boolean;
            status: boolean;
        }
    }
}
