export interface TimezoneLookupResponse {
    ip?: string | undefined;
    location?: TimezoneLookupResponse.Location | undefined;
    time_zone: TimezoneLookupResponse.TimeZone;
    airport_details?: TimezoneLookupResponse.AirportDetails | undefined;
    lo_code_details?: TimezoneLookupResponse.LoCodeDetails | undefined;
}
export declare namespace TimezoneLookupResponse {
    interface Location {
        location_string?: string | undefined;
        country_name?: string | undefined;
        state_prov?: string | undefined;
        city?: string | undefined;
        locality?: string | undefined;
        latitude?: string | undefined;
        longitude?: string | undefined;
        continent_code?: string | undefined;
        continent_name?: string | undefined;
        country_code2?: string | undefined;
        country_code3?: string | undefined;
        country_name_official?: string | undefined;
        is_eu?: boolean | undefined;
        state_code?: string | undefined;
        district?: string | undefined;
        zipcode?: string | undefined;
        /** Accepts any additional properties */
        [key: string]: any;
    }
    interface TimeZone {
        name: string;
        offset: number;
        offset_with_dst: number;
        date: string;
        date_time: string;
        date_time_txt: string;
        date_time_wti: string;
        date_time_ymd: string;
        date_time_unix: number;
        time_24: string;
        time_12: string;
        week: number;
        month: number;
        year: number;
        year_abbr: string;
        current_tz_abbreviation: string;
        current_tz_full_name: string;
        standard_tz_abbreviation: string;
        standard_tz_full_name: string;
        is_dst: boolean;
        dst_savings: number;
        dst_exists: boolean;
        dst_start?: TimeZone.DstStart | undefined;
        dst_end?: TimeZone.DstEnd | undefined;
        /** Accepts any additional properties */
        [key: string]: any;
    }
    namespace TimeZone {
        interface DstStart {
            utc_time?: string | undefined;
            duration?: string | undefined;
            gap?: boolean | undefined;
            date_time_after?: string | undefined;
            date_time_before?: string | undefined;
            overlap?: boolean | undefined;
            /** Accepts any additional properties */
            [key: string]: any;
        }
        interface DstEnd {
            utc_time?: string | undefined;
            duration?: string | undefined;
            gap?: boolean | undefined;
            date_time_after?: string | undefined;
            date_time_before?: string | undefined;
            overlap?: boolean | undefined;
            /** Accepts any additional properties */
            [key: string]: any;
        }
    }
    interface AirportDetails {
        type: string;
        name: string;
        longitude: string;
        latitude: string;
        elevation_ft: number;
        continent_code: string;
        country_code: string;
        state_code: string;
        city: string;
        iata_code: string;
        icao_code: string;
        faa_code: string;
    }
    interface LoCodeDetails {
        lo_code: string;
        city: string;
        longitude: string;
        latitude: string;
        state_code: string;
        country_code: string;
        country_name: string;
        location_type: string;
    }
}
