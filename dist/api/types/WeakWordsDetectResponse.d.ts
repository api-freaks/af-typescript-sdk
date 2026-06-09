export interface WeakWordsDetectResponse {
    /** List of detected weak words */
    weak_words: WeakWordsDetectResponse.WeakWords.Item[];
}
export declare namespace WeakWordsDetectResponse {
    type WeakWords = WeakWords.Item[];
    namespace WeakWords {
        interface Item {
            /** The detected weak word */
            word: string;
            /** Zero-based word position in the input text */
            offset: number;
        }
    }
}
