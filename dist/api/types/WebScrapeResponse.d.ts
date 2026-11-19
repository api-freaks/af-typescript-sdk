/**
 * The API returns an empty object `{}` when no extract instruction matched anything.
 */
export interface WebScrapeResponse {
    /** Extracted data based on the extract instructions. Absent when nothing was extracted. */
    extractedData?: Record<string, unknown> | undefined;
}
