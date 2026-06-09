export interface DomainAvailabilityCheckResponse {
    domain?: string | undefined;
    domainAvailability?: boolean | undefined;
    /** Extra details if the domain is not registered. */
    message?: string | undefined;
}
