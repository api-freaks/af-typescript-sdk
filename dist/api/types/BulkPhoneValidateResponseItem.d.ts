export interface BulkPhoneValidateResponseItem {
    /** The original request data provided by the client. */
    raw_input?: BulkPhoneValidateResponseItem.RawInput | undefined;
    /** Whether the number passes length and format checks. */
    possible?: boolean | undefined;
    /** Whether the number is valid according to the numbering plan. */
    valid?: boolean | undefined;
    /** International dialing prefix for the number's country. */
    country_prefix?: number | undefined;
    /** National significant number without the country code. */
    national_number?: number | undefined;
    /** ISO-2 country code inferred from the number. */
    country_code?: string | undefined;
    /** Carrier name associated with the number. */
    carrier?: string | undefined;
    /** Geographic description (city/region) for the number. */
    location?: string | undefined;
    /** Array of possible IANA time zones associated with the number. */
    time_zones?: string[] | undefined;
    /** Classification of the phone line. */
    line_type?: BulkPhoneValidateResponseItem.LineType | undefined;
    /** The number represented in four standardized formats. Only returned for valid numbers. */
    formats?: BulkPhoneValidateResponseItem.Formats | undefined;
    /** Length of the geographic area code. Only for geographically-assigned numbers. */
    area_code_length?: number | undefined;
    /** Length of the National Destination Code. */
    ndc_length?: number | undefined;
    /** Whether the number can be dialled internationally. */
    can_be_internationally_dialled?: boolean | undefined;
}
export declare namespace BulkPhoneValidateResponseItem {
    /**
     * The original request data provided by the client.
     */
    interface RawInput {
        /** The phone number as entered by the user. */
        number?: string | undefined;
        /** ISO-2 country code if provided in the request. */
        region?: string | undefined;
        /** ISO-2 dialing origin country code if provided. */
        dialer_region?: string | undefined;
    }
    /** Classification of the phone line. */
    const LineType: {
        readonly Mobile: "MOBILE";
        readonly FixedLine: "FIXED_LINE";
        readonly FixedLineOrMobile: "FIXED_LINE_OR_MOBILE";
        readonly Voip: "VOIP";
        readonly TollFree: "TOLL_FREE";
        readonly PremiumRate: "PREMIUM_RATE";
        readonly SharedCost: "SHARED_COST";
        readonly PersonalNumber: "PERSONAL_NUMBER";
        readonly Pager: "PAGER";
        readonly Uan: "UAN";
        readonly Voicemail: "VOICEMAIL";
        readonly Unknown: "UNKNOWN";
    };
    type LineType = (typeof LineType)[keyof typeof LineType];
    /**
     * The number represented in four standardized formats. Only returned for valid numbers.
     */
    interface Formats {
        /** E.164 format for storage and APIs. */
        E164?: string | undefined;
        /** Human-readable international format. */
        International?: string | undefined;
        /** Local format as dialed within the country. */
        National?: string | undefined;
        /** URI format for tel: links. */
        RFC3966?: string | undefined;
    }
}
