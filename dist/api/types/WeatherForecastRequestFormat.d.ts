export declare const WeatherForecastRequestFormat: {
    readonly Json: "json";
    readonly Xml: "xml";
};
export type WeatherForecastRequestFormat = (typeof WeatherForecastRequestFormat)[keyof typeof WeatherForecastRequestFormat];
