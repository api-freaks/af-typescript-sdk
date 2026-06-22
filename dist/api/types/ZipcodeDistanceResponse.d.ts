export interface ZipcodeDistanceResponse {
    /** Number of distance results returned */
    result_count?: number | undefined;
    results?: ZipcodeDistanceResponse.Results.Item[] | undefined;
}
export declare namespace ZipcodeDistanceResponse {
    type Results = Results.Item[];
    namespace Results {
        interface Item {
            /** ZIP/postal code */
            code?: string | undefined;
            /** Distance from the base ZIP/postal code */
            distance?: number | undefined;
        }
    }
}
