export interface VatRateByIpResponseItem {
    country: string;
    type: string;
    currency: string;
    standard_rate: number;
    reduced_rate?: number[] | undefined;
    /** Optional super-reduced VAT rates applicable in specific categories. */
    super_reduced_rate?: number[] | undefined;
    parking_rate?: number | undefined;
    categories?: Record<string, number> | undefined;
    /** State or region resolved from the IP address, for countries with sub-national tax rates (e.g. US). Only present when applicable. */
    state?: string | undefined;
}
