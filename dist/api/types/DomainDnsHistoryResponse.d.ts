export interface DomainDnsHistoryResponse {
    totalRecords: number;
    totalPages: number;
    currentPage: number;
    historicalDnsRecords: DomainDnsHistoryResponse.HistoricalDnsRecords.Item[];
}
export declare namespace DomainDnsHistoryResponse {
    type HistoricalDnsRecords = HistoricalDnsRecords.Item[];
    namespace HistoricalDnsRecords {
        interface Item {
            queryTime: string;
            domainName: string;
            dnsTypes: Item.DnsTypes;
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
