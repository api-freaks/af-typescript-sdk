export interface ZipcodeSearchByRadiusResponse {
    /** Total number of ZIP/postal codes found within the radius */
    total_results?: number | undefined;
    /** Total number of pages available */
    total_pages?: number | undefined;
    /** Current page number */
    current_page?: number | undefined;
    /** Number of ZIP/postal codes in the current page */
    current_page_size?: number | undefined;
    results?: ZipcodeSearchByRadiusResponse.Results.Item[] | undefined;
}
export declare namespace ZipcodeSearchByRadiusResponse {
    type Results = Results.Item[];
    namespace Results {
        interface Item {
            code?: string | undefined;
            region?: string | undefined;
            region_code?: string | undefined;
            city?: string | undefined;
            district?: string | undefined;
            distance?: number | undefined;
        }
    }
}
