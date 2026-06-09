export declare const CurrentWeatherRequestFormat: {
    readonly Json: "json";
    readonly Xml: "xml";
};
export type CurrentWeatherRequestFormat = (typeof CurrentWeatherRequestFormat)[keyof typeof CurrentWeatherRequestFormat];
