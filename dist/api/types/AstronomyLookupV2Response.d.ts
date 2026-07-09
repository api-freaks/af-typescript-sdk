export interface AstronomyLookupV2Response {
    ip?: string | undefined;
    location?: AstronomyLookupV2Response.Location | undefined;
    astronomy: AstronomyLookupV2Response.Astronomy;
}
export declare namespace AstronomyLookupV2Response {
    interface Location {
        /** The complete geographical location (returned when looking up by the location parameter). */
        location_string?: string | undefined;
        continent_code?: string | undefined;
        continent_name?: string | undefined;
        country_code2?: string | undefined;
        country_code3?: string | undefined;
        country_name?: string | undefined;
        country_name_official?: string | undefined;
        is_eu?: boolean | undefined;
        state_prov?: string | undefined;
        state_code?: string | undefined;
        district?: string | undefined;
        city?: string | undefined;
        locality?: string | undefined;
        zipcode?: string | undefined;
        latitude?: string | undefined;
        longitude?: string | undefined;
        elevation?: string | undefined;
    }
    interface Astronomy {
        /** Time zone to receive all time-based data in your preferred local time. */
        time_zone?: string | undefined;
        /** Date for astronomy data (YYYY-MM-DD) */
        date: string;
        /** Current time (HH:mm:ss.SSS) */
        current_time: string;
        /** Midnight time (HH:mm) */
        mid_night: string;
        /** Time when night ends (HH:mm) */
        night_end: string;
        morning: Astronomy.Morning;
        /** Sunrise time (HH:mm) */
        sunrise: string;
        /** Sunset time (HH:mm) */
        sunset: string;
        evening: Astronomy.Evening;
        /** Time when night begins (HH:mm) */
        night_begin: string;
        /** Current status of the sun */
        sun_status: string;
        /** Solar noon time (HH:mm) */
        solar_noon: string;
        /** Length of the day (HH:mm) */
        day_length: string;
        /** Sun altitude angle */
        sun_altitude: number;
        /** Distance from Earth to Sun */
        sun_distance: number;
        /** Sun azimuth angle */
        sun_azimuth: number;
        /** Moon phase */
        moon_phase: string;
        /** Moonrise time (HH:mm) */
        moonrise: string;
        /** Moonset time (HH:mm) */
        moonset: string;
        /** Current status of the moon */
        moon_status: string;
        /** Moon altitude angle */
        moon_altitude: number;
        /** Distance from Earth to Moon */
        moon_distance: number;
        /** Moon azimuth angle */
        moon_azimuth: number;
        /** Moon parallactic angle */
        moon_parallactic_angle: number;
        /** Moon illumination percentage */
        moon_illumination_percentage: string;
        /** Moon angle */
        moon_angle: number;
    }
    namespace Astronomy {
        interface Morning {
            astronomical_twilight_begin?: string | undefined;
            astronomical_twilight_end?: string | undefined;
            nautical_twilight_begin?: string | undefined;
            nautical_twilight_end?: string | undefined;
            civil_twilight_begin?: string | undefined;
            civil_twilight_end?: string | undefined;
            blue_hour_begin?: string | undefined;
            blue_hour_end?: string | undefined;
            golden_hour_begin?: string | undefined;
            golden_hour_end?: string | undefined;
        }
        interface Evening {
            golden_hour_begin?: string | undefined;
            golden_hour_end?: string | undefined;
            blue_hour_begin?: string | undefined;
            blue_hour_end?: string | undefined;
            civil_twilight_begin?: string | undefined;
            civil_twilight_end?: string | undefined;
            nautical_twilight_begin?: string | undefined;
            nautical_twilight_end?: string | undefined;
            astronomical_twilight_begin?: string | undefined;
            astronomical_twilight_end?: string | undefined;
        }
    }
}
