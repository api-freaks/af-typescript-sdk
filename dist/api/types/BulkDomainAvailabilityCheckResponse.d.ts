export interface BulkDomainAvailabilityCheckResponse {
    /** Deprecated: the API returns this field as `bulk_domain_availability_response`; read `bulk_domain_availability_response` instead. */
    bulk_domain_available_response?: BulkDomainAvailabilityCheckResponse.BulkDomainAvailableResponse.Item[] | undefined;
    bulk_domain_availability_response?: BulkDomainAvailabilityCheckResponse.BulkDomainAvailabilityResponse.Item[] | undefined;
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
    type BulkDomainAvailabilityResponse = BulkDomainAvailabilityResponse.Item[];
    namespace BulkDomainAvailabilityResponse {
        interface Item {
            domain?: string | undefined;
            domainAvailability?: boolean | undefined;
            status?: boolean | undefined;
        }
    }
}
