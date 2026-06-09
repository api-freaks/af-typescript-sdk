export declare const ReadabilityScoreRequestTarget: {
    readonly General: "general";
    readonly Professional: "professional";
    readonly Academic: "academic";
    readonly Technical: "technical";
};
export type ReadabilityScoreRequestTarget = (typeof ReadabilityScoreRequestTarget)[keyof typeof ReadabilityScoreRequestTarget];
