export interface BulkDomainDnsLookupResponse {
    bulk_dns_info: BulkDomainDnsLookupResponse.BulkDnsInfo.Item[];
}
export declare namespace BulkDomainDnsLookupResponse {
    type BulkDnsInfo = BulkDnsInfo.Item[];
    namespace BulkDnsInfo {
        interface Item {
            /** Indicates whether the query was processed successfully. */
            status: boolean;
            /** Time at which the query was made (Format:YYYY-MM-DD HH:mm:ss). */
            queryTime: string;
            /** Queried domain. */
            domainName?: string | undefined;
            /** Indicates whether the domain is registered. */
            domainRegistered?: boolean | undefined;
            /** IP address associated with the record. */
            ipAddress?: string | undefined;
            dnsTypes: Item.DnsTypes;
            /** List of DNS records, each based on its type. */
            dnsRecords: Item.DnsRecords.Item[];
        }
        namespace Item {
            interface DnsTypes {
                A?: number | undefined;
                AAAA?: number | undefined;
                CNAME?: number | undefined;
                MX?: number | undefined;
                NS?: number | undefined;
                SOA?: number | undefined;
                TXT?: number | undefined;
                SPF?: number | undefined;
                PTR?: number | undefined;
            }
            type DnsRecords = DnsRecords.Item[];
            namespace DnsRecords {
                type Item = {
                    name: string;
                    type: number;
                    dnsType: "A" | "AAAA";
                    ttl: number;
                    rawText: string;
                    rRsetType: number;
                    address: string;
                } | {
                    name: string;
                    type: number;
                    dnsType: "CNAME";
                    ttl: number;
                    rawText: string;
                    rRsetType: number;
                    target: string;
                } | {
                    name: string;
                    type: number;
                    dnsType: "MX";
                    ttl: number;
                    rawText: string;
                    rRsetType: number;
                    target: string;
                    priority: number;
                } | {
                    name: string;
                    type: number;
                    dnsType: "NS";
                    ttl: number;
                    rawText: string;
                    rRsetType: number;
                    singleName: string;
                } | {
                    name: string;
                    type: number;
                    dnsType: "SOA";
                    ttl: number;
                    rawText: string;
                    rRsetType: number;
                    admin: string;
                    host: string;
                    expire: number;
                    minimum: number;
                    refresh: number;
                    retry: number;
                    serial: number;
                } | {
                    name: string;
                    type: number;
                    dnsType: "TXT" | "SPF";
                    ttl: number;
                    rawText: string;
                    rRsetType: number;
                    strings: string[];
                };
            }
        }
    }
}
