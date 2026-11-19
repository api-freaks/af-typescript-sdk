/**
 * Credit balances for the organization's subscription, subscription surcharge, and one-off purchases.
 */
export interface GetCreditsUsageResponse {
    /** The API key the credit balances belong to. */
    apiKey: string;
    /** Status of the user account. */
    userStatus: GetCreditsUsageResponse.UserStatus;
    /** Whether a subscription plan is currently active. Null if the account has no subscription. */
    subActive?: (boolean | null) | undefined;
    /** Status of the subscription credits. Null if the account has no subscription. */
    subStatus?: (GetCreditsUsageResponse.SubStatus | null) | undefined;
    /** Total credits allowed under the subscription plan. Null if the account has no subscription. */
    subAllowedCredits?: (number | null) | undefined;
    /** Credits consumed under the subscription plan. Null if the account has no subscription. */
    subUsedCredits?: (number | null) | undefined;
    /** Status of the subscription surcharge (overage) credits. Null if the account has no subscription. */
    subSurchargeStatus?: (GetCreditsUsageResponse.SubSurchargeStatus | null) | undefined;
    /** Total surcharge credits allowed. Null if the account has no subscription. */
    subSurchargeAllowedCredits?: (number | null) | undefined;
    /** Surcharge credits consumed. Null if the account has no subscription. */
    subSurchargeUsedCredits?: (number | null) | undefined;
    /** Whether surcharge (overage) usage is allowed on the subscription. Null if the account has no subscription. */
    subSurchargeAllowed?: (boolean | null) | undefined;
    /** Whether the account has active one-off (pay-as-you-go) credits. */
    oneOffCreditsActive: boolean;
    /** Total one-off credits purchased. */
    oneOffAllowedCredits: number;
    /** One-off credits consumed. */
    oneOffUsedCredits: number;
}
export declare namespace GetCreditsUsageResponse {
    /** Status of the user account. */
    const UserStatus: {
        readonly Active: "active";
        readonly Inactive: "inactive";
        readonly Deleted: "deleted";
    };
    type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
    /** Status of the subscription credits. Null if the account has no subscription. */
    const SubStatus: {
        readonly Active: "active";
        readonly Overdue: "overdue";
        readonly Cancelled: "cancelled";
        readonly Deactivated: "deactivated";
    };
    type SubStatus = (typeof SubStatus)[keyof typeof SubStatus];
    /** Status of the subscription surcharge (overage) credits. Null if the account has no subscription. */
    const SubSurchargeStatus: {
        readonly None: "none";
        readonly PaymentAdded: "payment_added";
        readonly PaymentCleared: "payment_cleared";
    };
    type SubSurchargeStatus = (typeof SubSurchargeStatus)[keyof typeof SubSurchargeStatus];
}
