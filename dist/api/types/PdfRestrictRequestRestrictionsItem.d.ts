export declare const PdfRestrictRequestRestrictionsItem: {
    readonly PrintHigh: "print_high";
    readonly PrintLow: "print_low";
    readonly EditDocumentAssembly: "edit_document_assembly";
    readonly FillFormFields: "fill_form_fields";
    readonly EditAnnotations: "edit_annotations";
    readonly ModifyContent: "modify_content";
    readonly CopyAndExtractContent: "copy_and_extract_content";
    readonly UseAccessibility: "use_accessibility";
};
export type PdfRestrictRequestRestrictionsItem = (typeof PdfRestrictRequestRestrictionsItem)[keyof typeof PdfRestrictRequestRestrictionsItem];
