export interface GrammarDetectResponse {
    /** List of words flagged as grammatically incorrect */
    grammar_errors: GrammarDetectResponse.GrammarErrors.Item[];
}
export declare namespace GrammarDetectResponse {
    type GrammarErrors = GrammarErrors.Item[];
    namespace GrammarErrors {
        interface Item {
            /** The flagged word */
            word: string;
            /** Zero-based word position in the input text */
            offset: number;
        }
    }
}
