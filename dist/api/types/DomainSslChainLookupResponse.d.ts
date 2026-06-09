export interface DomainSslChainLookupResponse {
    domainName: string;
    queryTime: string;
    sslCertificates: DomainSslChainLookupResponse.SslCertificates.Item[];
    sslRaw?: string | undefined;
}
export declare namespace DomainSslChainLookupResponse {
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
                extendedKeyUsages: string[];
                crlDistributionPoints?: string[] | undefined;
                authorityInfoAccess: Extensions.AuthorityInfoAccess;
                subjectAlternativeNames?: Extensions.SubjectAlternativeNames | undefined;
                certificatePolicies: Extensions.CertificatePolicies;
            }
            namespace Extensions {
                interface AuthorityInfoAccess {
                    issuers: string[];
                    ocsp: string[];
                }
                interface SubjectAlternativeNames {
                    dnsNames?: string[] | undefined;
                    emailAddresses?: string[] | undefined;
                    ipAddresses?: string[] | undefined;
                    uris?: string[] | undefined;
                }
                interface CertificatePolicies {
                    policyId: string;
                    policyQualifier?: CertificatePolicies.PolicyQualifier | undefined;
                }
                namespace CertificatePolicies {
                    interface PolicyQualifier {
                        oid?: string | undefined;
                        cpsUri?: string | undefined;
                        userNotice?: PolicyQualifier.UserNotice | undefined;
                    }
                    namespace PolicyQualifier {
                        interface UserNotice {
                            explicitText?: string | undefined;
                            noticeRef?: UserNotice.NoticeRef | undefined;
                        }
                        namespace UserNotice {
                            interface NoticeRef {
                                organization?: string | undefined;
                                noticeNumbers?: string | undefined;
                            }
                        }
                    }
                }
            }
        }
    }
}
