export interface DomainWhoisLookupResponse {
    status?: boolean | undefined;
    domain_name?: string | undefined;
    query_time?: string | undefined;
    whois_server?: string | undefined;
    domain_registered?: DomainWhoisLookupResponse.DomainRegistered | undefined;
    create_date?: string | undefined;
    update_date?: string | undefined;
    expiry_date?: string | undefined;
    domain_registrar?: DomainWhoisLookupResponse.DomainRegistrar | undefined;
    reseller_contact?: DomainWhoisLookupResponse.ResellerContact | undefined;
    registrant_contact?: DomainWhoisLookupResponse.RegistrantContact | undefined;
    administrative_contact?: DomainWhoisLookupResponse.AdministrativeContact | undefined;
    technical_contact?: DomainWhoisLookupResponse.TechnicalContact | undefined;
    billing_contact?: DomainWhoisLookupResponse.BillingContact | undefined;
    name_servers?: string[] | undefined;
    domain_status?: string[] | undefined;
    whois_raw_domain?: string | undefined;
    registry_data?: DomainWhoisLookupResponse.RegistryData | undefined;
}
export declare namespace DomainWhoisLookupResponse {
    const DomainRegistered: {
        readonly Yes: "yes";
        readonly No: "no";
        readonly Restricted: "restricted";
    };
    type DomainRegistered = (typeof DomainRegistered)[keyof typeof DomainRegistered];
    interface DomainRegistrar {
        iana_id?: string | undefined;
        registrar_name?: string | undefined;
        whois_server?: string | undefined;
        website_url?: string | undefined;
        email_address?: string | undefined;
        phone_number?: string | undefined;
    }
    interface ResellerContact {
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
    interface RegistrantContact {
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
    interface AdministrativeContact {
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
    interface TechnicalContact {
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
    interface BillingContact {
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
    interface RegistryData {
        domain_name?: string | undefined;
        query_time?: string | undefined;
        whois_server?: string | undefined;
        domain_registered?: RegistryData.DomainRegistered | undefined;
        create_date?: string | undefined;
        update_date?: string | undefined;
        expiry_date?: string | undefined;
        name_servers?: string[] | undefined;
        domain_status?: string[] | undefined;
        whois_raw_registry?: string | undefined;
        domain_registrar?: RegistryData.DomainRegistrar | undefined;
    }
    namespace RegistryData {
        const DomainRegistered: {
            readonly Yes: "yes";
            readonly No: "no";
            readonly Restricted: "restricted";
        };
        type DomainRegistered = (typeof DomainRegistered)[keyof typeof DomainRegistered];
        interface DomainRegistrar {
            iana_id?: string | undefined;
            registrar_name?: string | undefined;
            whois_server?: string | undefined;
            website_url?: string | undefined;
            email_address?: string | undefined;
            phone_number?: string | undefined;
        }
    }
}
