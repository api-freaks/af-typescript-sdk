export interface AirQualityResponse {
    /** Location information */
    location?: AirQualityResponse.Location | undefined;
    /** Current air quality data */
    current?: AirQualityResponse.Current | undefined;
    /** Air quality forecast data object */
    forecast?: Record<string, AirQualityResponse.Forecast.Value> | undefined;
}
export declare namespace AirQualityResponse {
    /**
     * Location information
     */
    type Location = {
        latitude: number;
        longitude: number;
        country_name: string;
        state_prov: string;
        city: string;
        locality?: string | undefined;
        elevation?: number | undefined;
        timezone: string;
        timezone_abbreviation: string;
    } | {
        continent_code: string;
        continent_name: string;
        country_code2: string;
        country_code3: string;
        country_name: string;
        country_name_official: string;
        is_eu?: boolean | undefined;
        state_prov: string;
        state_code?: string | undefined;
        district?: string | undefined;
        city: string;
        zipcode?: string | undefined;
        latitude: number;
        longitude: number;
        locality?: string | undefined;
        elevation?: number | undefined;
        timezone: string;
        timezone_abbreviation: string;
    } | {
        location_string: string;
        country_name: string;
        state_prov: string;
        city: string;
        locality?: string | undefined;
        latitude: number;
        longitude: number;
        elevation?: number | undefined;
        timezone: string;
        timezone_abbreviation: string;
    };
    /**
     * Current air quality data
     */
    interface Current {
        /** ISO 8601 formatted timestamp (iso8601). */
        timestamp: string;
        /** Consolidated European Air Quality Index representing the highest value among individual pollutant indices. Ranges: 0-20 (good), 20-40 (fair), 40-60 (moderate), 60-80 (poor), 80-100 (very poor), >100 (extremely poor). */
        european_aqi: number;
        /** Consolidated U.S. Air Quality Index representing the highest value among individual pollutant indices. Ranges: 0-50 (good), 51-100 (moderate), 101-150 (unhealthy for sensitive groups), 151-200 (unhealthy), 201-300 (very unhealthy), 301-500 (hazardous). */
        us_aqi: number;
        /** Particulate matter with diameter less than 10 micrometers (μg/m³) measured at 10 meters above ground. */
        pm10: number;
        /** Particulate matter with diameter less than 2.5 micrometers (μg/m³) measured at 10 meters above ground. */
        pm2_5: number;
        /** Atmospheric carbon monoxide gas concentration (μg/m³) at 10 meters above ground. */
        carbon_monoxide: number;
        /** Atmospheric nitrogen dioxide gas concentration (μg/m³) at 10 meters above ground. */
        nitrogen_dioxide: number;
        /** Atmospheric sulphur dioxide gas concentration (μg/m³) at 10 meters above ground. */
        sulphur_dioxide: number;
        /** Atmospheric ozone gas concentration (μg/m³) at 10 meters above ground. */
        ozone: number;
        /** Saharan dust particle concentration (μg/m³) at 10 meters above ground. */
        dust: number;
        /** Ultraviolet radiation intensity index accounting for cloud coverage. */
        uv_index: number;
        /** Aerosol optical depth at 550 nm wavelength indicating atmospheric haze levels. */
        aerosol_optical_depth: number;
        /** Ultraviolet radiation intensity index assuming cloud-free conditions. */
        uv_index_clear_sky: number;
    }
    namespace Forecast {
        interface Value {
            /** Hourly air quality forecast data */
            hourly?: Value.Hourly.Item[] | undefined;
        }
        namespace Value {
            type Hourly = Hourly.Item[];
            namespace Hourly {
                interface Item {
                    /** ISO 8601 formatted timestamp */
                    timestamp?: string | undefined;
                    /** Concentration of particulate matter ≤10 micrometers (μg/m³) */
                    pm10?: number | undefined;
                    /** Concentration of carbon monoxide (μg/m³) */
                    carbon_monoxide?: number | undefined;
                    /** Concentration of particulate matter ≤2.5 micrometers (μg/m³) */
                    pm2_5?: number | undefined;
                    /** Concentration of carbon dioxide (ppm) */
                    carbon_dioxide?: number | undefined;
                    /** Concentration of nitrogen dioxide (μg/m³) */
                    nitrogen_dioxide?: number | undefined;
                    /** Concentration of sulphur dioxide (μg/m³) */
                    sulphur_dioxide?: number | undefined;
                    /** Concentration of ozone (μg/m³) */
                    ozone?: number | undefined;
                    /** Concentration of dust particles (μg/m³) */
                    dust?: number | undefined;
                    /** Ultraviolet radiation index */
                    uv_index?: number | undefined;
                    /** Aerosol optical depth */
                    aerosol_optical_depth?: number | undefined;
                    /** Ultraviolet radiation index under clear sky conditions */
                    uv_index_clear_sky?: number | undefined;
                }
            }
        }
    }
}
