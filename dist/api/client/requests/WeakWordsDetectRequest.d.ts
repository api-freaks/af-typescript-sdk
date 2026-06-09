/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         text: "Many people cannot get the support they need to handle their conditions well."
 *     }
 */
export interface WeakWordsDetectRequest {
    /** Your API key */
    apiKey: string;
    /** Text to analyze for weak words */
    text: string;
}
