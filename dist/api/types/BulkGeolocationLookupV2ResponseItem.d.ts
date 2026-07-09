export interface BulkGeolocationLookupV2ResponseItem {
    /** The IP address (or hostname) that was looked up */
    ip?: string | undefined;
    /** The hostname (included when `hostname`, `liveHostname` or `hostnameFallbackLive` is requested) */
    hostname?: string | undefined;
    /** The domain name (returned when the lookup was performed for a domain) */
    domain?: string | undefined;
    location?: BulkGeolocationLookupV2ResponseItem.Location | undefined;
    country_metadata?: BulkGeolocationLookupV2ResponseItem.CountryMetadata | undefined;
    network?: BulkGeolocationLookupV2ResponseItem.Network | undefined;
    currency?: BulkGeolocationLookupV2ResponseItem.Currency | undefined;
    asn?: BulkGeolocationLookupV2ResponseItem.Asn | undefined;
    company?: BulkGeolocationLookupV2ResponseItem.Company | undefined;
    time_zone?: BulkGeolocationLookupV2ResponseItem.TimeZone | undefined;
    user_agent?: BulkGeolocationLookupV2ResponseItem.UserAgent | undefined;
    security?: BulkGeolocationLookupV2ResponseItem.Security | undefined;
    abuse?: BulkGeolocationLookupV2ResponseItem.Abuse | undefined;
    /** Error message for this entry, present only if the lookup of this IP/host failed. */
    message?: string | undefined;
}
export declare namespace BulkGeolocationLookupV2ResponseItem {
    interface Location {
        continent_code?: string | undefined;
        continent_name?: string | undefined;
        country_code2?: string | undefined;
        country_code3?: string | undefined;
        country_name?: string | undefined;
        country_name_official?: string | undefined;
        country_capital?: string | undefined;
        state_prov?: string | undefined;
        state_code?: string | undefined;
        district?: string | undefined;
        city?: string | undefined;
        locality?: string | undefined;
        zipcode?: string | undefined;
        latitude?: string | undefined;
        longitude?: string | undefined;
        is_eu?: boolean | undefined;
        country_flag?: string | undefined;
        geoname_id?: string | undefined;
        country_emoji?: string | undefined;
        accuracy_radius?: string | undefined;
        confidence?: string | undefined;
        dma_code?: string | undefined;
    }
    interface CountryMetadata {
        calling_code?: string | undefined;
        tld?: string | undefined;
        languages?: string[] | undefined;
    }
    interface Network {
        connection_type?: string | undefined;
        route?: string | undefined;
        is_anycast?: boolean | undefined;
    }
    interface Currency {
        code?: string | undefined;
        name?: string | undefined;
        symbol?: string | undefined;
    }
    interface Asn {
        as_number?: string | undefined;
        organization?: string | undefined;
        country?: string | undefined;
        type?: string | undefined;
        domain?: string | undefined;
        date_allocated?: string | undefined;
        rir?: string | undefined;
    }
    interface Company {
        name?: string | undefined;
        type?: string | undefined;
        domain?: string | undefined;
    }
    interface TimeZone {
        name?: string | undefined;
        offset?: number | undefined;
        offset_with_dst?: number | undefined;
        current_time?: string | undefined;
        current_time_unix?: number | undefined;
        current_tz_abbreviation?: string | undefined;
        current_tz_full_name?: string | undefined;
        standard_tz_abbreviation?: string | undefined;
        standard_tz_full_name?: string | undefined;
        is_dst?: boolean | undefined;
        dst_savings?: number | undefined;
        dst_exists?: boolean | undefined;
        dst_tz_abbreviation?: string | undefined;
        dst_tz_full_name?: string | undefined;
        dst_start?: TimeZone.DstStart | undefined;
        dst_end?: TimeZone.DstEnd | undefined;
    }
    namespace TimeZone {
        interface DstStart {
            utc_time?: string | undefined;
            duration?: string | undefined;
            gap?: boolean | undefined;
            date_time_after?: string | undefined;
            date_time_before?: string | undefined;
            overlap?: boolean | undefined;
        }
        interface DstEnd {
            utc_time?: string | undefined;
            duration?: string | undefined;
            gap?: boolean | undefined;
            date_time_after?: string | undefined;
            date_time_before?: string | undefined;
            overlap?: boolean | undefined;
        }
    }
    interface UserAgent {
        user_agent_string?: string | undefined;
        name?: string | undefined;
        type?: string | undefined;
        version?: string | undefined;
        version_major?: string | undefined;
        device?: UserAgent.Device | undefined;
        engine?: UserAgent.Engine | undefined;
        operating_system?: UserAgent.OperatingSystem | undefined;
    }
    namespace UserAgent {
        interface Device {
            name?: string | undefined;
            type?: string | undefined;
            brand?: string | undefined;
            cpu?: string | undefined;
        }
        interface Engine {
            name?: string | undefined;
            type?: string | undefined;
            version?: string | undefined;
            version_major?: string | undefined;
        }
        interface OperatingSystem {
            name?: string | undefined;
            type?: string | undefined;
            version?: string | undefined;
            version_major?: string | undefined;
            build?: string | undefined;
        }
    }
    interface Security {
        threat_score?: number | undefined;
        is_tor?: boolean | undefined;
        is_proxy?: boolean | undefined;
        proxy_provider_names?: string[] | undefined;
        proxy_confidence_score?: number | undefined;
        proxy_last_seen?: string | undefined;
        is_residential_proxy?: boolean | undefined;
        is_vpn?: boolean | undefined;
        vpn_provider_names?: string[] | undefined;
        vpn_confidence_score?: number | undefined;
        vpn_last_seen?: string | undefined;
        is_relay?: boolean | undefined;
        relay_provider_name?: string | undefined;
        is_anonymous?: boolean | undefined;
        is_known_attacker?: boolean | undefined;
        is_bot?: boolean | undefined;
        is_spam?: boolean | undefined;
        is_cloud_provider?: boolean | undefined;
        cloud_provider_name?: string | undefined;
    }
    interface Abuse {
        route?: string | undefined;
        country?: string | undefined;
        name?: string | undefined;
        organization?: string | undefined;
        kind?: string | undefined;
        address?: string | undefined;
        emails?: string[] | undefined;
        phone_numbers?: string[] | undefined;
    }
}
