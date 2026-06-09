export declare const WeatherForecastRequestPrecision: {
    readonly Daily: "daily";
    readonly Hourly: "hourly";
    readonly Minutely: "minutely";
};
export type WeatherForecastRequestPrecision = (typeof WeatherForecastRequestPrecision)[keyof typeof WeatherForecastRequestPrecision];
