export declare const DomainDnsReverseRequestType: {
    readonly A: "A";
    readonly Aaaa: "AAAA";
    readonly Mx: "MX";
    readonly Ns: "NS";
    readonly Soa: "SOA";
    readonly Spf: "SPF";
    readonly Txt: "TXT";
    readonly Cname: "CNAME";
};
export type DomainDnsReverseRequestType = (typeof DomainDnsReverseRequestType)[keyof typeof DomainDnsReverseRequestType];
