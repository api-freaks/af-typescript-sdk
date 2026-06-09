export interface IpWhoisLookupResponse {
    status?: boolean | undefined;
    ip_address?: string | undefined;
    query_time?: string | undefined;
    whois_server?: string | undefined;
    inet_nums?: IpWhoisLookupResponse.InetNums.Item[] | undefined;
    irt?: IpWhoisLookupResponse.Irt | undefined;
    organization?: IpWhoisLookupResponse.Organization | undefined;
    technical_contacts?: IpWhoisLookupResponse.TechnicalContacts.Item[] | undefined;
    abuse_contacts?: IpWhoisLookupResponse.AbuseContacts.Item[] | undefined;
    administrative_contacts?: IpWhoisLookupResponse.AdministrativeContacts.Item[] | undefined;
    whois_raw_response?: string | undefined;
}
export declare namespace IpWhoisLookupResponse {
    type InetNums = InetNums.Item[];
    namespace InetNums {
        interface Item {
            start_ip?: string | undefined;
            end_ip?: string | undefined;
            cidr?: string[] | undefined;
            net_name?: string | undefined;
            net_handle?: string | undefined;
            description?: string[] | undefined;
            countries?: string[] | undefined;
            geofeed?: string | undefined;
            latitude?: number | undefined;
            longitude?: number | undefined;
            city?: string | undefined;
            languages?: string[] | undefined;
            status?: string | undefined;
            organization?: string | undefined;
            sponsoring_organization?: string | undefined;
            admin_contacts?: string[] | undefined;
            tech_contacts?: string[] | undefined;
            abuse_contacts?: string[] | undefined;
            remarks?: string[] | undefined;
            assignment_size?: string | undefined;
            notify?: string[] | undefined;
            mnt_by?: string[] | undefined;
            mnt_lower?: string[] | undefined;
            mnt_domains?: string[] | undefined;
            mnt_routes?: string[] | undefined;
            mnt_irt?: string[] | undefined;
            date_created?: string | undefined;
            date_updated?: string | undefined;
            source?: string | undefined;
            parents?: string[] | undefined;
        }
    }
    interface Irt {
        handle?: string | undefined;
        address?: string[] | undefined;
        street?: string | undefined;
        city?: string | undefined;
        district?: string | undefined;
        state?: string | undefined;
        zip_code?: string | undefined;
        country?: string | undefined;
        email?: string[] | undefined;
        abuse_mailbox?: string[] | undefined;
        phone?: string[] | undefined;
        fax_no?: string[] | undefined;
        organizations?: string[] | undefined;
        admin_contacts?: string[] | undefined;
        tech_contacts?: string[] | undefined;
        remarks?: string[] | undefined;
        signature?: string[] | undefined;
        encryption?: string[] | undefined;
        auth?: string[] | undefined;
        notify?: string[] | undefined;
        irt_nfy?: string[] | undefined;
        mnt_by?: string[] | undefined;
        mnt_ref?: string[] | undefined;
        date_created?: string | undefined;
        date_updated?: string | undefined;
        source?: string | undefined;
    }
    interface Organization {
        handle?: string | undefined;
        name?: string | undefined;
        type?: string | undefined;
        description?: string[] | undefined;
        address?: string[] | undefined;
        street?: string | undefined;
        city?: string | undefined;
        district?: string | undefined;
        state?: string | undefined;
        zip_code?: string | undefined;
        country?: string[] | undefined;
        latitude?: number | undefined;
        longitude?: number | undefined;
        email?: string[] | undefined;
        abuse_mailbox?: string[] | undefined;
        phone?: string[] | undefined;
        fax_no?: string[] | undefined;
        organizations?: string[] | undefined;
        admin_contacts?: string[] | undefined;
        tech_contacts?: string[] | undefined;
        abuse_contacts?: string[] | undefined;
        languages?: string[] | undefined;
        remarks?: string[] | undefined;
    }
    type TechnicalContacts = TechnicalContacts.Item[];
    namespace TechnicalContacts {
        interface Item {
            handle?: string | undefined;
            name?: string | undefined;
            email?: string[] | undefined;
            phone?: string[] | undefined;
            source?: string | undefined;
        }
    }
    type AbuseContacts = AbuseContacts.Item[];
    namespace AbuseContacts {
        interface Item {
            handle?: string | undefined;
            name?: string | undefined;
            email?: string[] | undefined;
            phone?: string[] | undefined;
            source?: string | undefined;
        }
    }
    type AdministrativeContacts = AdministrativeContacts.Item[];
    namespace AdministrativeContacts {
        interface Item {
            handle?: string | undefined;
            name?: string | undefined;
            email?: string[] | undefined;
            phone?: string[] | undefined;
            source?: string | undefined;
        }
    }
}
