export interface AsnWhoisLookupResponse {
    asNumber: string;
    asName: string;
    orgName: string;
    description?: string | undefined;
    orgHandle: string;
    country: string;
    domain?: string | undefined;
    website?: string | undefined;
    allocationStatus: string;
    numOfIPv4Routes: string;
    numOfIPv6Routes: string;
    whoisHost: string;
    dateAllocated?: string | undefined;
    type: string;
    routeObjects: AsnWhoisLookupResponse.RouteObjects.Item[];
    whoisResponse: string;
    downstreams: AsnWhoisLookupResponse.Downstreams.Item[];
    parsedWhoisResponse: AsnWhoisLookupResponse.ParsedWhoisResponse;
    upstreams: AsnWhoisLookupResponse.Upstreams.Item[];
    peers: AsnWhoisLookupResponse.Peers.Item[];
    contacts: AsnWhoisLookupResponse.Contacts;
    legacyRoutes: string[];
    whois_raw_response?: string | undefined;
    r_whois_raw_response?: string | undefined;
    query_time?: string | undefined;
}
export declare namespace AsnWhoisLookupResponse {
    type RouteObjects = RouteObjects.Item[];
    namespace RouteObjects {
        interface Item {
            route: string;
            origin: string;
            originName: string;
            isp: string;
            numberOfIps: number;
        }
    }
    type Downstreams = Downstreams.Item[];
    namespace Downstreams {
        interface Item {
            asNumber?: string | undefined;
            description?: string | undefined;
            country?: string | undefined;
        }
    }
    interface ParsedWhoisResponse {
        status: boolean;
        whois_server: string;
        aut_nums: ParsedWhoisResponse.AutNums.Item[];
        organization: ParsedWhoisResponse.Organization;
        technical_contacts: ParsedWhoisResponse.TechnicalContacts.Item[];
        abuse_contacts: ParsedWhoisResponse.AbuseContacts.Item[];
    }
    namespace ParsedWhoisResponse {
        type AutNums = AutNums.Item[];
        namespace AutNums {
            interface Item {
                aut_num: string;
                as_handle: string;
                as_name: string;
                tech_contacts: string[];
                abuse_contacts: string[];
                date_created: string;
                date_updated: string;
                source: string;
                description?: string | undefined;
                country?: string | undefined;
                status?: string[] | undefined;
                member_of?: string[] | undefined;
                import_via?: string[] | undefined;
                import?: string[] | undefined;
                mp_import?: string[] | undefined;
                export_via?: string[] | undefined;
                export?: string[] | undefined;
                mp_export?: string[] | undefined;
                default?: string[] | undefined;
                mp_default?: string[] | undefined;
                organization?: string | undefined;
                sponsoring_organization?: string | undefined;
                admin_contacts?: string[] | undefined;
            }
        }
        interface Organization {
            handle?: string | undefined;
            name?: string | undefined;
            address?: string[] | undefined;
            street?: string | undefined;
            city?: string | undefined;
            state?: string | undefined;
            zip_code?: string | undefined;
            country?: string[] | undefined;
            addressCountry?: string | undefined;
            date_created?: string | undefined;
            date_updated?: string | undefined;
            source?: string | undefined;
        }
        type TechnicalContacts = TechnicalContacts.Item[];
        namespace TechnicalContacts {
            interface Item {
                handle: string;
                name: string;
                email: string[];
                phone?: string[] | undefined;
                source?: string | undefined;
            }
        }
        type AbuseContacts = AbuseContacts.Item[];
        namespace AbuseContacts {
            interface Item {
                handle: string;
                name: string;
                email: string[];
                phone?: string[] | undefined;
                source?: string | undefined;
            }
        }
    }
    type Upstreams = Upstreams.Item[];
    namespace Upstreams {
        interface Item {
            asNumber: string;
            description: string;
            country: string;
        }
    }
    type Peers = Peers.Item[];
    namespace Peers {
        interface Item {
            asNumber: string;
            description: string;
            country: string;
        }
    }
    interface Contacts {
        emailContacts: string[];
        abuseContacts: string[];
    }
}
