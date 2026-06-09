export interface ReadabilityScoreResponse {
    /** Standard readability formula scores, keyed by metric name. Metrics that cannot be computed for the supplied text are omitted. */
    readability_scores?: ReadabilityScoreResponse.ReadabilityScores | undefined;
    /** Per-sentence readability breakdown */
    sentence_readability?: ReadabilityScoreResponse.SentenceReadability.Item[] | undefined;
    /** Overall readability grade, calculated as the average of sentence readability scores */
    readability_grade?: number | undefined;
}
export declare namespace ReadabilityScoreResponse {
    /**
     * Standard readability formula scores, keyed by metric name. Metrics that cannot be computed for the supplied text are omitted.
     */
    interface ReadabilityScores {
        /** Flesch Reading Ease */
        flesch_reading_ease?: ReadabilityScores.FleschReadingEase | undefined;
        /** Flesch-Kincaid Grade Level */
        flesch_kincaid_grade?: ReadabilityScores.FleschKincaidGrade | undefined;
        /** Gunning Fog Index */
        gunning_fog?: ReadabilityScores.GunningFog | undefined;
        /** SMOG Index */
        smog_index?: ReadabilityScores.SmogIndex | undefined;
        /** Coleman-Liau Index */
        coleman_liau_index?: ReadabilityScores.ColemanLiauIndex | undefined;
        /** Automated Readability Index (ARI) */
        automated_readability_index?: ReadabilityScores.AutomatedReadabilityIndex | undefined;
    }
    namespace ReadabilityScores {
        /**
         * Flesch Reading Ease
         */
        interface FleschReadingEase {
            /** The metric score */
            score?: number | undefined;
            /** Human-readable difficulty level for that metric */
            level?: string | undefined;
        }
        /**
         * Flesch-Kincaid Grade Level
         */
        interface FleschKincaidGrade {
            /** The metric score */
            score?: number | undefined;
            /** Human-readable difficulty level for that metric */
            level?: string | undefined;
        }
        /**
         * Gunning Fog Index
         */
        interface GunningFog {
            /** The metric score */
            score?: number | undefined;
            /** Human-readable difficulty level for that metric */
            level?: string | undefined;
        }
        /**
         * SMOG Index
         */
        interface SmogIndex {
            /** The metric score */
            score?: number | undefined;
            /** Human-readable difficulty level for that metric */
            level?: string | undefined;
        }
        /**
         * Coleman-Liau Index
         */
        interface ColemanLiauIndex {
            /** The metric score */
            score?: number | undefined;
            /** Human-readable difficulty level for that metric */
            level?: string | undefined;
        }
        /**
         * Automated Readability Index (ARI)
         */
        interface AutomatedReadabilityIndex {
            /** The metric score */
            score?: number | undefined;
            /** Human-readable difficulty level for that metric */
            level?: string | undefined;
        }
    }
    type SentenceReadability = SentenceReadability.Item[];
    namespace SentenceReadability {
        interface Item {
            /** The sentence text */
            sentence?: string | undefined;
            /** Readability grade for the sentence */
            readability_grade?: number | undefined;
            /** Difficulty level for the sentence based on the target audience */
            readability_level?: Item.ReadabilityLevel | undefined;
        }
        namespace Item {
            /** Difficulty level for the sentence based on the target audience */
            const ReadabilityLevel: {
                readonly VeryEasy: "Very Easy";
                readonly Easy: "Easy";
                readonly Medium: "Medium";
                readonly Hard: "Hard";
                readonly VeryHard: "Very Hard";
            };
            type ReadabilityLevel = (typeof ReadabilityLevel)[keyof typeof ReadabilityLevel];
        }
    }
}
