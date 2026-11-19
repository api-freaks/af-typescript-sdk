export interface DomainWhoisHistoryResponse {
    /** Determines whether the request was successfully processed or not. */
    status: boolean;
    /** Indicates that this response contains historical data. */
    whois: DomainWhoisHistoryResponse.Whois;
    /** Shows the total number of records found for the queried domain. */
    total_records: string;
    whois_domains_historical: DomainWhoisHistoryResponse.WhoisDomainsHistorical.Item[];
}
export declare namespace DomainWhoisHistoryResponse {
    /** Indicates that this response contains historical data. */
    const Whois: {
        readonly Historical: "historical";
    };
    type Whois = (typeof Whois)[keyof typeof Whois];
    type WhoisDomainsHistorical = WhoisDomainsHistorical.Item[];
    namespace WhoisDomainsHistorical {
        interface Item {
            /** Shows the number of the record in the array. */
            num: number;
            /** Always true. */
            status: boolean;
            /** Domain name which was queried. */
            domain_name: string;
            /** The timestamp when the query was made (format YYYY-MM-DD HH:mm:ss, not ISO 8601). */
            query_time?: string | undefined;
            /** The WHOIS server that provided the domain information. */
            whois_server: string;
            /** Domain registration status. */
            domain_registered?: Item.DomainRegistered | undefined;
            /** Date when the domain was initially registered. */
            create_date?: string | undefined;
            /** The date of the most recent update to the domain registration. */
            update_date?: string | undefined;
            /** The date when the domain registration will expire if not renewed. */
            expiry_date?: string | undefined;
            domain_registrar?: Item.DomainRegistrar | undefined;
            reseller_contact?: Item.ResellerContact | undefined;
            registrant_contact?: Item.RegistrantContact | undefined;
            administrative_contact?: Item.AdministrativeContact | undefined;
            technical_contact?: Item.TechnicalContact | undefined;
            billing_contact?: Item.BillingContact | undefined;
            name_servers?: string[] | undefined;
            domain_status?: string[] | undefined;
            whois_raw_domain?: string | undefined;
            registry_data?: Item.RegistryData | undefined;
        }
        namespace Item {
            /** Domain registration status. */
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
                /** Registrar handle as published in the snapshot, when present (for example `292`, usually the same as `iana_id`). */
                handle?: string | undefined;
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
                /** Deprecated: the API returns this field as `email_address`; read `email_address` instead. */
                emailaddress?: string | undefined;
                phone?: string | undefined;
                fax?: string | undefined;
                /** Deprecated: the API returns this field as `mailing_address`; read `mailing_address` instead. */
                mailingaddress?: string | undefined;
                email_address?: string | undefined;
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
                /** Deprecated: the API returns this field as `email_address`; read `email_address` instead. */
                emailaddress?: string | undefined;
                phone?: string | undefined;
                fax?: string | undefined;
                /** Deprecated: the API returns this field as `mailing_address`; read `mailing_address` instead. */
                mailingaddress?: string | undefined;
                email_address?: string | undefined;
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
                /** Deprecated: the API returns this field as `email_address`; read `email_address` instead. */
                emailaddress?: string | undefined;
                phone?: string | undefined;
                fax?: string | undefined;
                /** Deprecated: the API returns this field as `mailing_address`; read `mailing_address` instead. */
                mailingaddress?: string | undefined;
                email_address?: string | undefined;
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
                /** Deprecated: the API returns this field as `email_address`; read `email_address` instead. */
                emailaddress?: string | undefined;
                phone?: string | undefined;
                fax?: string | undefined;
                /** Deprecated: the API returns this field as `mailing_address`; read `mailing_address` instead. */
                mailingaddress?: string | undefined;
                email_address?: string | undefined;
                mailing_address?: string | undefined;
            }
            interface RegistryData {
                domain_name?: string | undefined;
                /** Timestamp when the WHOIS query was executed (format YYYY-MM-DD HH:mm:ss, not ISO 8601). */
                query_time?: string | undefined;
                whois_server?: string | undefined;
                domain_registered?: RegistryData.DomainRegistered | undefined;
                create_date?: string | undefined;
                update_date?: string | undefined;
                expiry_date?: string | undefined;
                name_servers?: string[] | undefined;
                domain_status?: string[] | undefined;
                /** Deprecated: the API returns this field as `whois_raw_registery`; read `whois_raw_registery` instead. */
                whois_raw_registry?: string | undefined;
                domain_registrar?: RegistryData.DomainRegistrar | undefined;
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
                    iana_id?: string | undefined;
                    registrar_name?: string | undefined;
                    whois_server?: string | undefined;
                    website_url?: string | undefined;
                    email_address?: string | undefined;
                    phone_number?: string | undefined;
                    /** Registrar handle as published in the snapshot, when present (for example `292`, usually the same as `iana_id`). */
                    handle?: string | undefined;
                }
            }
        }
    }
}
