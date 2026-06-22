export interface ZipcodeLookupResponse {
    results?: ZipcodeLookupResponse.Results.Item[] | undefined;
}
export declare namespace ZipcodeLookupResponse {
    type Results = Results.Item[];
    namespace Results {
        interface Item {
            code?: string | undefined;
            country_code?: string | undefined;
            region?: string | undefined;
            city?: string | undefined;
            locality?: string | undefined;
            latitude?: number | undefined;
            longitude?: number | undefined;
        }
    }
}
