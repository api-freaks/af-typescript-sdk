export interface DomainAvailabilitySuggestionsResponse {
    domain_available_response: DomainAvailabilitySuggestionsResponse.DomainAvailableResponse.Item[];
}
export declare namespace DomainAvailabilitySuggestionsResponse {
    type DomainAvailableResponse = DomainAvailableResponse.Item[];
    namespace DomainAvailableResponse {
        interface Item {
            domain: string;
            domainAvailability: boolean;
        }
    }
}
