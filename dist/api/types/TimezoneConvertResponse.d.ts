export interface TimezoneConvertResponse {
    /** Original time before conversion */
    original_time: string;
    /** Time after conversion */
    converted_time: string;
    /** Difference in hours */
    diff_hour: number;
    /** Difference in minutes */
    diff_min: number;
}
