export interface SwiftCodeLookupResponse {
    swiftCode: string;
    countryCode: string;
    bankAddress: string;
    bankCode: string;
    bankName: string;
    city: string;
    country: string;
    /** Name of the branch or office. Null when not resolvable. */
    branchName?: (string | null) | undefined;
    /** Type of institution: "FIIN" (financial institution) or "NFIN" (non-financial institution). */
    institType?: string | undefined;
    /** Postal/ZIP code of the bank branch. Null when not resolvable. */
    postalCode?: (string | null) | undefined;
}
