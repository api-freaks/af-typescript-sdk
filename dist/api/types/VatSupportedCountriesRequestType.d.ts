export declare const VatSupportedCountriesRequestType: {
    readonly Iban: "IBAN";
    readonly Swift: "SWIFT";
    readonly Vat: "VAT";
};
export type VatSupportedCountriesRequestType = (typeof VatSupportedCountriesRequestType)[keyof typeof VatSupportedCountriesRequestType];
