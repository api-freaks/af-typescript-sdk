export interface ZipcodeSearchByCityResponse {
    /** Total number of ZIP/postal codes found */
    total_results?: number | undefined;
    /** Total number of pages available */
    total_pages?: number | undefined;
    /** Current page number */
    current_page?: number | undefined;
    /** Number of ZIP/postal codes in the current page */
    current_page_size?: number | undefined;
    /** List of ZIP/postal codes */
    codes?: string[] | undefined;
}
