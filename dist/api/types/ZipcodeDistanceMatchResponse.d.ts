export interface ZipcodeDistanceMatchResponse {
    /** Number of matching ZIP/postal code pairs returned */
    result_count?: number | undefined;
    results?: ZipcodeDistanceMatchResponse.Results.Item[] | undefined;
}
export declare namespace ZipcodeDistanceMatchResponse {
    type Results = Results.Item[];
    namespace Results {
        interface Item {
            /** First ZIP/postal code in the pair */
            code_1?: string | undefined;
            /** Second ZIP/postal code in the pair */
            code_2?: string | undefined;
            /** Distance between the ZIP/postal code pair */
            distance?: number | undefined;
        }
    }
}
