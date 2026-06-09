export interface DomainAvailabilitySuggestionsResponse {
    domain_available_response?: DomainAvailabilitySuggestionsResponse.DomainAvailableResponse.Item[] | undefined;
}
export declare namespace DomainAvailabilitySuggestionsResponse {
    type DomainAvailableResponse = DomainAvailableResponse.Item[];
    namespace DomainAvailableResponse {
        interface Item {
            domain?: string | undefined;
            domainAvailability?: boolean | undefined;
            /** Extra details if the domain is not registered. */
            message?: string | undefined;
        }
    }
}
