export interface BulkEmailValidateResponse {
    /** Array of SingleEmailValidationResponse objects for bulk validation */
    emailValidationResponses?: BulkEmailValidateResponse.EmailValidationResponses.Item[] | undefined;
}
export declare namespace BulkEmailValidateResponse {
    type EmailValidationResponses = EmailValidationResponses.Item[];
    namespace EmailValidationResponses {
        interface Item {
            success: boolean;
            email: string;
            name?: string | undefined;
            reason?: string | undefined;
            validEmail: Item.ValidEmail;
            validSyntax: boolean;
            domain: Item.Domain;
            account: Item.Account;
            dns: Item.Dns;
            ipAddress?: string | undefined;
            address?: Item.Address | undefined;
        }
        namespace Item {
            const ValidEmail: {
                readonly Valid: "valid";
                readonly Invalid: "Invalid";
                readonly Unknown: "Unknown";
                readonly Risky: "Risky";
            };
            type ValidEmail = (typeof ValidEmail)[keyof typeof ValidEmail];
            interface Domain {
                name: string;
                disposable: boolean;
                spam: boolean;
                free: boolean;
                catchAll: boolean;
                validDomain: boolean;
            }
            interface Account {
                role: boolean;
                fullMailBox?: boolean | undefined;
            }
            interface Dns {
                mxRecords: string[];
                /** Collection of A (Address) records for the domain. */
                aRecords: string[];
            }
            interface Address {
                security?: Address.Security | undefined;
                location?: Address.Location | undefined;
                validIpAddress?: boolean | undefined;
            }
            namespace Address {
                interface Security {
                    threat_score: number;
                    is_tor: boolean;
                    is_proxy: boolean;
                    proxy_type: string;
                    proxy_provider: string;
                    is_anonymous: boolean;
                    is_known_attacker: boolean;
                    is_spam: boolean;
                    is_bot: boolean;
                    is_cloud_provider: boolean;
                    cloud_provider: string;
                }
                interface Location {
                    city?: string | undefined;
                    district?: string | undefined;
                    confidence?: string | undefined;
                    zipcode?: string | undefined;
                    state_prov?: string | undefined;
                    country_name?: string | undefined;
                    continent_name?: string | undefined;
                    continent_code?: string | undefined;
                    country_code2?: string | undefined;
                    country_code3?: string | undefined;
                    country_name_official?: string | undefined;
                    accuracy_radius?: string | undefined;
                    is_eu?: boolean | undefined;
                }
            }
        }
    }
}
