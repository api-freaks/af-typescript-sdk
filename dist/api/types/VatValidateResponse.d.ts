export interface VatValidateResponse {
    country_code: string;
    vat_number: string;
    requester_country_code: string;
    requester_vat_number: string;
    requested_at: string;
    validation: VatValidateResponse.Validation;
    company: VatValidateResponse.Company;
}
export declare namespace VatValidateResponse {
    interface Validation {
        is_valid: boolean;
        /** Returned when the upstream authority provides a consultation reference. */
        consultation_number?: string | undefined;
        consultation_authority: string;
    }
    interface Company {
        company_name: string;
        company_address: string;
    }
}
