/**
 * Full domain reputation assessment response.
 */
export interface DomainReputationResponse {
    /** Input object containing the analyzed domain. */
    input: DomainReputationResponse.Input;
    /** Timestamp when the assessment was performed (YYYY-MM-DDTHH:mm:ssZ). */
    assessed_at: string;
    /** API / response schema version. */
    version: string;
    /** Time taken to process the request, in milliseconds. */
    processing_time_ms: number;
    /** Overall risk assessment for the domain. */
    risk_category: DomainReputationResponse.RiskCategory;
    /** Domain Generation Algorithm (DGA) detection results. */
    dga_score: DomainReputationResponse.DgaScore;
    /** Trust scoring and supporting signals for the domain. */
    trust_signals: DomainReputationResponse.TrustSignals;
    /** Assessment of the domain's ability to send and receive email reliably. */
    email_deliverability: DomainReputationResponse.EmailDeliverability;
    /** Threat intelligence details for the indicator of compromise (IOC). */
    intelligence: DomainReputationResponse.Intelligence;
    /** Summary of reasons behind the risk assessment. */
    evidence_summary: DomainReputationResponse.EvidenceSummary;
    /** List of errors encountered during processing, if any (e.g. "WHOIS lookup failed"). An empty array means every signal resolved. */
    errors: string[];
    /** Backlink profile of the domain. */
    backlinks?: DomainReputationResponse.Backlinks | undefined;
    /** Current registration status of the domain. */
    registration?: DomainReputationResponse.Registration | undefined;
}
export declare namespace DomainReputationResponse {
    /**
     * Input object containing the analyzed domain.
     */
    interface Input {
        /** Domain name being analyzed. */
        domain: string;
    }
    /**
     * Overall risk assessment for the domain.
     */
    interface RiskCategory {
        /** Final verdict of the risk assessment. `unknown` is returned when there is not enough data (e.g. the domain is not registered). */
        verdict: RiskCategory.Verdict;
        /** Confidence score for the verdict (0-1). */
        confidence: number;
        /** Main threat type identified (e.g. phishing). null when no threat was identified. */
        primary_threat: string | null;
        /** Severity level of the risk. */
        severity: RiskCategory.Severity;
        /** List of threat types associated with the domain. */
        threat_types: string[];
        /** Threat intelligence sources that flagged the domain. Empty when nothing flagged it. */
        sources: RiskCategory.Sources.Item[];
        /** Related pivots (nameserver, email, etc.) linked to known threats. */
        pivot_matches: RiskCategory.PivotMatches.Item[];
    }
    namespace RiskCategory {
        /** Final verdict of the risk assessment. `unknown` is returned when there is not enough data (e.g. the domain is not registered). */
        const Verdict: {
            readonly Safe: "safe";
            readonly Suspicious: "suspicious";
            readonly Unknown: "unknown";
        };
        type Verdict = (typeof Verdict)[keyof typeof Verdict];
        /** Severity level of the risk. */
        const Severity: {
            readonly None: "none";
            readonly Low: "low";
            readonly Medium: "medium";
            readonly High: "high";
        };
        type Severity = (typeof Severity)[keyof typeof Severity];
        type Sources = Sources.Item[];
        namespace Sources {
            /**
             * A threat intelligence source that flagged the domain.
             */
            interface Item {
                /** Name of the threat intelligence source (e.g. Spamhaus). */
                source: string;
                /** Indicator matched by this source. */
                indicator: string;
                /** Threat type reported by this source. */
                threat_type: string;
                /** Confidence score from this source (0-1). */
                confidence: number;
                /** First time this indicator was seen by the source (YYYY-MM-DDTHH:mm:ssZ). */
                first_seen: string;
                /** Last time this indicator was seen by the source (YYYY-MM-DDTHH:mm:ssZ). */
                last_seen: string;
            }
        }
        type PivotMatches = PivotMatches.Item[];
        namespace PivotMatches {
            /**
             * A related pivot linked to known threats.
             */
            interface Item {
                /** Pivot value (e.g. a nameserver or email address). */
                pivot: string;
                /** Type of pivot. */
                pivot_type: string;
                /** Total number of threats related to this pivot. */
                total_related_threats: number;
                /** Confidence score for the pivot match (0-1). */
                confidence: number;
            }
        }
    }
    /**
     * Domain Generation Algorithm (DGA) detection results.
     */
    interface DgaScore {
        /** DGA likelihood score (0-1). */
        score: number;
        /** Indicates whether the domain is likely DGA-generated. */
        is_dga: boolean;
        /** Model used to compute the DGA score. */
        model: string;
        /** Underlying lexical / statistical features used in DGA detection. */
        features: DgaScore.Features;
        /** Human-readable interpretation of the DGA score. */
        interpretation: string;
    }
    namespace DgaScore {
        /**
         * Underlying lexical / statistical features used in DGA detection.
         */
        interface Features {
            /** Length of the domain name. */
            domain_length: number;
            /** Ratio of vowels to consonants in the domain. */
            vowel_consonant_ratio: number;
            /** N-gram perplexity score of the domain string. */
            ngram_perplexity: number;
            /** Shannon entropy of the domain string. */
            shannon_entropy: number;
            /** Ratio of digits to letters in the domain. */
            digit_letter_ratio: number;
            /** Maximum consecutive consonant streak in the domain. */
            consonant_streak_max: number;
            /** Indicates if the TLD belongs to a known DGA set. */
            tld_in_known_dga_set: boolean;
        }
    }
    /**
     * Trust scoring and supporting signals for the domain.
     */
    interface TrustSignals {
        /** Overall trust score (0-100). */
        trust_score: number;
        /** Trust score band / category (e.g. low, medium, high). */
        trust_band: string;
        /** Signals contributing to the trust score. */
        signals: TrustSignals.Signals;
        /** Individual trust / risk indicators for the domain. */
        indicators: TrustSignals.Indicators;
    }
    namespace TrustSignals {
        /**
         * Signals contributing to the trust score.
         */
        interface Signals {
            /** Signals that positively affect the trust score. */
            positive: Signals.Positive.Item[];
            /** Signals that negatively affect the trust score. */
            negative: Signals.Negative.Item[];
            /** Signals that are neutral to the trust score. */
            neutral: Signals.Neutral.Item[];
        }
        namespace Signals {
            type Positive = Positive.Item[];
            namespace Positive {
                /**
                 * A single trust signal contributing to the trust score.
                 */
                interface Item {
                    /** Signal code identifier (e.g. valid_ssl, dmarc_missing). */
                    code: string;
                    /** Weight assigned to the signal. */
                    weight: number;
                    /** Polarity of the signal. */
                    polarity: Item.Polarity;
                    /** Category the signal belongs to (e.g. ssl_certificate). */
                    category: string;
                    /** Evidence supporting the signal. */
                    evidence: string;
                    /** Confidence score for the signal (0-1). */
                    confidence: number;
                }
                namespace Item {
                    /** Polarity of the signal. */
                    const Polarity: {
                        readonly Positive: "positive";
                        readonly Negative: "negative";
                        readonly Neutral: "neutral";
                    };
                    type Polarity = (typeof Polarity)[keyof typeof Polarity];
                }
            }
            type Negative = Negative.Item[];
            namespace Negative {
                /**
                 * A single trust signal contributing to the trust score.
                 */
                interface Item {
                    /** Signal code identifier (e.g. valid_ssl, dmarc_missing). */
                    code: string;
                    /** Weight assigned to the signal. */
                    weight: number;
                    /** Polarity of the signal. */
                    polarity: Item.Polarity;
                    /** Category the signal belongs to (e.g. ssl_certificate). */
                    category: string;
                    /** Evidence supporting the signal. */
                    evidence: string;
                    /** Confidence score for the signal (0-1). */
                    confidence: number;
                }
                namespace Item {
                    /** Polarity of the signal. */
                    const Polarity: {
                        readonly Positive: "positive";
                        readonly Negative: "negative";
                        readonly Neutral: "neutral";
                    };
                    type Polarity = (typeof Polarity)[keyof typeof Polarity];
                }
            }
            type Neutral = Neutral.Item[];
            namespace Neutral {
                /**
                 * A single trust signal contributing to the trust score.
                 */
                interface Item {
                    /** Signal code identifier (e.g. valid_ssl, dmarc_missing). */
                    code: string;
                    /** Weight assigned to the signal. */
                    weight: number;
                    /** Polarity of the signal. */
                    polarity: Item.Polarity;
                    /** Category the signal belongs to (e.g. ssl_certificate). */
                    category: string;
                    /** Evidence supporting the signal. */
                    evidence: string;
                    /** Confidence score for the signal (0-1). */
                    confidence: number;
                }
                namespace Item {
                    /** Polarity of the signal. */
                    const Polarity: {
                        readonly Positive: "positive";
                        readonly Negative: "negative";
                        readonly Neutral: "neutral";
                    };
                    type Polarity = (typeof Polarity)[keyof typeof Polarity];
                }
            }
        }
        /**
         * Individual trust / risk indicators for the domain.
         */
        interface Indicators {
            /** Indicates whether the domain was recently registered. null when WHOIS data is unavailable. */
            is_newly_registered?: (boolean | null) | undefined;
            /** Indicates whether the domain uses a free TLD extension. */
            uses_free_extension?: boolean | undefined;
            /** Indicates whether the domain uses a free SSL certificate. */
            uses_free_ssl?: (boolean | null) | undefined;
            /** Indicates whether WHOIS privacy protection is enabled. null when WHOIS data is unavailable. */
            has_privacy_whois?: (boolean | null) | undefined;
            /** Age of the SSL certificate in days. */
            ssl_age_days?: (number | null) | undefined;
            /** Indicates whether a DMARC record exists. */
            has_dmarc?: (boolean | null) | undefined;
            /** Indicates whether an SPF record exists. */
            has_spf?: (boolean | null) | undefined;
            /** Indicates whether the domain redirects to an external site. */
            redirects_externally?: boolean | undefined;
            /** Indicates whether obfuscated JavaScript was detected. */
            javascript_obfuscated?: boolean | undefined;
            /** Age of the domain in days. null when WHOIS data is unavailable. */
            domain_age_days?: (number | null) | undefined;
            /** Domain registrar name. null when WHOIS data is unavailable. */
            registrar?: (string | null) | undefined;
        }
    }
    /**
     * Assessment of the domain's ability to send and receive email reliably.
     */
    interface EmailDeliverability {
        /** Overall email deliverability score out of 100. */
        score: number;
        /** Letter / word grade summarizing the deliverability score. */
        grade: string;
        /** Indicates whether the domain is configured to receive email. */
        can_receive_email: boolean;
        /** Email authentication mechanisms configured for the domain. */
        authentication: EmailDeliverability.Authentication;
        /** Mail server infrastructure backing the domain. */
        infrastructure: EmailDeliverability.Infrastructure;
        /** Reputation and trust signals related to the domain's email sending history. */
        reputation: EmailDeliverability.Reputation;
        /** List of detected email deliverability issues or misconfigurations. */
        issues: EmailDeliverability.Issues.Item[];
    }
    namespace EmailDeliverability {
        /**
         * Email authentication mechanisms configured for the domain.
         */
        interface Authentication {
            /** Sender Policy Framework configuration. */
            spf: Authentication.Spf;
            /** DomainKeys Identified Mail configuration. */
            dkim: Authentication.Dkim;
            /** Domain-based Message Authentication, Reporting and Conformance configuration. */
            dmarc: Authentication.Dmarc;
        }
        namespace Authentication {
            /**
             * Sender Policy Framework configuration.
             */
            interface Spf {
                /** Indicates whether an SPF record was found. */
                present: boolean;
                /** SPF enforcement policy qualifier found in the record (e.g. ~all, -all). */
                policy: string | null;
                /** Raw SPF DNS TXT record string. */
                record: string | null;
            }
            /**
             * DomainKeys Identified Mail configuration.
             */
            interface Dkim {
                /** Indicates whether a DKIM record was found for any probed selector. */
                found: boolean;
                /** List of DKIM selectors for which a record was found. */
                selectors_found: string[];
                /** Email service providers inferred from the matched DKIM selectors. */
                providers_detected: string[];
                /** Clarifying note about the limitations of DKIM selector probing. */
                note: string;
            }
            /**
             * Domain-based Message Authentication, Reporting and Conformance configuration.
             */
            interface Dmarc {
                /** Indicates whether a DMARC record was found. */
                present: boolean;
                /** DMARC enforcement policy applied to failing messages (e.g. none, quarantine, reject). */
                policy: string | null;
                /** Indicates whether DMARC aggregate / forensic reporting addresses are configured. */
                reporting_configured: boolean;
            }
        }
        /**
         * Mail server infrastructure backing the domain.
         */
        interface Infrastructure {
            /** Number of MX records found for the domain. */
            mx_count: number;
            /** List of mail exchange server hostnames for the domain. */
            mx_records: string[];
            /** Email hosting provider inferred from the MX records. */
            mx_provider: string | null;
            /** Indicates whether the domain explicitly declines email via a null MX record. */
            null_mx: boolean;
        }
        /**
         * Reputation and trust signals related to the domain's email sending history.
         */
        interface Reputation {
            /** Indicates whether the domain appears on known spam blacklists. */
            spam_blacklisted: boolean;
            /** Indicates whether the domain was registered recently. */
            newly_registered: boolean | null;
            /** Age of the domain in days since registration. */
            domain_age_days?: (number | null) | undefined;
        }
        type Issues = Issues.Item[];
        namespace Issues {
            /**
             * A detected email deliverability issue or misconfiguration.
             */
            interface Item {
                /** Machine-readable code identifying the specific deliverability issue. */
                code?: string | undefined;
                /** Severity level assigned to the detected issue. */
                severity?: string | undefined;
                /** Human-readable explanation of the issue. */
                message?: string | undefined;
                /** Plain-language description of the exact fix to apply. */
                recommendation?: string | undefined;
            }
        }
    }
    /**
     * Threat intelligence details for the indicator of compromise (IOC).
     */
    interface Intelligence {
        /** Type of the indicator of compromise (e.g. domain). */
        ioc_type: string;
        /** Value of the indicator of compromise. */
        ioc_value: string;
        /** Other IOCs related to this domain. */
        related_iocs: Intelligence.RelatedIocs.Item[];
        /** Tags associated with this IOC from threat feeds. */
        feed_tags: string[];
        /** STIX 2.1 pattern representation of the IOC, ready to wrap into an Indicator object. */
        stix_pattern: string;
        /** Recommended action based on the assessment. */
        recommended_action: Intelligence.RecommendedAction;
        /** First time this IOC was observed (YYYY-MM-DDTHH:mm:ssZ). null when never observed on a feed. */
        first_seen: string | null;
        /** Last time this IOC was observed (YYYY-MM-DDTHH:mm:ssZ). null when never observed on a feed. */
        last_seen: string | null;
    }
    namespace Intelligence {
        type RelatedIocs = RelatedIocs.Item[];
        namespace RelatedIocs {
            /**
             * A related indicator of compromise.
             */
            interface Item {
                /** Type of the related IOC (e.g. ipv4, ipv6). */
                type: string;
                /** Value of the related IOC. */
                value: string;
                /** Confidence score for the related IOC (0-1). */
                confidence: number;
            }
        }
        /** Recommended action based on the assessment. */
        const RecommendedAction: {
            readonly Allow: "allow";
            readonly Monitor: "monitor";
            readonly Block: "block";
        };
        type RecommendedAction = (typeof RecommendedAction)[keyof typeof RecommendedAction];
    }
    /**
     * Summary of reasons behind the risk assessment.
     */
    interface EvidenceSummary {
        /** List of reasons why the domain was flagged. Empty for a clean domain. */
        why_flagged: string[];
    }
    /**
     * Backlink profile of the domain.
     */
    interface Backlinks {
        /** true if backlink data exists for the domain. When false, the other fields are null. */
        found: boolean;
        /** Domain the backlink data was matched to (for example `google.com`). null when no data was found. */
        matched_domain?: (string | null) | undefined;
        /** Total number of backlinks pointing to the domain (for example 174614443). null when no data was found. */
        backlink_count?: (number | null) | undefined;
        /** Number of distinct domains linking to the domain (for example 4336653). null when no data was found. */
        referring_domains?: (number | null) | undefined;
        /** Average number of backlinks per referring domain (backlink_count / referring_domains, for example 40.26). null when no data was found. */
        referrer_link_density?: (number | null) | undefined;
    }
    /**
     * Current registration status of the domain.
     */
    interface Registration {
        /** Registration status of the domain, for example `registered` or `not_registered`. */
        status: string;
        /** Number of earlier registrations found for the domain. Returned when the domain is not currently registered (for example `0`). */
        past_registrations?: number | undefined;
    }
}
