export interface IbanValidateResponse {
    /** Determines whether IBAN passes all validation checks */
    valid: boolean;
    /** The IBAN number provided by the user. */
    iban: string;
    /** Object contains IBAN validation details. */
    validation: IbanValidateResponse.Validation;
    /** Object contains Bank and BIC details. */
    bank_data: IbanValidateResponse.BankData;
}
export declare namespace IbanValidateResponse {
    /**
     * Object contains IBAN validation details.
     */
    interface Validation {
        /** Checks if provided IBAN contains only alpha numeric characters */
        is_alpha_numeric: boolean;
        /** Checks whether given IBAN country supports IBAN standards */
        is_iban_supported_country: boolean;
        /** Indicates whether IBAN length is according to respective country standard or not. */
        is_valid_length: boolean;
        /** Indicates whether IBAN structure is valid as per structure pattern for respective country. */
        is_valid_structure: boolean;
        /** Indicates whether IBAN check digit is valid. */
        is_iban_check_digit_valid: boolean;
        /** Indicates BBAN checksum is valid or invalid or not supported (unknown) for respective IBAN country. */
        bban?: string | undefined;
    }
    /**
     * Object contains Bank and BIC details.
     */
    interface BankData {
        /** SWIFT/BIC code extracted from IBAN for some countries. */
        bic?: string | undefined;
        /** Bank name extracted from IBAN for some countries. */
        bank?: string | undefined;
        /** Bank code extracted from IBAN for some countries. */
        bank_code?: string | undefined;
        /** Branch code extracted from IBAN for some countries. */
        branch_code?: string | undefined;
        /** Country name extracted from IBAN. */
        country: string;
        /** Alpha-2 standard country code extracted from IBAN. */
        country_iso2: string;
        /** City / branch name for respective bank extracted from IBAN for some countries. */
        city?: string | undefined;
        /** Bank branch address extracted from IBAN */
        address?: string | undefined;
        /** Account number extracted from IBAN */
        account?: string | undefined;
        /** Indicates whether given IBAN country supports Single Euro Payments Area (SEPA) */
        sepa: boolean;
    }
}
