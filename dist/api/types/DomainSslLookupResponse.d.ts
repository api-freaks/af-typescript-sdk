export interface DomainSslLookupResponse {
    domainName: string;
    /** Timestamp when the query was executed (format YYYY-MM-DD HH:mm:ss, not ISO 8601). */
    queryTime: string;
    sslCertificates: DomainSslLookupResponse.SslCertificates.Item[];
    sslRaw?: string | undefined;
}
export declare namespace DomainSslLookupResponse {
    type SslCertificates = SslCertificates.Item[];
    namespace SslCertificates {
        interface Item {
            chainOrder: string;
            authenticationType: string;
            validityStartDate: string;
            validityEndDate: string;
            serialNumber: string;
            signatureAlgorithm: string;
            subject: Item.Subject;
            issuer: Item.Issuer;
            publicKey: Item.PublicKey;
            extensions: Item.Extensions;
            /** Raw certificate in PEM format */
            pemRaw?: string | undefined;
        }
        namespace Item {
            interface Subject {
                commonName: string;
                organization?: string | undefined;
                organizationalUnit?: string | undefined;
                locality?: string | undefined;
                state?: string | undefined;
                country?: string | undefined;
                incCountry?: string | undefined;
                incState?: string | undefined;
                businessCategory?: string | undefined;
                street?: string | undefined;
                postalCode?: string | undefined;
                serialNumber?: string | undefined;
            }
            interface Issuer {
                commonName: string;
                organization?: string | undefined;
                organizationalUnit?: string | undefined;
                locality?: string | undefined;
                state?: string | undefined;
                country?: string | undefined;
                incCountry?: string | undefined;
                incState?: string | undefined;
                businessCategory?: string | undefined;
                street?: string | undefined;
                postalCode?: string | undefined;
                serialNumber?: string | undefined;
            }
            interface PublicKey {
                keySize: string;
                keyAlgorithm: string;
                pemRaw: string;
            }
            interface Extensions {
                authorityKeyIdentifier: string;
                subjectKeyIdentifier: string;
                keyUsages: string[];
                extendedKeyUsages?: string[] | undefined;
                crlDistributionPoints?: string[] | undefined;
                authorityInfoAccess?: Extensions.AuthorityInfoAccess | undefined;
                subjectAlternativeNames?: Extensions.SubjectAlternativeNames | undefined;
                certificatePolicies?: Extensions.CertificatePolicies.Item[] | undefined;
            }
            namespace Extensions {
                interface AuthorityInfoAccess {
                    issuers?: string[] | undefined;
                    ocsp?: string[] | undefined;
                }
                interface SubjectAlternativeNames {
                    dnsNames?: string[] | undefined;
                    emailAddresses?: string[] | undefined;
                    ipAddresses?: string[] | undefined;
                    uris?: string[] | undefined;
                }
                type CertificatePolicies = CertificatePolicies.Item[];
                namespace CertificatePolicies {
                    interface Item {
                        /** Policy identifier */
                        policyId: string;
                        /** Policy qualifier details */
                        policyQualifier?: Item.PolicyQualifier | undefined;
                    }
                    namespace Item {
                        /**
                         * Policy qualifier details
                         */
                        interface PolicyQualifier {
                            /** Object identifier */
                            oid?: string | undefined;
                            /** URI of the CPS */
                            cpsUri?: string | undefined;
                            userNotice?: PolicyQualifier.UserNotice | undefined;
                        }
                        namespace PolicyQualifier {
                            interface UserNotice {
                                /** Explicit text notice */
                                explicitText?: string | undefined;
                                noticeRef?: UserNotice.NoticeRef | undefined;
                            }
                            namespace UserNotice {
                                interface NoticeRef {
                                    /** Organization providing the notice */
                                    organization?: string | undefined;
                                    /** Notice numbers */
                                    noticeNumbers?: string | undefined;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
