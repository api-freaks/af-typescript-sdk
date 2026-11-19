/**
 * Result of a PDF generation request, containing the hosted URL of the generated PDF.
 */
export interface BulkPdfGenerateFromTemplateResponseItem {
    /** The template that was rendered. */
    template_id: string;
    /** Hosted URL of the generated PDF. */
    pdf_url: string;
    /** When the PDF was generated (ISO 8601). */
    created_at: string;
    /** When the hosted PDF expires (ISO 8601). */
    expiration_time: string;
}
