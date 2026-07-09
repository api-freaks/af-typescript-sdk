export interface BulkDomainWhoisLookupV2Response {
    bulk_whois_response?: BulkDomainWhoisLookupV2Response.Item[] | undefined;
}
export declare namespace BulkDomainWhoisLookupV2Response {
    interface Item {
        status?: boolean | undefined;
        domain_name?: string | undefined;
        query_time?: string | undefined;
        whois_server?: string | undefined;
        domain_registered?: Item.DomainRegistered | undefined;
        secure_dns?: boolean | undefined;
        domain_handle?: string | undefined;
        create_date?: string | undefined;
        update_date?: string | undefined;
        expiry_date?: string | undefined;
        domain_registrar?: Item.DomainRegistrar | undefined;
        reseller_contact?: Item.ResellerContact | undefined;
        registrant_contact?: Item.Contact | undefined;
        administrative_contact?: Item.Contact | undefined;
        technical_contact?: Item.Contact | undefined;
        billing_contact?: Item.Contact | undefined;
        eligibility_info?: Item.EligibilityInfo | undefined;
        abuse_contact?: Item.AbuseContact | undefined;
        name_servers?: string[] | undefined;
        domain_status?: string[] | undefined;
        whois_raw_domain?: string | undefined;
        registry_data?: Item.RegistryData | undefined;
    }
    namespace Item {
        const DomainRegistered: {
            readonly Yes: "yes";
            readonly No: "no";
            readonly Restricted: "restricted";
        };
        type DomainRegistered = (typeof DomainRegistered)[keyof typeof DomainRegistered];
        interface DomainRegistrar {
            id?: string | undefined;
            id_type?: string | undefined;
            iana_id?: string | undefined;
            registry_id?: string | undefined;
            handle?: string | undefined;
            status?: string | undefined;
            registrar_name?: string | undefined;
            normalized_name?: string | undefined;
            whois_server?: string | undefined;
            rdap_server?: string | undefined;
            website_url?: string | undefined;
            email_address?: string | undefined;
            phone_number?: string | undefined;
            authoritative_registry_name?: string | undefined;
            organization_number?: string | undefined;
            is_sponsor?: boolean | undefined;
        }
        interface ResellerContact {
            name?: string | undefined;
            email_address?: string | undefined;
            phone?: string | undefined;
        }
        interface Contact {
            id?: string | undefined;
            name?: string | undefined;
            company?: string | undefined;
            street?: string | undefined;
            city?: string | undefined;
            state?: string | undefined;
            zip_code?: string | undefined;
            country_name?: string | undefined;
            country_code?: string | undefined;
            email_address?: string | undefined;
            phone?: string | undefined;
            fax?: string | undefined;
            mailing_address?: string | undefined;
        }
        interface EligibilityInfo {
            id?: string | undefined;
            name?: string | undefined;
            type?: string | undefined;
        }
        interface AbuseContact {
            email_address?: string | undefined;
            phone_number?: string | undefined;
        }
        interface RegistryData {
            domain_name?: string | undefined;
            query_time?: string | undefined;
            whois_server?: string | undefined;
            domain_registered?: RegistryData.DomainRegistered | undefined;
            create_date?: string | undefined;
            update_date?: string | undefined;
            expiry_date?: string | undefined;
            domain_registrar?: RegistryData.DomainRegistrar | undefined;
            name_servers?: string[] | undefined;
            domain_status?: string[] | undefined;
            whois_raw_registery?: string | undefined;
        }
        namespace RegistryData {
            const DomainRegistered: {
                readonly Yes: "yes";
                readonly No: "no";
                readonly Restricted: "restricted";
            };
            type DomainRegistered = (typeof DomainRegistered)[keyof typeof DomainRegistered];
            interface DomainRegistrar {
                id?: string | undefined;
                id_type?: string | undefined;
                iana_id?: string | undefined;
                registry_id?: string | undefined;
                handle?: string | undefined;
                status?: string | undefined;
                registrar_name?: string | undefined;
                normalized_name?: string | undefined;
                whois_server?: string | undefined;
                rdap_server?: string | undefined;
                website_url?: string | undefined;
                email_address?: string | undefined;
                phone_number?: string | undefined;
                authoritative_registry_name?: string | undefined;
                organization_number?: string | undefined;
                is_sponsor?: boolean | undefined;
            }
        }
    }
}
