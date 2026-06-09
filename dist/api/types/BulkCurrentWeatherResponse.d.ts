export interface BulkCurrentWeatherResponse {
    /** Array of weather data */
    bulk: BulkCurrentWeatherResponse.Bulk.Item[];
}
export declare namespace BulkCurrentWeatherResponse {
    type Bulk = Bulk.Item[];
    namespace Bulk {
        interface Item {
            /** Location information */
            location: Item.Location;
            /** Current weather data */
            current: Item.Current;
        }
        namespace Item {
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
             * Current weather data
             */
            interface Current {
                /** ISO 8601 formatted timestamp of the current weather observation. */
                timestamp: string;
                /** Current air temperature (°C) measured at 2 meters above ground. */
                temperature_2m: number;
                /** Current relative humidity percentage at 2 meters above ground. */
                relative_humidity_2m: number;
                /** Current apparent temperature (°C) accounting for wind chill and humidity. */
                apparent_temperature: number;
                /** Current snowfall accumulation in centimeters. */
                snowfall: number;
                /** Current rainfall accumulation in millimeters. */
                rain: number;
                /** Current shower precipitation in millimeters. */
                showers: number;
                /** Total precipitation (mm) including rain, showers, and snowfall. */
                precipitation: number;
                /** WMO weather condition code representing current conditions. Supported codes: 0 clear sky; 1, 2, 3 varying cloud cover; 45, 48 fog; 51, 53, 55 drizzle; 56, 57 freezing drizzle; 61, 63, 65 rain; 66, 67 freezing rain; 71, 73, 75 snowfall; 77 snow grains; 80, 81, 82 rain showers; 85, 86 snow showers; 95 thunderstorm; 96, 99 thunderstorm with hail. */
                weather_code: number;
                /** Current percentage of sky covered by clouds. */
                cloud_cover: number;
                /** Current atmospheric pressure (hPa) adjusted to mean sea level. */
                pressure_msl: number;
                /** Current atmospheric pressure (hPa) at surface level. */
                surface_pressure: number;
                /** Current wind speed (km/h) at 10 meters above ground. */
                wind_speed_10m: number;
                /** Current wind direction in degrees at 10 meters above ground. */
                wind_direction_10m: number;
                /** Current wind gust speed (km/h) at 10 meters above ground. */
                wind_gusts_10m: number;
                /** Astronomical information including sunrise, sunset, and moon phases for the current date. */
                astronomy: Current.Astronomy;
                /** Air quality metrics including pollutant concentrations and AQI values. */
                air_quality: Current.AirQuality;
            }
            namespace Current {
                /**
                 * Astronomical information including sunrise, sunset, and moon phases for the current date.
                 */
                interface Astronomy {
                    /** Calendar date in YYYY-MM-DD format for the astronomical data. */
                    date: string;
                    /** Time of true solar midnight in HH:MM format. */
                    mid_night: string;
                    /** Time when astronomical twilight ends and dawn begins in HH:MM format. */
                    night_end: string;
                    /** Time when the Sun becomes visible above the horizon in HH:MM format. */
                    sunrise: string;
                    /** Time when the Sun reaches its highest point in the sky in HH:MM format. */
                    solar_noon: string;
                    /** Time when the Sun disappears below the horizon in HH:MM format. */
                    sunset: string;
                    /** Time when astronomical twilight begins and night starts in HH:MM format. */
                    night_begin: string;
                    /** Total duration of daylight in HH:MM format. */
                    day_length: string;
                    /** Current position of the Sun relative to the horizon (above_horizon, below_horizon, or -). */
                    sun_status: string;
                    /** Current lunar phase (NEW_MOON, WAXING_CRESCENT, FULL_MOON, WANING_GIBBOUS, etc.). */
                    moon_phase: string;
                    /** Time when the Moon becomes visible above the horizon in HH:MM format. */
                    moonrise: string;
                    /** Time when the Moon disappears below the horizon in HH:MM format. */
                    moonset: string;
                    /** Current visibility status of the Moon (visible, not_visible, or -). */
                    moon_status: string;
                }
                /**
                 * Air quality metrics including pollutant concentrations and AQI values.
                 */
                interface AirQuality {
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
            }
        }
    }
}
