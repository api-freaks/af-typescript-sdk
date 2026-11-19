# Reference

Examples assume a `client` created as shown in the README (`new ApifreaksApiClient()`) and, for file uploads, `import * as fs from "fs";`.

<details><summary><code>client.geolocationLookup(request) -> Promise<ApifreaksApi.GeolocationLookupResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get detailed geolocation data for an IP address including country, city, timezone, currency, and optional security and user-agent information
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.geolocationLookup({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.GeolocationLookupRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**ip:** `string` optional — IPv4, IPv6, or hostname for geolocation lookup
    
</dd>
</dl>

<dl>
<dd>

**lang:** `ApifreaksApi.GeolocationLookupRequestLang` optional — Response language for location fields
    
</dd>
</dl>

<dl>
<dd>

**fields:** `string` optional — Comma separated list of fields to include in response
    
</dd>
</dl>

<dl>
<dd>

**excludes:** `string` optional — Comma separated list of fields to exclude from response
    
</dd>
</dl>

<dl>
<dd>

**include:** `string` optional — Additional data to include (location, network, security, currency, time_zone, user_agent, country_metadata , hostname, liveHostname, hostnameFallbackLivet)
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkGeolocationLookup(request) -> Promise<ApifreaksApi.BulkGeolocationLookupResponseItem[]></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve detailed geolocation data for multiple IP addresses in a single request.
Supports up to `50,000` IP-addresses/host-names per request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bulkGeolocationLookup({
    apiKey: "apiKey",
    ips: ["ips"]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.BulkGeolocationLookupRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**lang:** `string` optional — Language of the response.
    
</dd>
</dl>

<dl>
<dd>

**fields:** `string` optional — Comma-separated list of fields to include in the response. Can include "geo".
    
</dd>
</dl>

<dl>
<dd>

**excludes:** `string` optional — Comma-separated list of fields to exclude from the response (except "ip").
    
</dd>
</dl>

<dl>
<dd>

**include:** `string` optional — Comma-separated list of additional information to include in the response.
    
</dd>
</dl>

<dl>
<dd>

**ips:** `string[]` — List of IP addresses or hostnames to lookup
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ipSecurityLookup(request) -> Promise<ApifreaksApi.IpSecurityLookupResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get comprehensive security information for a given IP address. Detects VPNs, proxies, Tor nodes, and other security threats.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.ipSecurityLookup({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.IpSecurityLookupRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**ip:** `string` optional — A valid IPv4 or IPv6 address to look up. If omitted, the API uses the public IP of the requesting client.
    
</dd>
</dl>

<dl>
<dd>

**fields:** `string` optional — Comma-separated list of fields to return. Supports dot notation (e.g. security.threat_score).
    
</dd>
</dl>

<dl>
<dd>

**excludes:** `string` optional — Comma-separated list of fields to remove from the response. Supports dot notation (e.g. security.is_tor).
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkIpSecurityLookup(request) -> Promise<ApifreaksApi.BulkIpSecurityLookupResponseItem[]></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The Bulk IP Security Lookup API allows you to retrieve security details for up to `50,000` IP-addresses in a single request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bulkIpSecurityLookup({
    apiKey: "apiKey",
    ips: ["ips"]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.BulkIpSecurityLookupRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**fields:** `string` optional — Comma-separated list of fields to return. Supports dot notation (e.g. security.threat_score).
    
</dd>
</dl>

<dl>
<dd>

**excludes:** `string` optional — Comma-separated list of fields to remove from the response. Supports dot notation (e.g. security.is_tor).
    
</dd>
</dl>

<dl>
<dd>

**ips:** `string[]` — List of IP addresses to lookup
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.geocoderSearch(request) -> Promise<ApifreaksApi.GeocoderSearchResponseItem[]></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Convert a given address or place name into geographic coordinates (latitude and longitude).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.geocoderSearch({
    apiKey: "apiKey",
    query: "query"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.GeocoderSearchRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**query:** `string` — Free-form search query, e.g. Wembley Stadium, London
    
</dd>
</dl>

<dl>
<dd>

**limit:** `number` optional — Max number of results to return (1–40). May return fewer if matches are weak.
    
</dd>
</dl>

<dl>
<dd>

**min_lat:** `number` optional — Minimum latitude for the viewbox. Must be ≤ max_lat and between -90 and 90.
    
</dd>
</dl>

<dl>
<dd>

**max_lat:** `number` optional — Maximum latitude for the viewbox. Must be ≥ min_lat and between -90 and 90.
    
</dd>
</dl>

<dl>
<dd>

**min_lon:** `number` optional — Minimum longitude for the viewbox. Must be ≤ max_lon and between -180 and 180.
    
</dd>
</dl>

<dl>
<dd>

**max_lon:** `number` optional — Maximum longitude for the viewbox. Must be ≥ min_lon and between -180 and 180.
    
</dd>
</dl>

<dl>
<dd>

**Accept-Language:** `string` optional — Preferred language order for showing search results. This may either be a simple comma-separated list of language codes or a single entry. The results will be in the 1st language which is matched from the header. As a fallback if the results are not supported in the given language, 'en' will be used.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.geocoderReverse(request) -> Promise<ApifreaksApi.GeocoderReverseResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Convert geographic coordinates (latitude and longitude) into a human-readable address or place name.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.geocoderReverse({
    apiKey: "apiKey",
    lat: 1.1,
    lon: 1.1
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.GeocoderReverseRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**lat:** `number` — WGS84 latitude value ranging from -90 to 90.
    
</dd>
</dl>

<dl>
<dd>

**lon:** `number` — WGS84 longitude value ranging from -180 to 180.
    
</dd>
</dl>

<dl>
<dd>

**Accept-Language:** `string` optional — Preferred language order for showing search results. This may either be a simple comma-separated list of language codes or a single entry. The results will be in the 1st language which is matched from the header. As a fallback if the results are not supported in the given language, en will be used.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.domainWhoisLookup(request) -> Promise<ApifreaksApi.DomainWhoisLookupResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve current WHOIS information for a domain name.
This endpoint provides detailed registration information including registrar details,
dates, nameservers, and registrant information.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.domainWhoisLookup({
    apiKey: "apiKey",
    domainName: "domainName"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.DomainWhoisLookupRequestFormat` optional — Response format (defaults to json)
    
</dd>
</dl>

<dl>
<dd>

**domainName:** `string` — Domain name for WHOIS lookup
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkDomainWhoisLookup(request) -> Promise<ApifreaksApi.BulkDomainWhoisLookupResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve WHOIS information for `100 Domains per Request`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bulkDomainWhoisLookup({
    apiKey: "apiKey",
    domainNames: ["domainNames"]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.BulkDomainWhoisLookupRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**domainNames:** `string[]` — A list of domain names for which WHOIS data is requested.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ipWhoisLookup(request) -> Promise<ApifreaksApi.IpWhoisLookupResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns WHOIS registration details for a specified IP address (IPv4 or IPv6).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.ipWhoisLookup({
    apiKey: "apiKey",
    ip: "ip"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.IpWhoisLookupRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**ip:** `string` — The IP address (IPv4 or IPv6) for which WHOIS data is requested.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.asnWhoisLookup(request) -> Promise<ApifreaksApi.AsnWhoisLookupResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns WHOIS registration details for a specified ASN, with or without the 'as' prefix.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.asnWhoisLookup({
    apiKey: "apiKey",
    asn: "asn"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.AsnWhoisLookupRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**asn:** `string` — The Autonomous System Number (ASN) to retrieve WHOIS data for. Can be prefixed with 'as' or not.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.domainWhoisHistory(request) -> Promise<ApifreaksApi.DomainWhoisHistoryResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve historical WHOIS records for a domain name.
This endpoint provides a timeline of all recorded changes in domain registration information.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.domainWhoisHistory({
    apiKey: "apiKey",
    domainName: "domainName"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.DomainWhoisHistoryRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**domainName:** `string` — Domain name for historical WHOIS lookup
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.domainWhoisReverse(request) -> Promise<ApifreaksApi.DomainWhoisReverseResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Performs a reverse WHOIS search using one or more search parameters like keyword, email, owner, or company.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.domainWhoisReverse({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.DomainWhoisReverseRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**keyword:** `string` optional — Keyword search term for reverse WHOIS by keyword (case-insensitive pattern matching).
    
</dd>
</dl>

<dl>
<dd>

**email:** `string` optional — Email search term for reverse WHOIS by email address (case-insensitive exact or regex match; * wildcard supported).
    
</dd>
</dl>

<dl>
<dd>

**owner:** `string` optional — Registrant or owner name for reverse WHOIS (a full-text search phrase matching technique to retrieve results).
    
</dd>
</dl>

<dl>
<dd>

**company:** `string` optional — Organization or company name for reverse WHOIS (full-text search phrase matching technique to retrieve results).
    
</dd>
</dl>

<dl>
<dd>

**exact:** `boolean` optional — Accepts 'true' or 'false'. "true" returns only records that exactly match the input (keyword, owner/registrant, or company). "false" returns all matches and is the default when omitted.
    
</dd>
</dl>

<dl>
<dd>

**mode:** `ApifreaksApi.DomainWhoisReverseRequestMode` optional
    
</dd>
</dl>

<dl>
<dd>

**page:** `number` optional — Page number for paginated results.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.domainDnsLookup(request) -> Promise<ApifreaksApi.DomainDnsLookupResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve real-time DNS records for any hostname. Supports multiple record types including A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME records.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.domainDnsLookup({
    apiKey: "apiKey",
    type: ["type"]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.DomainDnsLookupRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**host-name:** `string` optional — Hostname or URL whose DNS records are required. Give either `host-name` or `ipAddress`.
    
</dd>
</dl>

<dl>
<dd>

**ipAddress:** `string` optional — The IP address whose PTR (reverse DNS) record is required. Give either `host-name` or `ipAddress`; with `ipAddress`, set `type` to `all` or `PTR`.
    
</dd>
</dl>

<dl>
<dd>

**type:** `string | string[]` optional — DNS record types to look up, sent as a comma-separated list (e.g. `A,MX`). Possible values: A, AAAA, MX, NS, SOA, SPF, TXT, CNAME, PTR, or all. When ipAddress is provided, use "all" or "PTR".
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkDomainDnsLookup(request) -> Promise<ApifreaksApi.BulkDomainDnsLookupResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Perform DNS lookups for multiple hostnames in a single request. Supports up to `100 host-names per request`
and returns DNS records including A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME records.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bulkDomainDnsLookup({
    apiKey: "apiKey",
    type: ["type"],
    domainNames: ["domainNames"]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.BulkDomainDnsLookupRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**type:** `string | string[]` optional — DNS record types to look up, sent as a comma-separated list (e.g. `A,MX`). Possible values: A, AAAA, MX, NS, SOA, SPF, TXT, CNAME, or all.
    
</dd>
</dl>

<dl>
<dd>

**domainNames:** `string[]` — List of hostnames to lookup DNS records for
    
</dd>
</dl>

<dl>
<dd>

**ipAddresses:** `string[]` optional — Array of IP addresses to include in the lookup for PTR record enrichment.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.domainDnsHistory(request) -> Promise<ApifreaksApi.DomainDnsHistoryResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve historical DNS records for any hostname. Access unique historical data for A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME records,
including subdomains. Results are paginated with up to 100 unique records per page.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.domainDnsHistory({
    apiKey: "apiKey",
    "host-name": "host-name",
    type: ["type"]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.DomainDnsHistoryRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**host-name:** `string` — Hostname or URL whose historical DNS records are required
    
</dd>
</dl>

<dl>
<dd>

**type:** `string | string[]` optional — DNS record types to look up, sent as a comma-separated list (e.g. `A,MX`). Possible values: A, AAAA, MX, NS, SOA, SPF, TXT, CNAME, or all.
    
</dd>
</dl>

<dl>
<dd>

**page:** `number` optional — Page number for paginated results
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.domainDnsReverse(request) -> Promise<ApifreaksApi.DomainDnsReverseResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve all the hostnames associated with any particular A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME DNS records. For instance, you can access all the hostnames hosted on any IP/CIDR notation, all the domain names using Cloudflare name servers, and all the domain names using Google Mailbox
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.domainDnsReverse({
    apiKey: "apiKey",
    type: "A",
    value: "value"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.DomainDnsReverseRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**type:** `ApifreaksApi.DomainDnsReverseRequestType` — The type of reverse DNS lookup to perform. Determines how the value parameter is interpreted: - A: IPv4 CIDR block - AAAA: IPv6 CIDR block - MX: Mail provider domain - NS: Name server provider hostname - SOA: SOA record admin domain - SPF/TXT: Target verification strings - CNAME: Target hostname
    
</dd>
</dl>

<dl>
<dd>

**value:** `string` — Provide an IP or CIDR for A/AAAA lookups, or a hostname/selector for MX, NS, SOA, SPF, TXT, and CNAME queries. Wildcard regex patterns are also supported (e.g., mail.google.com, m*.google.com, _spf.g*.com, s*.g*.com).
    
</dd>
</dl>

<dl>
<dd>

**exact:** `boolean` optional — Accepts 'true' or 'false'. "true" returns only records that exactly match the input (NS, MX, CNAME, SOA, SPF, TXT). "false" returns all matches (default when omitted).
    
</dd>
</dl>

<dl>
<dd>

**page:** `number` optional — Page number to paginate through results (defaults to 1).
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webScrape(request) -> Promise<ApifreaksApi.WebScrapeResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Execute a series of web scraping instructions on a target URL.
Supports various operations like form filling, clicking, data extraction, and CAPTCHA solving.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.webScrape({
    apiKey: "apiKey",
    url: "https://example.com",
    body: {
        instructions: [{
                postForm: {
                    selector: "#loginForm",
                    data: {
                        "username": "myuser",
                        "password": "mypassword"
                    }
                }
            }, {
                extract: {
                    "mainContent": "#main-content",
                    "welcomeMessage": "#welcome-message"
                }
            }, {
                getForm: {
                    selector: "#searchForm",
                    data: {
                        "query": "API scraping"
                    }
                }
            }, {
                extract: {
                    "searchResults": "#search-results"
                }
            }]
    }
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.WebScrapeRequestFormat` optional — Response format returned by the API.
    
</dd>
</dl>

<dl>
<dd>

**url:** `string` — Target URL to scrape
    
</dd>
</dl>

<dl>
<dd>

**text:** `boolean` optional — Set to `true` to return the data in text format else `false` for data in html format with tags.
    
</dd>
</dl>

<dl>
<dd>

**jsEnabled:** `boolean` optional — Set  `true` to handle websites with JavaScript. Set `false` to handle static html websites. Default value is `true`.
    
</dd>
</dl>

<dl>
<dd>

**proxy:** `ApifreaksApi.WebScrapeRequestProxy` optional — Use a proxy for the request. Pass true/false to toggle the default proxy pool, or a proxy URL string to use a specific proxy.
    
</dd>
</dl>

<dl>
<dd>

**sslIgnore:** `boolean` optional — Ignore SSL certificate errors. Only works if **jsEnabled** is **true**.
    
</dd>
</dl>

<dl>
<dd>

**windowSize:** `string` optional — Specify the browser window size in the format 'width,height' (e.g., "1920w,1080h"). Default value is the default resolutions provided by web/browser. Only works if **jsEnabled** is **true**.
    
</dd>
</dl>

<dl>
<dd>

**adBlock:** `boolean` optional — Set to `true` to apply ad-blocker to the specified URL else false or ignore to not apply. Only works if **jsEnabled** is **true**.
    
</dd>
</dl>

<dl>
<dd>

**captcha:** `boolean` optional — if true user can provide captcha instructions in the instructions to solve image captchas. Only works if **jsEnabled** is **true**.
    
</dd>
</dl>

<dl>
<dd>

**body:** `ApifreaksApi.WebScrapeRequestBody`
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.emailValidate(request) -> Promise<ApifreaksApi.EmailValidateResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Validates a single email address and returns result.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.emailValidate({
    apiKey: "apiKey",
    email: "email"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.EmailValidateRequestFormat` optional — Format of the response
    
</dd>
</dl>

<dl>
<dd>

**email:** `string` — Email address to validate
    
</dd>
</dl>

<dl>
<dd>

**name:** `string` optional — Name of the email address
    
</dd>
</dl>

<dl>
<dd>

**ip:** `string` optional — IP address of the email address
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkEmailValidate(request) -> Promise<ApifreaksApi.BulkEmailValidateResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Validates a bulk of email addresses and returns result for each. Maximum `10` email addresses per request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bulkEmailValidate({
    apiKey: "apiKey",
    emailData: [{
            email: "email"
        }]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.BulkEmailValidateRequestFormat` optional — Format of the response
    
</dd>
</dl>

<dl>
<dd>

**emailData:** `ApifreaksApi.BulkEmailValidateRequest.EmailData.Item[]` — Array of email objects for bulk validation
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.disposableEmailCheckV2(request) -> Promise<ApifreaksApi.DisposableEmailCheckV2Response></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Validates email syntax and checks the domain for disposable, free, spam, and role-account signals, plus MX/A DNS records. Send the email (and optionally an ip) as a JSON request body. When an ip is included, the response also carries geolocation and security data for it.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.disposableEmailCheckV2({
    apiKey: "apiKey",
    email: "test@sogetthis.com"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.DisposableEmailCheckV2RequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**email:** `string` — The email address to check.
    
</dd>
</dl>

<dl>
<dd>

**ip:** `string` optional — Optional IP address to look up for location and security data, such as the IP the signup came from.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkDisposableEmailCheckV2(request) -> Promise<ApifreaksApi.BulkDisposableEmailCheckV2Response></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Checks a bulk of email addresses (each with an optional ip) and returns a disposable email check result for each, in the same order as the request. Maximum `100` entries per request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bulkDisposableEmailCheckV2({
    apiKey: "apiKey",
    emailData: [{
            email: "abc"
        }, {
            email: "john@microsoft.com",
            ip: "8.8.8.8"
        }, {
            email: "test@mailinator.com"
        }]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.BulkDisposableEmailCheckV2RequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**emailData:** `ApifreaksApi.BulkDisposableEmailCheckV2Request.EmailData.Item[]` — Entries to check. Maximum 100 per request. Must not be empty, and must not contain null entries or entries without a valid email.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.phoneValidate(request) -> Promise<ApifreaksApi.PhoneValidateResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Validates a single phone number and returns detailed metadata including carrier, line type, geolocation, time zones, and standardized formats.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.phoneValidate({
    apiKey: "apiKey",
    number: "+14155552671"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PhoneValidateRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object. If not provided, the API defaults to JSON format.
    
</dd>
</dl>

<dl>
<dd>

**number:** `string` — Phone number to validate. Accepts international format (+14155552671), local format (4155552671) with region, or IDD format (0014155552671) with dialer_region.
    
</dd>
</dl>

<dl>
<dd>

**region:** `string` optional — Two-letter ISO country code (e.g., US, GB). Required when number is in local format without + prefix. Cannot be used together with dialer_region.
    
</dd>
</dl>

<dl>
<dd>

**dialer_region:** `string` optional — Two-letter ISO country code indicating the country the number is being dialed from. Required when number uses IDD exit code. Cannot be used together with region.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkPhoneValidate(request) -> Promise<ApifreaksApi.BulkPhoneValidateResponseItem[]></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Validates up to 100 phone numbers in a single request. Each number is processed independently — invalid entries return per-number errors without affecting the rest of the batch.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bulkPhoneValidate({
    apiKey: "apiKey",
    numbers: [{
            number: "+14155552671"
        }, {
            number: "+447911123456"
        }, {
            number: "+919876543210"
        }]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.BulkPhoneValidateRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object. If not provided, the API defaults to JSON format.
    
</dd>
</dl>

<dl>
<dd>

**numbers:** `ApifreaksApi.BulkPhoneValidateRequest.Numbers.Item[]` — Array of phone number objects. Maximum 100 per request.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.domainSslLookup(request) -> Promise<ApifreaksApi.DomainSslLookupResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve comprehensive SSL certificate information without the certificate chain.
This endpoint provides detailed information about the SSL certificate including expiry dates, issuer details, and encryption methods.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.domainSslLookup({
    apiKey: "apiKey",
    domainName: "domainName"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.DomainSslLookupRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**domainName:** `string` — Domain name or URL whose SSL certificate lookup is required
    
</dd>
</dl>

<dl>
<dd>

**sslRaw:** `boolean` optional — Set to true to get the raw openSSL response of the domain
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.domainSslChainLookup(request) -> Promise<ApifreaksApi.DomainSslChainLookupResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the complete SSL certificate chain from root Certificate Authority (CA) to end-user certificate.
This endpoint provides comprehensive information about each certificate in the chain.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.domainSslChainLookup({
    apiKey: "apiKey",
    domainName: "domainName"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.DomainSslChainLookupRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**domainName:** `string` — Domain name or URL whose SSL certificate chain lookup is required
    
</dd>
</dl>

<dl>
<dd>

**sslRaw:** `boolean` optional — Set to true to get the raw openSSL response for each certificate in the chain
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.domainAvailabilityCheck(request) -> Promise<ApifreaksApi.DomainAvailabilityCheckResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The Domain Search API is designed to simplify the process of finding available domain names across all top-level domains (TLDs) and second-level domains (SLDs).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.domainAvailabilityCheck({
    apiKey: "apiKey",
    domain: "domain"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.DomainAvailabilityCheckRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**domain:** `string` — Domain name whose availability is to be checked.
    
</dd>
</dl>

<dl>
<dd>

**source:** `ApifreaksApi.DomainAvailabilityCheckRequestSource` optional — Specify the data source for domain availability checks. Use "dns" for DNS-based lookups or "whois" for WHOIS-based lookups. By default, "dns" is used.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkDomainAvailabilityCheck(request) -> Promise<ApifreaksApi.BulkDomainAvailabilityCheckResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Perform Bulk Domain Availability checks using a list of domains. Supports upto `100 Domains Per Request`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bulkDomainAvailabilityCheck({
    apiKey: "apiKey",
    domainNames: ["domainNames"]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.BulkDomainAvailabilityCheckRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**source:** `ApifreaksApi.BulkDomainAvailabilityCheckRequestSource` optional — Specify the data source for domain availability checks. Use "dns" for DNS-based lookups or "whois" for WHOIS-based lookups. By default, "dns" is used.
    
</dd>
</dl>

<dl>
<dd>

**domainNames:** `string[]` — List of domain names to check.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.domainAvailabilitySuggestions(request) -> Promise<ApifreaksApi.DomainAvailabilitySuggestionsResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The Domain Search API is designed to simplify the process of finding available domain names across all top-level domains (TLDs) and second-level domains (SLDs).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.domainAvailabilitySuggestions({
    apiKey: "apiKey",
    domain: "domain"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.DomainAvailabilitySuggestionsRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**domain:** `string` — Domain name for availability and suggestions.
    
</dd>
</dl>

<dl>
<dd>

**source:** `ApifreaksApi.DomainAvailabilitySuggestionsRequestSource` optional — Specify the data source for domain availability checks. Use "dns" for DNS-based lookups or "whois" for WHOIS-based lookups. By default, "dns" is used.
    
</dd>
</dl>

<dl>
<dd>

**count:** `number` optional — Number of suggestions to retrieve. The API returns a minimum of 5 suggestions regardless of a lower value.
    
</dd>
</dl>

<dl>
<dd>

**sug:** `boolean` optional — Controls the response shape. When `false`, returns a single availability object for the queried domain only. When omitted or `true`, returns an array of suggested domains instead.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subdomainsLookup(request) -> Promise<ApifreaksApi.SubdomainsLookupResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The Subdomain Lookup API is designed to retrieve subdomains related to the given domain name. It helps you explore subdomains that are available for registration or usage.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.subdomainsLookup({
    apiKey: "apiKey",
    domain: "domain"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.SubdomainsLookupRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**domain:** `string` — Domain name for availability and suggestions.
    
</dd>
</dl>

<dl>
<dd>

**after:** `string` optional — Filter subdomains seen after this date (format YYYY-MM-DD).
    
</dd>
</dl>

<dl>
<dd>

**before:** `string` optional — Filter subdomains seen before this date( format YYYY-MM-DD).
    
</dd>
</dl>

<dl>
<dd>

**status:** `ApifreaksApi.SubdomainsLookupRequestStatus` optional — Filter subdomains by status (active or inactive).
    
</dd>
</dl>

<dl>
<dd>

**page:** `string` optional — Page number for paginated results.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.domainTyposquatting(request) -> Promise<ApifreaksApi.DomainTyposquattingResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The Domain Typosquatting API searches for registered domains that are typo or look-alike variants of a brand keyword, or that match a wildcard pattern. Results include registration lifecycle data and drop status across 1529+ TLDs, paginated at 100 domains per page.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.domainTyposquatting({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.DomainTyposquattingRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**keyword:** `string` optional — Brand or label to find typo variants for. 3-63 characters, letters, digits, or hyphens, a single label with no dots. Case-insensitive. Use either keyword or pattern, never both.
    
</dd>
</dl>

<dl>
<dd>

**pattern:** `string` optional — Wildcard search string that combines fuzzy matching with * wildcards. 3-63 characters total, * is the only supported wildcard and each one matches zero or more characters, maximum 3 asterisks per request. Use either keyword or pattern, never both.
    
</dd>
</dl>

<dl>
<dd>

**pageToken:** `string` optional — Token from nextPageToken in the previous response. Required to retrieve page 2 and onward. The original keyword or pattern must be passed alongside the token on every page request. Results page at 100 domains per page.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.domainReputation(request) -> Promise<ApifreaksApi.DomainReputationResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The Domain Reputation API evaluates a domain against threat intelligence sources, DGA (domain generation algorithm) scoring, trust signals, and email deliverability configuration, returning a consolidated risk assessment with a verdict, severity, and supporting evidence.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.domainReputation({
    apiKey: "apiKey",
    domainName: "domainName"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.DomainReputationRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**domainName:** `string` — The domain name to assess (e.g. example.com). Must contain at least one dot and be at most 253 characters. Automatically lowercased.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.astronomyLookupV2(request) -> Promise<ApifreaksApi.AstronomyLookupV2Response></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve sunrise and sunset times, current position of the moon, and other related information by specifying a location address, location coordinates, IP address, or using the client IP address if no parameter is passed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.astronomyLookupV2({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.AstronomyLookupV2RequestFormat` optional — Format of the response. Can be "json" or "xml".
    
</dd>
</dl>

<dl>
<dd>

**location:** `string` optional — Extract astronomy information using location (preferably city)
    
</dd>
</dl>

<dl>
<dd>

**lat:** `number` optional — Latitude to extract astronomy information using location coordinates
    
</dd>
</dl>

<dl>
<dd>

**long:** `number` optional — Longitude to extract astronomy information using location coordinates
    
</dd>
</dl>

<dl>
<dd>

**ip:** `string` optional — IPv4 or IPv6 address to extract astronomy information using IP address
    
</dd>
</dl>

<dl>
<dd>

**lang:** `ApifreaksApi.AstronomyLookupV2RequestLang` optional — Response language of "location" field in case of lookup through IP address only.
    
</dd>
</dl>

<dl>
<dd>

**date:** `string` optional — Specific date (format YYYY-MM-DD) for which astronomy data is required
    
</dd>
</dl>

<dl>
<dd>

**elevation:** `number` optional — Elevation above sea level at the location, in meters. The value should be between 0 meter and a maximum value of 10,000 meters. Negative value is set to 0.
    
</dd>
</dl>

<dl>
<dd>

**time_zone:** `string` optional — Time zone to receive all time-based data in your preferred local time.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.timezoneLookupV2(request) -> Promise<ApifreaksApi.TimezoneLookupV2Response></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get current time, date, and timezone details by specifying a timezone name, location address, GPS coordinates, IP address, IATA/ICAO airport code, UN/LOCODE, or use the client IP if no parameter is provided.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.timezoneLookupV2({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.TimezoneLookupV2RequestFormat` optional — Format of the response. Possible values: json, xml.
    
</dd>
</dl>

<dl>
<dd>

**ip:** `string` optional — IPv4 or IPv6 address to extract timezone information.
    
</dd>
</dl>

<dl>
<dd>

**tz:** `string` optional — Timezone name in IANA format (e.g., Asia/Kolkata) to retrieve information directly.
    
</dd>
</dl>

<dl>
<dd>

**location:** `string` optional — Location string (preferably city and country) to extract timezone.
    
</dd>
</dl>

<dl>
<dd>

**lat:** `number` optional — Latitude for geolocation-based timezone lookup. Only time_zone is returned for this mode; no location object is included.
    
</dd>
</dl>

<dl>
<dd>

**long:** `number` optional — Longitude for geolocation-based timezone lookup. Only time_zone is returned for this mode; no location object is included.
    
</dd>
</dl>

<dl>
<dd>

**lang:** `ApifreaksApi.TimezoneLookupV2RequestLang` optional — Response language for location fields. Default: en.
    
</dd>
</dl>

<dl>
<dd>

**iata_code:** `string` optional — 3-letter IATA airport code (e.g., LHR) to extract timezone.
    
</dd>
</dl>

<dl>
<dd>

**icao_code:** `string` optional — 4-letter ICAO airport code (e.g., KJFK) to extract timezone.
    
</dd>
</dl>

<dl>
<dd>

**lo_code:** `string` optional — 5-letter UN/LOCODE city code to extract timezone.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.geolocationLookupV2(request) -> Promise<ApifreaksApi.GeolocationLookupV2Response></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get detailed IP geolocation data for an IP address including country, city, timezone, currency, and optional threat intelligence and user-agent information.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.geolocationLookupV2({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.GeolocationLookupV2RequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**ip:** `string` optional — IPv4, IPv6, or hostname for geolocation lookup.
    
</dd>
</dl>

<dl>
<dd>

**lang:** `ApifreaksApi.GeolocationLookupV2RequestLang` optional — Response language for location fields. Default: en.
    
</dd>
</dl>

<dl>
<dd>

**fields:** `string` optional — Comma-separated list of fields to include in response. For example, `location` includes all location fields, `location.city` is a specific field.
    
</dd>
</dl>

<dl>
<dd>

**excludes:** `string` optional — Comma-separated list of fields to exclude from response.
    
</dd>
</dl>

<dl>
<dd>

**include:** `string` optional — Comma-separated list of additional data modules to include. Possible values: security (threat intelligence), hostname (IP-Hostname lookup), liveHostname (live hostname lookup), hostnameFallbackLive (hostname with live fallback), user_agent (parse User-Agent header), abuse (abuse contact info), dma_code (DMA code), geo_accuracy (accuracy_radius, confidence, locality), * (all modules).
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkGeolocationLookupV2(request) -> Promise<ApifreaksApi.BulkGeolocationLookupV2ResponseItem[]></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get detailed IP geolocation data for multiple IP addresses including country, city, timezone, currency, and optional threat intelligence information. Supports up to 50,000 IP addresses per request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bulkGeolocationLookupV2({
    apiKey: "apiKey",
    ips: ["ips"]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.BulkGeolocationLookupV2RequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**lang:** `ApifreaksApi.BulkGeolocationLookupV2RequestLang` optional — Response language for location fields. Default: en.
    
</dd>
</dl>

<dl>
<dd>

**fields:** `string` optional — Comma-separated list of fields to include in the response. For example, `location` includes all location fields, `location.city` is a specific field.
    
</dd>
</dl>

<dl>
<dd>

**excludes:** `string` optional — Comma-separated list of fields to exclude from response.
    
</dd>
</dl>

<dl>
<dd>

**include:** `string` optional — Comma-separated list of additional data modules to include. Possible values: security (threat intelligence), hostname (IP-Hostname lookup), liveHostname (live hostname lookup), user_agent (parse User-Agent header), abuse (abuse contact info), * (all modules).
    
</dd>
</dl>

<dl>
<dd>

**ips:** `string[]` — List of IP addresses or hostnames to lookup.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.domainWhoisLookupV2(request) -> Promise<ApifreaksApi.DomainWhoisLookupV2Response></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the current WHOIS record for the specified domain, including registrar details, registrant/administrative/technical/billing/reseller contacts, name servers, status codes, and raw WHOIS text.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.domainWhoisLookupV2({
    apiKey: "apiKey",
    domainName: "domainName"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.DomainWhoisLookupV2RequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**domainName:** `string` — Domain name to retrieve WHOIS data for (e.g. example.com).
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkDomainWhoisLookupV2(request) -> Promise<ApifreaksApi.BulkDomainWhoisLookupV2Response></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the current WHOIS record for each requested domain, in request order. Supports up to 100 domain names per request; a domain that fails to resolve yields an error item instead of failing the whole batch.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bulkDomainWhoisLookupV2({
    apiKey: "apiKey",
    domainNames: ["domainNames"]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.BulkDomainWhoisLookupV2RequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**domainNames:** `string[]` — List of domain names to retrieve WHOIS data for.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.commodityLatestRatesV2(request) -> Promise<ApifreaksApi.CommodityLatestRatesV2Response></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the current live price for the requested commodity symbols. Unresolved symbols degrade to a 206 partial response instead of failing the whole request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.commodityLatestRatesV2({
    apiKey: "apiKey",
    symbols: ["symbols"]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CommodityLatestRatesV2RequestFormat` optional — Response format. Currently only `json` is supported.
    
</dd>
</dl>

<dl>
<dd>

**symbols:** `string | string[]` optional — Comma-separated list of commodity symbols (e.g., XAU, WTIOIL-SPOT). Case-insensitive; duplicates are deduplicated server-side, with one response entry and one credit charge per unique symbol.
    
</dd>
</dl>

<dl>
<dd>

**quote:** `string` optional — Target currency for the exchange rate. If omitted (or set to `default`), the default quote currency of each commodity is used. Requires a premium plan; ignored on lower-tier plans.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.commodityHistoricalRatesV2(request) -> Promise<ApifreaksApi.CommodityHistoricalRatesV2Response></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns OHLC price data for the requested commodity symbols on a specific date. Falls back to the nearest earlier rate if none exists for the exact date. Unresolved symbols degrade to a 206 partial response instead of failing the whole request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.commodityHistoricalRatesV2({
    apiKey: "apiKey",
    symbols: ["symbols"],
    date: "2023-01-15"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CommodityHistoricalRatesV2RequestFormat` optional — Response format. Currently only `json` is supported.
    
</dd>
</dl>

<dl>
<dd>

**symbols:** `string | string[]` optional — Comma-separated list of commodity symbols. Case-insensitive; duplicates are deduplicated server-side, with one response entry and one credit charge per unique symbol.
    
</dd>
</dl>

<dl>
<dd>

**date:** `string` — Date in YYYY-MM-DD format. Data available from 1990 onwards.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.commodityFluctuationV2(request) -> Promise<ApifreaksApi.CommodityFluctuationV2Response></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns price fluctuation metrics (start, end, change, percent change) for the requested commodity symbols over a date range. For monthly-updated commodities the range snaps to month boundaries. Unresolved symbols degrade to a 206 partial response instead of failing the whole request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.commodityFluctuationV2({
    apiKey: "apiKey",
    symbols: ["symbols"],
    startDate: "2023-01-15",
    endDate: "2023-01-15"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CommodityFluctuationV2RequestFormat` optional — Response format. Currently only `json` is supported.
    
</dd>
</dl>

<dl>
<dd>

**symbols:** `string | string[]` optional — Comma-separated list of commodity symbols. Case-insensitive; duplicates are deduplicated server-side, with one response entry and one credit charge per unique symbol.
    
</dd>
</dl>

<dl>
<dd>

**startDate:** `string` — Start date (YYYY-MM-DD)
    
</dd>
</dl>

<dl>
<dd>

**endDate:** `string` — End date (YYYY-MM-DD)
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.commodityTimeSeriesV2(request) -> Promise<ApifreaksApi.CommodityTimeSeriesV2Response></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns day-by-day OHLC data for the requested commodity symbols within a date range, indexed by date. Non-trading days are excluded. Unresolved symbols degrade to a 206 partial response instead of failing the whole request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.commodityTimeSeriesV2({
    apiKey: "apiKey",
    symbols: ["symbols"],
    startDate: "2023-01-15",
    endDate: "2023-01-15"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CommodityTimeSeriesV2RequestFormat` optional — Response format. Currently only `json` is supported.
    
</dd>
</dl>

<dl>
<dd>

**symbols:** `string | string[]` optional — Comma-separated list of commodity symbols. Case-insensitive; duplicates are deduplicated server-side, with one response entry and one credit charge per unique symbol.
    
</dd>
</dl>

<dl>
<dd>

**startDate:** `string` — Start date (YYYY-MM-DD)
    
</dd>
</dl>

<dl>
<dd>

**endDate:** `string` — End date (YYYY-MM-DD). Maximum range is 365 days.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.commoditySymbolsV2(request) -> Promise<ApifreaksApi.CommoditySymbolsV2Response></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the list of supported commodity symbols with metadata. Deprecated symbols stay listed with status "inactive" and a deprecationDate.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.commoditySymbolsV2({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CommoditySymbolsV2RequestFormat` optional — Response format. Currently only `json` is supported.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.commodityIntradayRatesV2(request) -> Promise<ApifreaksApi.CommodityIntradayRatesV2Response></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the prices of one commodity through a UTC day at the requested interval, keyed by UTC timestamp. Each request costs a flat 50 credits however many points it returns.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.commodityIntradayRatesV2({
    apiKey: "apiKey",
    symbols: "symbols",
    interval: "1m",
    date: "2023-01-15"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**symbols:** `string` — Exactly one commodity symbol. Case-insensitive. Sending two or more returns a 400. Only symbols updated every second, every minute, or every 10 minutes have intraday rates; symbols updated hourly or less often return a 400. Use the Commodity Symbols endpoint for all valid values.
    
</dd>
</dl>

<dl>
<dd>

**interval:** `ApifreaksApi.CommodityIntradayRatesV2RequestInterval` — Spacing between points. Case-insensitive. Symbols updated every 10 minutes accept only `10m`, `30m`, `1h`, `2h`, `4h`, `8h`, `12h`, `1d`.
    
</dd>
</dl>

<dl>
<dd>

**date:** `string` — The UTC day to read, in `YYYY-MM-DD` format. Cannot be in the future. For today, points stop at the current UTC minute.
    
</dd>
</dl>

<dl>
<dd>

**startTime:** `string` optional — First mark of the window, as a 24-hour UTC time in `HH:mm`. Must fall on a mark of the interval (for example, `14:30` works for `5m` or `30m`, but not for `1h`). For `1d` it can only be `00:00`.
    
</dd>
</dl>

<dl>
<dd>

**metadata:** `boolean` optional — Whether to include the `metadata` object. Pass `false` to receive only the prices.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfMerge(request) -> Promise<ApifreaksApi.PdfMergeResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API merges multiple PDF files into a single PDF, in the order they are provided
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfMerge({
    apiKey: "apiKey",
    file: [fs.createReadStream("/path/to/file")]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfMergeRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file_id:** `string | string[]` optional — An array of unique file IDs referencing PDF files previously uploaded to the API Freaks server. Use this parameter to merge existing files without re-uploading them. Provide multiple IDs to merge files in the specified order.
    
</dd>
</dl>

<dl>
<dd>

**destroy:** `boolean` optional — If set to `true`, the input file(s) will be permanently deleted from the server immediately after the output PDF is generated.
    
</dd>
</dl>

<dl>
<dd>

**output:** `string` optional — Specifies the desired name for the resulting merged PDF file. If not provided, a default name will be assigned.
    
</dd>
</dl>

<dl>
<dd>

**webhook_url:** `string` optional — The URL to which the webhook notification will be sent after the task is completed.
    
</dd>
</dl>

<dl>
<dd>

**webhook_failure_notification:** `boolean` optional — If true, a notification will also be sent by email in case the webhook request fails all the retries.  The email notification will be sent to the requesting user or their organization’s admin if part of one.
    
</dd>
</dl>

<dl>
<dd>

**X-Webhook-Authorization:** `string` optional — Optional custom header for webhook requests. Format: `Key:Value` (e.g., `Authorization:Bearer token123`). This will be sent as an HTTP header in the webhook call.
    
</dd>
</dl>

<dl>
<dd>

**file:** `core.file.Uploadable[]` optional — The PDF file(s) to be processed. If this parameter is not provided, you must specify `file_id` to use previously uploaded files.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfRemovePages(request) -> Promise<ApifreaksApi.PdfRemovePagesResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API removes a selection or range of pages from a PDF file.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfRemovePages({
    apiKey: "apiKey",
    pages: "pages",
    file: fs.createReadStream("/path/to/file")
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfRemovePagesRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file_id:** `string` optional — The unique identifier of a PDF file already uploaded to the API Freaks server. Use this as an alternative to uploading a new file directly.
    
</dd>
</dl>

<dl>
<dd>

**destroy:** `boolean` optional — If set to `true`, the input file(s) will be permanently deleted from the server immediately after the output PDF is generated.
    
</dd>
</dl>

<dl>
<dd>

**output:** `string` optional — The desired name for the output PDF file after pages have been removed. If not provided, a default name will be assigned.
    
</dd>
</dl>

<dl>
<dd>

**pages:** `string` — Specifies which pages to remove from the PDF. Accepts individual page numbers (e.g., '1,7') and/or ascending page ranges (e.g., '3-5'). Use commas to separate entries and hyphens for ranges. Reverse ranges (e.g., '5-3') are not allowed. Alternatively, you may provide only one of the following keywords: 'even' (removes all even-numbered pages), 'odd' (removes all odd-numbered pages), or 'last' (removes only the last page). The keyword 'all' is not supported for this operation. Examples: '1,3-5', 'even'. Mixing special keywords with specific pages/ranges is not allowed.
    
</dd>
</dl>

<dl>
<dd>

**webhook_url:** `string` optional — The URL to which the webhook notification will be sent after the task is completed.
    
</dd>
</dl>

<dl>
<dd>

**webhook_failure_notification:** `boolean` optional — If true, a notification will also be sent by email in case the webhook request fails all the retries.  The email notification will be sent to the requesting user or their organization’s admin if part of one.
    
</dd>
</dl>

<dl>
<dd>

**X-Webhook-Authorization:** `string` optional — Optional custom header for webhook requests. Format: `Key:Value` (e.g., `Authorization:Bearer token123`). This will be sent as an HTTP header in the webhook call.
    
</dd>
</dl>

<dl>
<dd>

**file:** `core.file.Uploadable` optional — The PDF file to be processed. If this parameter is not provided, you must specify `file_id` to use a previously uploaded file.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfSplit(request) -> Promise<ApifreaksApi.PdfSplitResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API splits a PDF into multiple parts based on specified page numbers or ranges.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfSplit({
    apiKey: "apiKey",
    file: fs.createReadStream("/path/to/file")
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfSplitRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file_id:** `string` optional — The unique ID of a PDF file already uploaded to the API Freaks server. Use this as an alternative to uploading a new file directly.
    
</dd>
</dl>

<dl>
<dd>

**destroy:** `boolean` optional — If set to `true`, the input file(s) will be permanently deleted from the server immediately after the output PDF is generated.
    
</dd>
</dl>

<dl>
<dd>

**output:** `string` optional — The desired base name for the output PDF files after splitting. If not provided, a default naming convention will be used.
    
</dd>
</dl>

<dl>
<dd>

**pages:** `string | string[]` optional — Defines the page numbers or ranges where the PDF should be split. Provide individual pages and/or ranges in any order (for example: "1-4,9-5,16-last"). Separate entries with commas and use hyphens for ranges. Special keywords (use alone): • `even` — split at every even-numbered page • `odd` — split at every odd-numbered page • `all` — split the PDF into single-page files The keyword `last` can be used anywhere in the string, in combination with page numbers or ranges (for example: "5-last", "last-2", "1,last,9"). Examples: - "1,4-2,last" - "odd" - "all" - "last,2-5" Invalid example: "1,odd" (mixing a keyword other than "last" with specific pages/ranges is not allowed). You can pass multiple pages entries to produce multiple output files.
    
</dd>
</dl>

<dl>
<dd>

**webhook_url:** `string` optional — The URL to which the webhook notification will be sent after the task is completed.
    
</dd>
</dl>

<dl>
<dd>

**webhook_failure_notification:** `boolean` optional — If true, a notification will also be sent by email in case the webhook request fails all the retries.  The email notification will be sent to the requesting user or their organization’s admin if part of one.
    
</dd>
</dl>

<dl>
<dd>

**X-Webhook-Authorization:** `string` optional — Optional custom header for webhook requests. Format: `Key:Value` (e.g., `Authorization:Bearer token123`). This will be sent as an HTTP header in the webhook call.
    
</dd>
</dl>

<dl>
<dd>

**file:** `core.file.Uploadable` optional — The PDF file to be processed. If this parameter is not provided, you must specify `file_id` to use a previously uploaded file.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfRotate(request) -> Promise<ApifreaksApi.PdfRotateResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API rotates pages of a PDF by a specified angle (in multiples of 90 degrees).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfRotate({
    apiKey: "apiKey",
    rotate: 1,
    file: fs.createReadStream("/path/to/file")
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfRotateRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file_id:** `string` optional — The unique ID of a PDF file already uploaded to the API Freaks server. Use this as an alternative to uploading a new file directly.
    
</dd>
</dl>

<dl>
<dd>

**destroy:** `boolean` optional — If set to `true`, the input file(s) will be permanently deleted from the server immediately after the output PDF is generated.
    
</dd>
</dl>

<dl>
<dd>

**output:** `string` optional — The desired name for the output PDF file after rotation. If not provided, a default name will be assigned.
    
</dd>
</dl>

<dl>
<dd>

**pages:** `string` optional — Specifies which pages to rotate. Accepts individual page numbers (e.g., '1,7') and/or ascending page ranges (e.g., '3-5'). Use commas to separate entries and hyphens for ranges. Reverse ranges (e.g., '5-3') are not allowed. Alternatively, provide only one of the following keywords: 'even' (rotate all even-numbered pages), 'odd' (rotate all odd-numbered pages), 'last' (rotate only the last page), or 'all' (rotate all pages). Examples: '1,3-5', 'odd', 'all'. Mixing special keywords with specific pages/ranges is not allowed.
    
</dd>
</dl>

<dl>
<dd>

**rotate:** `number` — The angle in degrees to rotate the selected pages. Must be one of the following values: 0, 90, 180, 270, -90, -180, or -270. All rotations are applied clockwise.
    
</dd>
</dl>

<dl>
<dd>

**webhook_url:** `string` optional — The URL to which the webhook notification will be sent after the task is completed.
    
</dd>
</dl>

<dl>
<dd>

**webhook_failure_notification:** `boolean` optional — If true, a notification will also be sent by email in case the webhook request fails all the retries.  The email notification will be sent to the requesting user or their organization’s admin if part of one.
    
</dd>
</dl>

<dl>
<dd>

**X-Webhook-Authorization:** `string` optional — Optional custom header for webhook requests. Format: `Key:Value` (e.g., `Authorization:Bearer token123`). This will be sent as an HTTP header in the webhook call.
    
</dd>
</dl>

<dl>
<dd>

**file:** `core.file.Uploadable` optional — The PDF file to be processed. If this parameter is not provided, you must specify `file_id` to use a previously uploaded file.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfCompress(request) -> Promise<ApifreaksApi.PdfCompressResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API compresses a given PDF file to reduce its file size.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfCompress({
    apiKey: "apiKey",
    compression_level: "low",
    file: fs.createReadStream("/path/to/file")
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfCompressRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file_id:** `string` optional — The unique ID of a PDF file already uploaded to the API Freaks server. Use this as an alternative to uploading a new file.
    
</dd>
</dl>

<dl>
<dd>

**output:** `string` optional — Name of the output PDF.
    
</dd>
</dl>

<dl>
<dd>

**compression_level:** `ApifreaksApi.PdfCompressRequestCompressionLevel` — Controls how aggressively the PDF is compressed. Lower levels preserve more quality, while higher levels reduce file size more.
    
</dd>
</dl>

<dl>
<dd>

**destroy:** `boolean` optional — If set to true, the input file(s) will be deleted from the server immediately after the output is generated.
    
</dd>
</dl>

<dl>
<dd>

**webhook_url:** `string` optional — The URL to which the webhook notification will be sent after the task is completed.
    
</dd>
</dl>

<dl>
<dd>

**webhook_failure_notification:** `boolean` optional — If true, a notification will also be sent by email in case the webhook request fails all the retries.  The email notification will be sent to the requesting user or their organization’s admin if part of one.
    
</dd>
</dl>

<dl>
<dd>

**X-Webhook-Authorization:** `string` optional — Optional custom header for webhook requests. Format: `Key:Value` (e.g., `Authorization:Bearer token123`). This will be sent as an HTTP header in the webhook call.
    
</dd>
</dl>

<dl>
<dd>

**file:** `core.file.Uploadable` optional — The PDF file to be processed. If this parameter is not provided, you must specify `file_id` to use a previously uploaded file.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfExtractPages(request) -> Promise<ApifreaksApi.PdfExtractPagesResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API extracts specific pages or page ranges from a PDF file and returns them as a new PDF.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfExtractPages({
    apiKey: "apiKey",
    pages: "pages",
    file: fs.createReadStream("/path/to/file")
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfExtractPagesRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file_id:** `string` optional — The unique ID of a PDF file already uploaded to the API Freaks server. Use this as an alternative to uploading a new file directly.
    
</dd>
</dl>

<dl>
<dd>

**destroy:** `boolean` optional — If set to `true`, the input file(s) will be permanently deleted from the server immediately after the output PDF is generated.
    
</dd>
</dl>

<dl>
<dd>

**output:** `string` optional — The desired name for the output PDF file after pages have been extracted. If not provided, a default name will be assigned.
    
</dd>
</dl>

<dl>
<dd>

**pages:** `string` — Specifies which pages to extract from the PDF. You can provide individual page numbers (e.g., '2') and/or page ranges in any order, including descending (e.g., '9-5', '16-last'). Use commas to separate entries and hyphens for ranges. You may alternatively pass only one of the special keywords: 'even' (extracts all even-numbered pages), 'odd' (extracts all odd-numbered pages), 'last' (extracts only the last page), or 'all' (extracts all pages into individual files). Examples: '2,6-3', 'even', 'all'. Mixing special keywords with specific pages/ranges is not allowed.
    
</dd>
</dl>

<dl>
<dd>

**separated:** `boolean` optional — If set to `true`, each of the specified pages will be extracted and returned as a separate PDF file.
    
</dd>
</dl>

<dl>
<dd>

**webhook_url:** `string` optional — The URL to which the webhook notification will be sent after the task is completed.
    
</dd>
</dl>

<dl>
<dd>

**webhook_failure_notification:** `boolean` optional — If true, a notification will also be sent by email in case the webhook request fails all the retries.  The email notification will be sent to the requesting user or their organization’s admin if part of one.
    
</dd>
</dl>

<dl>
<dd>

**X-Webhook-Authorization:** `string` optional — Optional custom header for webhook requests. Format: `Key:Value` (e.g., `Authorization:Bearer token123`). This will be sent as an HTTP header in the webhook call.
    
</dd>
</dl>

<dl>
<dd>

**file:** `core.file.Uploadable` optional — The PDF file to be processed. If this parameter is not provided, you must specify `file_id` to use a previously uploaded file.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfLinearize(request) -> Promise<ApifreaksApi.PdfLinearizeResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

API endpoint that linearizes any given PDF, restructuring it for faster loading and page-by-page viewing in web browsers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfLinearize({
    apiKey: "apiKey",
    file: fs.createReadStream("/path/to/file")
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfLinearizeRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file_id:** `string` optional — The unique ID of a PDF file already uploaded to the API Freaks server. Use this as an alternative to uploading a new file directly.
    
</dd>
</dl>

<dl>
<dd>

**destroy:** `boolean` optional — If set to `true`, the input file(s) will be permanently deleted from the server immediately after the output PDF is generated.
    
</dd>
</dl>

<dl>
<dd>

**output:** `string` optional — The desired name for the output PDF file after pages have been extracted. If not provided, a default name will be assigned.
    
</dd>
</dl>

<dl>
<dd>

**webhook_url:** `string` optional — The URL to which the webhook notification will be sent after the task is completed.
    
</dd>
</dl>

<dl>
<dd>

**webhook_failure_notification:** `boolean` optional — If true, a notification will also be sent by email in case the webhook request fails all the retries.  The email notification will be sent to the requesting user or their organization’s admin if part of one.
    
</dd>
</dl>

<dl>
<dd>

**X-Webhook-Authorization:** `string` optional — Optional custom header for webhook requests. Format: `Key:Value` (e.g., `Authorization:Bearer token123`). This will be sent as an HTTP header in the webhook call.
    
</dd>
</dl>

<dl>
<dd>

**file:** `core.file.Uploadable` optional — The PDF file to be processed. If this parameter is not provided, you must specify `file_id` to use a previously uploaded file.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfEncrypt(request) -> Promise<ApifreaksApi.PdfEncryptResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API encrypts a PDF file by setting a password required to open it.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfEncrypt({
    apiKey: "apiKey",
    user_password: "user_password",
    file: fs.createReadStream("/path/to/file")
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfEncryptRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file_id:** `string` optional — The unique ID of a PDF file already uploaded to the API Freaks server. Use this as an alternative to uploading a new file directly.
    
</dd>
</dl>

<dl>
<dd>

**destroy:** `boolean` optional — If set to `true`, the input file(s) will be permanently deleted from the server immediately after the output PDF is generated.
    
</dd>
</dl>

<dl>
<dd>

**output:** `string` optional — The desired name for the output encrypted PDF file. If not provided, a default name will be assigned.
    
</dd>
</dl>

<dl>
<dd>

**file_password:** `string` optional — The password to unlock the input file if it is already protected. Either the owner password or user password can be provided. The owner password takes precedence. Password Length should be between 6 and 128 characters.
    
</dd>
</dl>

<dl>
<dd>

**user_password:** `string` — Sets the user password required to open and view the encrypted PDF file. Password Length should be between 6 and 128 characters.
    
</dd>
</dl>

<dl>
<dd>

**owner_password:** `string` optional — Sets the owner password for the PDF file. This password provides full access, including the ability to remove restrictions. If not provided, the `user_password` will also be used as the owner password. Password Length should be between 6 and 128 characters.
    
</dd>
</dl>

<dl>
<dd>

**webhook_url:** `string` optional — The URL to which the webhook notification will be sent after the task is completed.
    
</dd>
</dl>

<dl>
<dd>

**webhook_failure_notification:** `boolean` optional — If true, a notification will also be sent by email in case the webhook request fails all the retries.  The email notification will be sent to the requesting user or their organization’s admin if part of one.
    
</dd>
</dl>

<dl>
<dd>

**X-Webhook-Authorization:** `string` optional — Optional custom header for webhook requests. Format: `Key:Value` (e.g., `Authorization:Bearer token123`). This will be sent as an HTTP header in the webhook call.
    
</dd>
</dl>

<dl>
<dd>

**file:** `core.file.Uploadable` optional — The PDF file to be processed. If this parameter is not provided, you must specify `file_id` to use a previously uploaded file.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfDecrypt(request) -> Promise<ApifreaksApi.PdfDecryptResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API decrypts PDF files, removing all encryption, including open passwords and permission restrictions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfDecrypt({
    apiKey: "apiKey",
    file_password: "file_password",
    file: fs.createReadStream("/path/to/file")
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfDecryptRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file_id:** `string` optional — The unique ID of a PDF file already uploaded to the API Freaks server. Use this as an alternative to uploading a new file directly.
    
</dd>
</dl>

<dl>
<dd>

**destroy:** `boolean` optional — If set to `true`, the input file(s) will be permanently deleted from the server immediately after the output PDF is generated.
    
</dd>
</dl>

<dl>
<dd>

**output:** `string` optional — The desired name for the output decrypted PDF file. If not provided, a default name will be assigned.
    
</dd>
</dl>

<dl>
<dd>

**file_password:** `string` — The password to unlock the input file if it is protected. Either the owner password or user password can be provided. The owner password takes precedence. Password Length should be between 6 and 128 characters.
    
</dd>
</dl>

<dl>
<dd>

**webhook_url:** `string` optional — The URL to which the webhook notification will be sent after the task is completed.
    
</dd>
</dl>

<dl>
<dd>

**webhook_failure_notification:** `boolean` optional — If true, a notification will also be sent by email in case the webhook request fails all the retries.  The email notification will be sent to the requesting user or their organization’s admin if part of one.
    
</dd>
</dl>

<dl>
<dd>

**X-Webhook-Authorization:** `string` optional — Optional custom header for webhook requests. Format: `Key:Value` (e.g., `Authorization:Bearer token123`). This will be sent as an HTTP header in the webhook call.
    
</dd>
</dl>

<dl>
<dd>

**file:** `core.file.Uploadable` optional — The PDF file to be processed. If this parameter is not provided, you must specify `file_id` to use a previously uploaded file.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfRestrict(request) -> Promise<ApifreaksApi.PdfRestrictResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API applies permission restrictions on a PDF file, such as disabling printing, copying, or editing. This can include password protection to enforce restrictions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfRestrict({
    apiKey: "apiKey",
    user_password: "user_password",
    restrictions: ["print_high"],
    file: fs.createReadStream("/path/to/file")
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfRestrictRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file_id:** `string` optional — The unique ID of a PDF file already uploaded to the API Freaks server. Use this as an alternative to uploading a new file directly.
    
</dd>
</dl>

<dl>
<dd>

**destroy:** `boolean` optional — If set to `true`, the input file(s) will be permanently deleted from the server immediately after the output PDF is generated.
    
</dd>
</dl>

<dl>
<dd>

**output:** `string` optional — The desired name for the output restricted PDF file. If not provided, a default name will be assigned.
    
</dd>
</dl>

<dl>
<dd>

**file_password:** `string` optional — The password to unlock the input file if it is already secured. Provide the owner password if available; otherwise, the user password. The owner password takes precedence. Password Length should be between 6 and 128 characters.
    
</dd>
</dl>

<dl>
<dd>

**user_password:** `string` — Sets the password users will use to open the PDF. If this is not set, only the owner password will be configured, and anyone can open the PDF file with the provided restrictions enabled. Password Length should be between 6 and 128 characters.
    
</dd>
</dl>

<dl>
<dd>

**owner_password:** `string` optional — Sets the password that allows full access to the PDF (e.g., removing restrictions). If not provided, the `user_password` (if set) will also be used as the owner password. Password Length should be between 6 and 128 characters.
    
</dd>
</dl>

<dl>
<dd>

**restrictions:** `ApifreaksApi.PdfRestrictRequestRestrictionsItem | ApifreaksApi.PdfRestrictRequestRestrictionsItem[]` optional — A comma-separated list of restrictions to apply to the PDF. These define what the end-user is *not* allowed to do with the PDF. Available options are: * **print_high** – Disables high-quality printing. * **print_low** – Disables low-resolution printing. * **edit_document_assembly** – Prevents reordering or inserting pages. * **fill_form_fields** – Disallows filling in PDF form fields. * **edit_annotations** – Disables adding or modifying annotations or comments. * **modify_content** – Prevents modifying existing content in the PDF. * **copy_and_extract_content** – Disables copying text or images from the PDF. * **use_accessibility** – Prevents screen readers or accessibility tools from accessing content.
    
</dd>
</dl>

<dl>
<dd>

**webhook_url:** `string` optional — The URL to which the webhook notification will be sent after the task is completed.
    
</dd>
</dl>

<dl>
<dd>

**webhook_failure_notification:** `boolean` optional — If true, a notification will also be sent by email in case the webhook request fails all the retries.  The email notification will be sent to the requesting user or their organization’s admin if part of one.
    
</dd>
</dl>

<dl>
<dd>

**X-Webhook-Authorization:** `string` optional — Optional custom header for webhook requests. Format: `Key:Value` (e.g., `Authorization:Bearer token123`). This will be sent as an HTTP header in the webhook call.
    
</dd>
</dl>

<dl>
<dd>

**file:** `core.file.Uploadable` optional — The PDF file to be processed. If this parameter is not provided, you must specify `file_id` to use a previously uploaded file.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfUnrestrict(request) -> Promise<ApifreaksApi.PdfUnrestrictResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API removes permission restrictions from a PDF while keeping it encrypted. If you want to remove all security (including encryption), use the `/pdf/decrypt` endpoint instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfUnrestrict({
    apiKey: "apiKey",
    file_password: "file_password",
    user_password: "user_password",
    file: fs.createReadStream("/path/to/file")
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfUnrestrictRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file_id:** `string` optional — The unique ID of a PDF file already uploaded to the API Freaks server. Use this as an alternative to uploading a new file directly.
    
</dd>
</dl>

<dl>
<dd>

**destroy:** `boolean` optional — If set to `true`, the input file(s) will be permanently deleted from the server immediately after the output PDF is generated.
    
</dd>
</dl>

<dl>
<dd>

**output:** `string` optional — The desired name for the output unrestricted PDF file. If not provided, a default name will be assigned.
    
</dd>
</dl>

<dl>
<dd>

**file_password:** `string` — The password to unlock the input file. Either the owner password or user password can be provided. The owner password takes precedence. Password Length should be between 6 and 128 characters.
    
</dd>
</dl>

<dl>
<dd>

**user_password:** `string` — Sets the user password for the PDF file. Password Length should be between 6 and 128 characters.
    
</dd>
</dl>

<dl>
<dd>

**owner_password:** `string` optional — Sets the owner password for the PDF file. If the owner password is not provided, the `user_password` will also be used as the owner password. Password Length should be between 6 and 128 characters.
    
</dd>
</dl>

<dl>
<dd>

**webhook_url:** `string` optional — The URL to which the webhook notification will be sent after the task is completed.
    
</dd>
</dl>

<dl>
<dd>

**webhook_failure_notification:** `boolean` optional — If true, a notification will also be sent by email in case the webhook request fails all the retries.  The email notification will be sent to the requesting user or their organization’s admin if part of one.
    
</dd>
</dl>

<dl>
<dd>

**X-Webhook-Authorization:** `string` optional — Optional custom header for webhook requests. Format: `Key:Value` (e.g., `Authorization:Bearer token123`). This will be sent as an HTTP header in the webhook call.
    
</dd>
</dl>

<dl>
<dd>

**file:** `core.file.Uploadable` optional — The PDF file to be processed. If this parameter is not provided, you must specify `file_id` to use a previously uploaded file.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfConvertToPng(request) -> Promise<ApifreaksApi.PdfConvertToPngResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API converts a given PDF file into a sequence of PNG images.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfConvertToPng({
    apiKey: "apiKey",
    file: fs.createReadStream("/path/to/file")
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfConvertToPngRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file_id:** `string` optional — The unique ID of a PDF file already uploaded to the API Freaks server. Use this as an alternative to uploading a new file directly.
    
</dd>
</dl>

<dl>
<dd>

**destroy:** `boolean` optional — If set to `true`, the input file(s) will be permanently deleted from the server immediately after the output PDF is generated.
    
</dd>
</dl>

<dl>
<dd>

**output:** `string` optional — The desired name for the output unrestricted PDF file. If not provided, a default name will be assigned.
    
</dd>
</dl>

<dl>
<dd>

**pages:** `string` optional — Specifies the pages or ranges at which to split the PDF. Accepts individual page numbers (e.g., '1') and/or page ranges (e.g., '4-2', 'last'). Ranges can be ascending or descending. Use commas to separate entries and hyphens for ranges. Alternatively, provide only one of the following keywords: 'even' (split at every even-numbered page), 'odd' (split at every odd-numbered page), 'last' (split at the last page only), or 'all' (split into single pages). Examples: '1,4-2,last', 'odd', 'all'. Mixing special keywords with specific pages/ranges is not allowed.
    
</dd>
</dl>

<dl>
<dd>

**resolution:** `number` optional — Specifies the resolution (in DPI) for the output images. Acceptable Range is from 20 to 1200.
    
</dd>
</dl>

<dl>
<dd>

**image_smoothing:** `string` optional — Determines the smoothing options to apply during image conversion. Valid values are 'none', 'all' or a combination of 'text', 'line', and 'image' (comma-separated).If not provided, no smoothing will be applied.
    
</dd>
</dl>

<dl>
<dd>

**profile:** `ApifreaksApi.PdfConvertToPngRequestProfile` optional — Specifies the color profile for the output PNG images. Acceptable values: bw (1-bit black & white, smallest size, no grayscale or color), gray (8-bit grayscale), rgb (24-bit RGB color, default), rgba (32-bit RGB color with alpha channel for transparency), 4-bit (4-bit indexed color, up to 16 colors, smaller size), or 8-bit (8-bit indexed color, up to 256 colors).
    
</dd>
</dl>

<dl>
<dd>

**webhook_url:** `string` optional — The URL to which the webhook notification will be sent after the task is completed.
    
</dd>
</dl>

<dl>
<dd>

**webhook_failure_notification:** `boolean` optional — If true, a notification will also be sent by email in case the webhook request fails all the retries.  The email notification will be sent to the requesting user or their organization’s admin if part of one.
    
</dd>
</dl>

<dl>
<dd>

**X-Webhook-Authorization:** `string` optional — Optional custom header for webhook requests. Format: `Key:Value` (e.g., `Authorization:Bearer token123`). This will be sent as an HTTP header in the webhook call.
    
</dd>
</dl>

<dl>
<dd>

**file:** `core.file.Uploadable` optional — The PDF file to be processed. If this parameter is not provided, you must specify `file_id` to use a previously uploaded file.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfConvertToJpg(request) -> Promise<ApifreaksApi.PdfConvertToJpgResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API converts a given PDF file into a sequence of JPG images.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfConvertToJpg({
    apiKey: "apiKey",
    file: fs.createReadStream("/path/to/file")
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfConvertToJpgRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file_id:** `string` optional — The unique ID of a PDF file already uploaded to the API Freaks server. Use this as an alternative to uploading a new file directly.
    
</dd>
</dl>

<dl>
<dd>

**destroy:** `boolean` optional — If set to `true`, the input file(s) will be permanently deleted from the server immediately after the output PDF is generated.
    
</dd>
</dl>

<dl>
<dd>

**output:** `string` optional — The desired name for the output unrestricted PDF file. If not provided, a default name will be assigned.
    
</dd>
</dl>

<dl>
<dd>

**quality:** `number` optional — Controls JPG compression quality. Higher values yield sharper images with larger file sizes.
    
</dd>
</dl>

<dl>
<dd>

**pages:** `string` optional — Specifies the pages or ranges at which to split the PDF. Accepts individual page numbers (e.g., '1') and/or page ranges (e.g., '4-2', 'last'). Ranges can be ascending or descending. Use commas to separate entries and hyphens for ranges. Alternatively, provide only one of the following keywords: 'even' (split at every even-numbered page), 'odd' (split at every odd-numbered page), 'last' (split at the last page only), or 'all' (split into single pages). Examples: '1,4-2,last', 'odd', 'all'. Mixing special keywords with specific pages/ranges is not allowed.
    
</dd>
</dl>

<dl>
<dd>

**resolution:** `number` optional — Specifies the resolution (in DPI) for the output images. Acceptable Range is from 20 to 1200.
    
</dd>
</dl>

<dl>
<dd>

**image_smoothing:** `string` optional — Determines the smoothing options to apply during image conversion. Valid values are 'none', 'all' or a combination of 'text', 'line', and 'image' (comma-separated).If not provided, no smoothing will be applied.
    
</dd>
</dl>

<dl>
<dd>

**profile:** `ApifreaksApi.PdfConvertToJpgRequestProfile` optional — Specifies the color profile for the output PNG images. Acceptable values: bw (1-bit black & white, smallest size, no grayscale or color), gray (8-bit grayscale), rgb (24-bit RGB color, default), rgba (32-bit RGB color with alpha channel for transparency), 4-bit (4-bit indexed color, up to 16 colors, smaller size), or 8-bit (8-bit indexed color, up to 256 colors).
    
</dd>
</dl>

<dl>
<dd>

**webhook_url:** `string` optional — The URL to which the webhook notification will be sent after the task is completed.
    
</dd>
</dl>

<dl>
<dd>

**webhook_failure_notification:** `boolean` optional — If true, a notification will also be sent by email in case the webhook request fails all the retries.  The email notification will be sent to the requesting user or their organization’s admin if part of one.
    
</dd>
</dl>

<dl>
<dd>

**X-Webhook-Authorization:** `string` optional — Optional custom header for webhook requests. Format: `Key:Value` (e.g., `Authorization:Bearer token123`). This will be sent as an HTTP header in the webhook call.
    
</dd>
</dl>

<dl>
<dd>

**file:** `core.file.Uploadable` optional — The PDF file to be processed. If this parameter is not provided, you must specify `file_id` to use a previously uploaded file.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfConvertToTiff(request) -> Promise<ApifreaksApi.PdfConvertToTiffResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API converts a given PDF file into a sequence of TIFF images. The output images can be saved as a single TIFF file, or as a sequence of TIFF files.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfConvertToTiff({
    apiKey: "apiKey",
    file: fs.createReadStream("/path/to/file")
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfConvertToTiffRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file_id:** `string` optional — The unique ID of a PDF file already uploaded to the API Freaks server. Use this as an alternative to uploading a new file directly.
    
</dd>
</dl>

<dl>
<dd>

**destroy:** `boolean` optional — If set to `true`, the input file(s) will be permanently deleted from the server immediately after the output PDF is generated.
    
</dd>
</dl>

<dl>
<dd>

**output:** `string` optional — The desired name for the output unrestricted PDF file. If not provided, a default name will be assigned.
    
</dd>
</dl>

<dl>
<dd>

**pages:** `string` optional — Specifies the pages or ranges at which to split the PDF. Accepts individual page numbers (e.g., '1') and/or page ranges (e.g., '4-2', 'last'). Ranges can be ascending or descending. Use commas to separate entries and hyphens for ranges. Alternatively, provide only one of the following keywords: 'even' (split at every even-numbered page), 'odd' (split at every odd-numbered page), 'last' (split at the last page only), or 'all' (split into single pages). Examples: '1,4-2,last', 'odd', 'all'. Mixing special keywords with specific pages/ranges is not allowed.
    
</dd>
</dl>

<dl>
<dd>

**resolution:** `number` optional — Specifies the resolution (in DPI) for the output images. Acceptable Range is from 20 to 1200.
    
</dd>
</dl>

<dl>
<dd>

**image_smoothing:** `string` optional — Determines the smoothing options to apply during image conversion. Valid values are 'none', 'all' or a combination of 'text', 'line', and 'image' (comma-separated).If not provided, no smoothing will be applied.
    
</dd>
</dl>

<dl>
<dd>

**profile:** `ApifreaksApi.PdfConvertToTiffRequestProfile` optional — Specifies the color profile for the output PNG images. Acceptable values: bw (1-bit black & white, smallest size, no grayscale or color), gray (8-bit grayscale), rgb (24-bit RGB color, default), rgba (32-bit RGB color with alpha channel for transparency), 4-bit (4-bit indexed color, up to 16 colors, smaller size), or 8-bit (8-bit indexed color, up to 256 colors).
    
</dd>
</dl>

<dl>
<dd>

**webhook_url:** `string` optional — The URL to which the webhook notification will be sent after the task is completed.
    
</dd>
</dl>

<dl>
<dd>

**webhook_failure_notification:** `boolean` optional — If true, a notification will also be sent by email in case the webhook request fails all the retries.  The email notification will be sent to the requesting user or their organization’s admin if part of one.
    
</dd>
</dl>

<dl>
<dd>

**X-Webhook-Authorization:** `string` optional — Optional custom header for webhook requests. Format: `Key:Value` (e.g., `Authorization:Bearer token123`). This will be sent as an HTTP header in the webhook call.
    
</dd>
</dl>

<dl>
<dd>

**file:** `core.file.Uploadable` optional — The PDF file to be processed. If this parameter is not provided, you must specify `file_id` to use a previously uploaded file.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfConvertToBmp(request) -> Promise<ApifreaksApi.PdfConvertToBmpResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Converts a PDF file to a BMP image.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfConvertToBmp({
    apiKey: "apiKey",
    file: fs.createReadStream("/path/to/file")
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfConvertToBmpRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file_id:** `string` optional — The unique ID of a PDF file already uploaded to the API Freaks server. Use this as an alternative to uploading a new file directly.
    
</dd>
</dl>

<dl>
<dd>

**destroy:** `boolean` optional — If set to `true`, the input file(s) will be permanently deleted from the server immediately after the output PDF is generated.
    
</dd>
</dl>

<dl>
<dd>

**output:** `string` optional — The desired name for the output unrestricted PDF file. If not provided, a default name will be assigned.
    
</dd>
</dl>

<dl>
<dd>

**pages:** `string` optional — Specifies the pages or ranges at which to split the PDF. Accepts individual page numbers (e.g., '1') and/or page ranges (e.g., '4-2', 'last'). Ranges can be ascending or descending. Use commas to separate entries and hyphens for ranges. Alternatively, provide only one of the following keywords: 'even' (split at every even-numbered page), 'odd' (split at every odd-numbered page), 'last' (split at the last page only), or 'all' (split into single pages). Examples: '1,4-2,last', 'odd', 'all'. Mixing special keywords with specific pages/ranges is not allowed.
    
</dd>
</dl>

<dl>
<dd>

**resolution:** `number` optional — Specifies the resolution (in DPI) for the output images. Acceptable Range is from 20 to 1200.
    
</dd>
</dl>

<dl>
<dd>

**image_smoothing:** `string` optional — Determines the smoothing options to apply during image conversion. Valid values are 'none', 'all' or a combination of 'text', 'line', and 'image' (comma-separated).If not provided, no smoothing will be applied.
    
</dd>
</dl>

<dl>
<dd>

**profile:** `ApifreaksApi.PdfConvertToBmpRequestProfile` optional — Specifies the color profile for the output PNG images. Acceptable values: bw (1-bit black & white, smallest size, no grayscale or color), gray (8-bit grayscale), rgb (24-bit RGB color, default), rgba (32-bit RGB color with alpha channel for transparency), 4-bit (4-bit indexed color, up to 16 colors, smaller size), or 8-bit (8-bit indexed color, up to 256 colors).
    
</dd>
</dl>

<dl>
<dd>

**webhook_url:** `string` optional — The URL to which the webhook notification will be sent after the task is completed.
    
</dd>
</dl>

<dl>
<dd>

**webhook_failure_notification:** `boolean` optional — If true, a notification will also be sent by email in case the webhook request fails all the retries.  The email notification will be sent to the requesting user or their organization’s admin if part of one.
    
</dd>
</dl>

<dl>
<dd>

**X-Webhook-Authorization:** `string` optional — Optional custom header for webhook requests. Format: `Key:Value` (e.g., `Authorization:Bearer token123`). This will be sent as an HTTP header in the webhook call.
    
</dd>
</dl>

<dl>
<dd>

**file:** `core.file.Uploadable` optional — The PDF file to be processed. If this parameter is not provided, you must specify `file_id` to use a previously uploaded file.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfConvertToGif(request) -> Promise<ApifreaksApi.PdfConvertToGifResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API converts a given PDF file into a sequence of GIF images.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfConvertToGif({
    apiKey: "apiKey",
    file: fs.createReadStream("/path/to/file")
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfConvertToGifRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file_id:** `string` optional — The unique ID of a PDF file already uploaded to the API Freaks server. Use this as an alternative to uploading a new file directly.
    
</dd>
</dl>

<dl>
<dd>

**destroy:** `boolean` optional — If set to `true`, the input file(s) will be permanently deleted from the server immediately after the output PDF is generated.
    
</dd>
</dl>

<dl>
<dd>

**output:** `string` optional — The desired name for the output unrestricted PDF file. If not provided, a default name will be assigned.
    
</dd>
</dl>

<dl>
<dd>

**pages:** `string` optional — Specifies the pages or ranges at which to split the PDF. Accepts individual page numbers (e.g., '1') and/or page ranges (e.g., '4-2', 'last'). Ranges can be ascending or descending. Use commas to separate entries and hyphens for ranges. Alternatively, provide only one of the following keywords: 'even' (split at every even-numbered page), 'odd' (split at every odd-numbered page), 'last' (split at the last page only), or 'all' (split into single pages). Examples: '1,4-2,last', 'odd', 'all'. Mixing special keywords with specific pages/ranges is not allowed.
    
</dd>
</dl>

<dl>
<dd>

**resolution:** `number` optional — Specifies the resolution (in DPI) for the output images. Acceptable Range is from 20 to 1200.
    
</dd>
</dl>

<dl>
<dd>

**image_smoothing:** `string` optional — Determines the smoothing options to apply during image conversion. Valid values are 'none', 'all' or a combination of 'text', 'line', and 'image' (comma-separated).If not provided, no smoothing will be applied.
    
</dd>
</dl>

<dl>
<dd>

**profile:** `ApifreaksApi.PdfConvertToGifRequestProfile` optional — Specifies the color profile for the output PNG images. Acceptable values: bw (1-bit black & white, smallest size, no grayscale or color), gray (8-bit grayscale), rgb (24-bit RGB color, default), rgba (32-bit RGB color with alpha channel for transparency), 4-bit (4-bit indexed color, up to 16 colors, smaller size), or 8-bit (8-bit indexed color, up to 256 colors).
    
</dd>
</dl>

<dl>
<dd>

**webhook_url:** `string` optional — The URL to which the webhook notification will be sent after the task is completed.
    
</dd>
</dl>

<dl>
<dd>

**webhook_failure_notification:** `boolean` optional — If true, a notification will also be sent by email in case the webhook request fails all the retries.  The email notification will be sent to the requesting user or their organization’s admin if part of one.
    
</dd>
</dl>

<dl>
<dd>

**X-Webhook-Authorization:** `string` optional — Optional custom header for webhook requests. Format: `Key:Value` (e.g., `Authorization:Bearer token123`). This will be sent as an HTTP header in the webhook call.
    
</dd>
</dl>

<dl>
<dd>

**file:** `core.file.Uploadable` optional — The PDF file to be processed. If this parameter is not provided, you must specify `file_id` to use a previously uploaded file.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfUploadResources(request) -> Promise<ApifreaksApi.PdfUploadResourcesResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API uploads multiple PDF files to the API Freaks server and generates their unique file IDs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfUploadResources({
    apiKey: "apiKey",
    file: [fs.createReadStream("/path/to/file")]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfUploadResourcesRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file:** `core.file.Uploadable[]` optional — The PDF files to be uploaded to the API Freaks server. Multiple files can be provided in an array.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfUploadBinary(uploadable, request) -> Promise<ApifreaksApi.PdfUploadBinaryResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API uploads PDF files to the API Freaks server in binary format.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfUploadBinary(fs.createReadStream("/path/to/file"), {
    apiKey: "apiKey",
    file_name: "file_name"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**uploadable:** `core.file.Uploadable` — File sent as the binary request body (a stream, Buffer, Blob or File).
    
</dd>
</dl>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfUploadBinaryRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file_name:** `string` — The desired name for the uploaded PDF file. This name will be used for storage on the server. **NOTE**: Please ensure file_name has extension `.pdf`.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfDownloadResource(request) -> Promise<core.BinaryResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API downloads PDF files or ZIP archives from the server using their unique resource ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfDownloadResource({
    apiKey: "apiKey",
    resource_id: "resource_id"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfDownloadResourceRequestFormat` optional
    
</dd>
</dl>

<dl>
<dd>

**resource_id:** `string` — The unique identifier of the file or ZIP archive to download.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfGetTaskStatus(request) -> Promise<ApifreaksApi.PdfGetTaskStatusResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API checks the status of a previously initiated PDF processing task using its unique task ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfGetTaskStatus({
    apiKey: "apiKey",
    task_id: "task_id"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfGetTaskStatusRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**task_id:** `string` — The unique ID of the PDF processing task for which the status is requested.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfGetFileStatus(request) -> Promise<ApifreaksApi.PdfGetFileStatusResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API checks the status of a PDF file using its unique file ID, providing information about its creation and potential deletion time.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfGetFileStatus({
    apiKey: "apiKey",
    file_id: "file_id"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfGetFileStatusRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file_id:** `string` — The unique ID of the file whose status is requested.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfListFiles(request) -> Promise<ApifreaksApi.PdfListFilesResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API retrieves a list of all PDF files uploaded and generated by a specific user. Please note that if the user is part of an organization, only the Organization Administrator can access this endpoint. Organization Members cannot access this endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfListFiles({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfListFilesRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfDeleteFile(request) -> Promise<ApifreaksApi.PdfDeleteFileResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This API deletes a PDF file using its unique file ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfDeleteFile({
    apiKey: "apiKey",
    file_id: "file_id"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.PdfDeleteFileRequestFormat` optional — Specifies the desired format for the API response. Choose 'json' for a JSON object or 'xml' for an XML structure.
    
</dd>
</dl>

<dl>
<dd>

**file_id:** `string` — The unique ID of the file to be deleted.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.pdfGenerateFromTemplate(request) -> Promise<ApifreaksApi.PdfGenerateFromTemplateResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Renders the template identified by template_id with the JSON data supplied in the request body (or fetched from data_url). Returns a hosted URL for the generated PDF. Provide either a request body or a data_url; one of the two is required. The keys of the data object are the fields you bound when you designed the template in the APIFreaks PDF Template Builder, so the exact shape is up to you. Pin the version parameter to a specific template version (e.g. version=v2) so later design changes never touch what is already live; omit it to use the latest version.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.pdfGenerateFromTemplate({
    apiKey: "apiKey",
    template_id: "template_id",
    body: {
        "candidate_name": "Ava Thompson",
        "candidate_title": "Senior Operations Analyst",
        "email": "ava.thompson@example.com",
        "phone": "+1 (555) 381-2048",
        "city": "Austin, TX",
        "portfolio_url": "portfolio.example.com",
        "profile_summary": "Analytical operations professional with 8+ years of experience improving reporting pipelines, streamlining process documentation, and coordinating cross-functional delivery for distributed teams across multiple time zones.",
        "company_name": "Northwind Logistics",
        "job_title": "Operations Analyst",
        "employment_period": "2021 - Present",
        "job_achievement_1": "Led weekly KPI reporting for finance, fulfillment, and customer success stakeholders across three business units.",
        "job_achievement_2": "Reduced manual reconciliation work by 35% through workflow redesign and documentation automation.",
        "job_achievement_3": "Spearheaded a cross-team initiative that improved on-time delivery metrics by 18% within six months.",
        "skills": [
            {
                "skill": "Process Improvement",
                "level": "Advanced",
                "years": "7"
            },
            {
                "skill": "Stakeholder Reporting",
                "level": "Expert",
                "years": "8"
            },
            {
                "skill": "Cross-functional Coordination",
                "level": "Advanced",
                "years": "5"
            },
            {
                "skill": "Workflow Documentation",
                "level": "Advanced",
                "years": "6"
            }
        ],
        "degree": "B.S. in Information Systems",
        "institution": "University of Texas",
        "graduation_year": "2018",
        "certification_1": "Certified Business Analysis Professional (CBAP)",
        "certification_2": "Six Sigma Green Belt",
        "languages": "English (Native), Spanish (Professional)"
    }
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**template_id:** `string` — The template to render, from the APIFreaks PDF Template Builder. Copy it from your dashboard when you save the template.
    
</dd>
</dl>

<dl>
<dd>

**version:** `string` optional — Template version to render, e.g. v2. Must start with v. Omit this parameter entirely to use the latest version; the literal value 'latest' is not accepted by the API.
    
</dd>
</dl>

<dl>
<dd>

**data_url:** `string` optional — A URL the API fetches your JSON data from, instead of the request body. Provide this when you are not sending a request body.
    
</dd>
</dl>

<dl>
<dd>

**body:** `Record<string, unknown>` — Free-form JSON object whose keys map to the fields bound in the template.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkPdfGenerateFromTemplate(request) -> Promise<ApifreaksApi.BulkPdfGenerateFromTemplateResponseItem[]></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload a CSV file where each row is one record. The API generates one PDF per row and returns an array of results, each with its own pdf_url. Rows are processed independently, so a failure in one row does not block the rest of the batch. The response gives a row-by-row breakdown of which PDFs succeeded and which failed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bulkPdfGenerateFromTemplate({
    file: fs.createReadStream("/path/to/your/file"),
    apiKey: "apiKey",
    template_id: "template_id"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**template_id:** `string` — The template to render, from the APIFreaks PDF Template Builder. Copy it from your dashboard when you save the template.
    
</dd>
</dl>

<dl>
<dd>

**version:** `string` optional — Template version to render, e.g. v2. Must start with v. Omit this parameter entirely to use the latest version; the literal value 'latest' is not accepted by the API.
    
</dd>
</dl>

<dl>
<dd>

**file:** `core.file.Uploadable` — A CSV file uploaded as form-data where each row is one record. One PDF is generated per row.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.screenshotCapture(request) -> Promise<ApifreaksApi.ScreenshotCaptureResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Capture full-page screenshots and videos of websites with advanced options like device simulation, custom code injection, cookie banner blocking, and scrollable content recording.
Supports multiple output formats including JSON, image, GIF, MP4, and WebM.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.screenshotCapture({
    apiKey: "apiKey",
    url: "url"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**output:** `ApifreaksApi.ScreenshotCaptureRequestOutput` optional — Output format for screenshot results. The SDKs support only `json`, which returns metadata with the captured file's URL in `screenshot`; download the file from that URL. (The API's `output=image`, which returns the raw file, is not supported by the SDK methods.)
    
</dd>
</dl>

<dl>
<dd>

**file_type:** `ApifreaksApi.ScreenshotCaptureRequestFileType` optional — File type for screenshot output
    
</dd>
</dl>

<dl>
<dd>

**url:** `string` — URLs to capture screenshots of
    
</dd>
</dl>

<dl>
<dd>

**width:** `number` optional — Browser viewport width in pixels
    
</dd>
</dl>

<dl>
<dd>

**height:** `number` optional — Browser viewport height in pixels
    
</dd>
</dl>

<dl>
<dd>

**full_page:** `boolean` optional — Capture a full-page screenshot
    
</dd>
</dl>

<dl>
<dd>

**fresh:** `boolean` optional — Bypass cache and take a fresh screenshot
    
</dd>
</dl>

<dl>
<dd>

**no_cookie_banners:** `boolean` optional — Remove cookie banners from the screenshot
    
</dd>
</dl>

<dl>
<dd>

**enable_caching:** `boolean` optional — Enable caching for repeated requests
    
</dd>
</dl>

<dl>
<dd>

**block_ads:** `boolean` optional — Block advertisements on the page
    
</dd>
</dl>

<dl>
<dd>

**block_chat_widgets:** `boolean` optional — Block chat widget scripts from loading
    
</dd>
</dl>

<dl>
<dd>

**extract_text:** `boolean` optional — Extract visible text from the page
    
</dd>
</dl>

<dl>
<dd>

**extract_html:** `boolean` optional — Extract HTML content of the page
    
</dd>
</dl>

<dl>
<dd>

**destroy_screenshot:** `boolean` optional — Auto-destroy screenshot after fetch
    
</dd>
</dl>

<dl>
<dd>

**lazy_load:** `boolean` optional — Enable lazy-loading content before screenshot
    
</dd>
</dl>

<dl>
<dd>

**retina:** `boolean` optional — Capture screenshot in high-DPI (Retina) mode
    
</dd>
</dl>

<dl>
<dd>

**dark_mode:** `boolean` optional — Render page in dark mode
    
</dd>
</dl>

<dl>
<dd>

**block_tracking:** `boolean` optional — Block common user-tracking scripts
    
</dd>
</dl>

<dl>
<dd>

**enable_incognito:** `boolean` optional — Enable private/incognito mode for browser session
    
</dd>
</dl>

<dl>
<dd>

**omit_background:** `boolean` optional — Omit background color (transparent background)
    
</dd>
</dl>

<dl>
<dd>

**thumbnail_width:** `number` optional — Thumbnail width in pixels
    
</dd>
</dl>

<dl>
<dd>

**adjust_top:** `number` optional — Adjust top in pixels
    
</dd>
</dl>

<dl>
<dd>

**wait_for_event:** `ApifreaksApi.ScreenshotCaptureRequestWaitForEvent` optional — Wait for a specific load event before capturing the screenshot.
    
</dd>
</dl>

<dl>
<dd>

**grayscale:** `number` optional — Range:0 to 100 for grayscale filter
    
</dd>
</dl>

<dl>
<dd>

**delay:** `number` optional — How many milliseconds to wait before taking the screenshot
    
</dd>
</dl>

<dl>
<dd>

**timeout:** `number` optional — Maximum timeout in milliseconds. Defalut is `10,000`
    
</dd>
</dl>

<dl>
<dd>

**ttl:** `number` optional — Number of seconds the screenshot should be cached
    
</dd>
</dl>

<dl>
<dd>

**clip[x]:** `number` optional — X position of the clipping rectangle in pixels
    
</dd>
</dl>

<dl>
<dd>

**clip[y]:** `number` optional — Y position of the clipping rectangle in pixels
    
</dd>
</dl>

<dl>
<dd>

**clip[width]:** `number` optional — Width of the clipping rectangle in pixels
    
</dd>
</dl>

<dl>
<dd>

**clip[height]:** `number` optional — Height of the clipping rectangle in pixels
    
</dd>
</dl>

<dl>
<dd>

**css_url:** `string` optional — URL to CSS file
    
</dd>
</dl>

<dl>
<dd>

**css:** `string` optional — Your custom CSS code
    
</dd>
</dl>

<dl>
<dd>

**js_url:** `string` optional — URL to JS file
    
</dd>
</dl>

<dl>
<dd>

**js:** `string` optional — Your JS code
    
</dd>
</dl>

<dl>
<dd>

**block_js:** `boolean` optional — Block Scripts
    
</dd>
</dl>

<dl>
<dd>

**block_stylesheets:** `boolean` optional — Block Stylesheets
    
</dd>
</dl>

<dl>
<dd>

**block_images:** `boolean` optional — Block Images
    
</dd>
</dl>

<dl>
<dd>

**block_media:** `boolean` optional — Block Media
    
</dd>
</dl>

<dl>
<dd>

**block_font:** `boolean` optional — Block Fonts
    
</dd>
</dl>

<dl>
<dd>

**block_text_track:** `boolean` optional — Block Text Tracks
    
</dd>
</dl>

<dl>
<dd>

**block_xhr:** `boolean` optional — Block XHR Requests
    
</dd>
</dl>

<dl>
<dd>

**block_fetch:** `boolean` optional — Block Fetch Requests
    
</dd>
</dl>

<dl>
<dd>

**block_event_source:** `boolean` optional — Block Event Source
    
</dd>
</dl>

<dl>
<dd>

**block_web_socket:** `boolean` optional — Block Web Sockets
    
</dd>
</dl>

<dl>
<dd>

**block_manifest:** `boolean` optional — Block Manifest
    
</dd>
</dl>

<dl>
<dd>

**block_specific_requests:** `string` optional — Comma- or newline-separated list of specific requests to block. Each line and comma are treated as separate requests for processing. Example: https://example.com, https://example.js
    
</dd>
</dl>

<dl>
<dd>

**blur_selector:** `string` optional — Comma-separated list of indexed CSS selectors to blur. Format: `index:<selector>`, e.g., `0:.banner,1:#ads`.
    
</dd>
</dl>

<dl>
<dd>

**remove_selector:** `string` optional — Comma-separated list of indexed CSS selectors to blur. Format: `index:<selector>`, e.g., `0:.banner,1:#ads`.
    
</dd>
</dl>

<dl>
<dd>

**result_file_name:** `string` optional — Specify a meaningful & unique file name to easily identify the screenshot result. Avoid using spaces or special characters; use hyphens or underscores to separate words.
    
</dd>
</dl>

<dl>
<dd>

**scrolling_screenshot:** `boolean` optional — *`Scrolling Screenshot`**: Capture a long scrolling screenshot. When true, disable `fullPage` and `freshScreenshot`.
    
</dd>
</dl>

<dl>
<dd>

**scroll_speed:** `ApifreaksApi.ScreenshotCaptureRequestScrollSpeed` optional — Speed of scrolling during the screenshot.
    
</dd>
</dl>

<dl>
<dd>

**scroll_back:** `boolean` optional — If true, the scroll will reverse back to the top after reaching the bottom.
    
</dd>
</dl>

<dl>
<dd>

**start_immediately:** `boolean` optional — If true, the scrolling capture will start immediately upon page load.
    
</dd>
</dl>

<dl>
<dd>

**multiple_scrolling:** `boolean` optional — If true, multiple scrolling screenshots will be taken at different viewport sizes.
    
</dd>
</dl>

<dl>
<dd>

**sizes:** `string | string[]` optional — Comma-separated list of viewport sizes in the format index:XXw:YYh. Example: sizes=0:120w:300h,1:240w:500h
    
</dd>
</dl>

<dl>
<dd>

**duration:** `number` optional — Duration in seconds for the scrolling capture. Acceptable range: 0 to 100 seconds.
    
</dd>
</dl>

<dl>
<dd>

**fail_on_error:** `boolean` optional
    
</dd>
</dl>

<dl>
<dd>

**longitude:** `number` optional
    
</dd>
</dl>

<dl>
<dd>

**latitude:** `number` optional
    
</dd>
</dl>

<dl>
<dd>

**proxy:** `string` optional
    
</dd>
</dl>

<dl>
<dd>

**headers:** `string` optional
    
</dd>
</dl>

<dl>
<dd>

**cookies:** `string` optional
    
</dd>
</dl>

<dl>
<dd>

**scroll_to_element:** `string` optional
    
</dd>
</dl>

<dl>
<dd>

**selector:** `string` optional
    
</dd>
</dl>

<dl>
<dd>

**user_agent:** `string` optional
    
</dd>
</dl>

<dl>
<dd>

**accept_languages:** `string` optional
    
</dd>
</dl>

<dl>
<dd>

**custom_html:** `string` optional
    
</dd>
</dl>

<dl>
<dd>

**image_quality:** `number` optional
    
</dd>
</dl>

<dl>
<dd>

**captcha_error:** `string` optional — CSS selector of the message shown for a wrong answer. While it is visible, the solver tries again.
    
</dd>
</dl>

<dl>
<dd>

**captcha_image:** `string` optional — CSS selector of the captcha picture. Required when solve_captcha is true.
    
</dd>
</dl>

<dl>
<dd>

**captcha_input:** `string` optional — CSS selector of the box the answer is typed into. Required when solve_captcha is true.
    
</dd>
</dl>

<dl>
<dd>

**captcha_refresh:** `string` optional — CSS selector of the control that loads a new captcha picture before the next try.
    
</dd>
</dl>

<dl>
<dd>

**captcha_retries:** `number` optional — Number of guesses the solver makes, from 1 to 5.
    
</dd>
</dl>

<dl>
<dd>

**captcha_submit:** `string` optional — CSS selector of the button to click after the answer is typed.
    
</dd>
</dl>

<dl>
<dd>

**classic_proxy:** `boolean` optional — Loads the page through a datacenter proxy. Adds 20 credits per request. Ignored when premium_proxy is true or a custom proxy is set.
    
</dd>
</dl>

<dl>
<dd>

**click_recursion:** `number` optional — Number of times to click the selector (when set via `selector_to_click`).
    
</dd>
</dl>

<dl>
<dd>

**country:** `string` optional — Two-letter country code, such as US or DE, for the exit address of classic_proxy or premium_proxy. Ignored when you send your own proxy. Any two-letter code is sent, including one that is not listed. Classic proxy countries: BG, GE, DE, HN, MD, UA, GB, US. Premium proxy countries: AF, AL, DZ, AO, AG, AR, AM, AW, AU, AT, AZ, BS, BH, BD, BB, BY, BE, BZ, BJ, BT, BO, BQ, BA, BW, BR, BN, BG, BF, BI, CV, KH, CM, CA, KY, CF, TD, CL, CN, CO, KM, CG, CR, CI, HR, CU, CW, CY, CZ, CD, DK, DJ, DM, DO, EC, EG, SV, GQ, EE, SZ, ET, FO, FJ, FI, FR, GF, PF, GA, GM, GE, DE, GH, GI, GR, GL, GD, GP, GU, GT, GG, GN, GW, GY, HT, HN, HK, HU, IS, IN, ID, IR, IQ, IE, IL, IT, JM, JP, JE, JO, KZ, KE, XK, KW, KG, LA, LV, LB, LS, LR, LY, LT, MO, MG, MW, MY, MV, ML, MT, MQ, MR, MU, YT, MX, MD, MN, ME, MA, MZ, MM, NA, NP, NL, NC, NZ, NI, NE, NG, MK, NO, OM, PK, PS, PA, PG, PY, PE, PH, PL, PT, PR, QA, RE, RO, RU, RW, KN, LC, VC, WS, SA, SN, RS, SC, SL, SG, SK, SI, SB, SO, ZA, KR, SS, ES, LK, SD, SR, SE, CH, SY, TW, TJ, TZ, TH, TL, TG, TO, TT, TN, TR, TM, UG, UA, AE, GB, US, UY, UZ, VE, VN, YE, ZM, ZW.
    
</dd>
</dl>

<dl>
<dd>

**extract_markdown:** `boolean` optional — Extracts rendered page content as a structured .md (Markdown) file. Preserves headings, lists, links. Only with output=json.
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.ScreenshotCaptureRequestFormat` optional — Response format: json (default).
    
</dd>
</dl>

<dl>
<dd>

**get_image_urls:** `boolean` optional — Extracts all image URLs from the rendered DOM and returns them in structured format. Only with output=json.
    
</dd>
</dl>

<dl>
<dd>

**gpu:** `boolean` optional — Renders the page with a GPU, including WebGL and canvas content. Adds 20 credits per request.
    
</dd>
</dl>

<dl>
<dd>

**markdown:** `string` optional — Markdown to render instead of loading a URL. Works like custom_html, so you can capture a README or notes without hosting a page.
    
</dd>
</dl>

<dl>
<dd>

**ocr_model:** `ApifreaksApi.ScreenshotCaptureRequestOcrModel` optional — Recognition model used by the captcha solver: mini-ocr-v1 (default) or ocr-v1.
    
</dd>
</dl>

<dl>
<dd>

**pdf_options[format]:** `ApifreaksApi.ScreenshotCaptureRequestPdfOptionsFormat` optional — Paper size of the PDF. Applies when file_type is PDF. Without it, width and height are used if set, otherwise the page renders as one long page: A0, A1, A2, A3, A4, A5, A6, Letter, Legal, Tabloid, or Ledger.
    
</dd>
</dl>

<dl>
<dd>

**pdf_options[landscape]:** `boolean` optional — Renders the PDF in landscape orientation, swapping the width and height of the paper size. Applies when file_type is PDF.
    
</dd>
</dl>

<dl>
<dd>

**pdf_options[media]:** `ApifreaksApi.ScreenshotCaptureRequestPdfOptionsMedia` optional — CSS media type used to render the PDF: print or screen.
    
</dd>
</dl>

<dl>
<dd>

**pdf_options[page_range]:** `string` optional — Pages to keep in the PDF, as start-end, for example 1-3 or 5-5. Pages are rendered first and then trimmed. Has no effect on a single-page PDF. Applies when file_type is PDF.
    
</dd>
</dl>

<dl>
<dd>

**pdf_options[print_background]:** `boolean` optional — Includes background colors and images in the PDF. Applies when file_type is PDF.
    
</dd>
</dl>

<dl>
<dd>

**premium_proxy:** `boolean` optional — Loads the page through a residential proxy. Adds 200 credits per request. Used instead of classic_proxy.
    
</dd>
</dl>

<dl>
<dd>

**scroll_delay:** `number` optional — Delay in milliseconds between scroll steps when `lazy_load` is enabled. Use higher values for heavy pages.
    
</dd>
</dl>

<dl>
<dd>

**selector_to_click:** `string` optional — CSS selector for an element to click before capturing the screenshot. Useful for opening dropdowns, modals, or triggering content.
    
</dd>
</dl>

<dl>
<dd>

**solve_captcha:** `boolean` optional — Solves a captcha made of text drawn in a picture, then takes the screenshot. Requires captcha_image and captcha_input. Adds 20 credits per request.
    
</dd>
</dl>

<dl>
<dd>

**stealth:** `boolean` optional — Makes the browser look like a regular visitor for pages that block automated traffic. No extra credits.
    
</dd>
</dl>

<dl>
<dd>

**timezone:** `string` optional — IANA timezone the browser uses while rendering, such as Asia/Karachi or Europe/London. Useful for clocks and localized dates.
    
</dd>
</dl>

<dl>
<dd>

**video:** `boolean` optional — Records visible viewport only for a specified duration. Use with `duration` parameter. Ideal for dashboards and animations.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkScreenshotCapture(request) -> Promise<ApifreaksApi.BulkScreenshotCaptureResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Our Bulk Screenshot API allows you to capture screenshots of multiple webpages simultaneously, saving you time and effort. Instead of manually capturing each page one by one, you can batch process URLs and receive high-quality screenshots in the format you choose.
 Maximum `50 URLs` per request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bulkScreenshotCapture({
    apiKey: "apiKey",
    urls: [{
            url: "url"
        }]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.BulkScreenshotCaptureRequestFormat` optional
    
</dd>
</dl>

<dl>
<dd>

**urls:** `ApifreaksApi.BulkScreenshotCaptureRequest.Urls.Item[]` — List of website URLs to capture screenshots of
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.currencyLatestRates(request) -> Promise<ApifreaksApi.CurrencyLatestRatesResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get live forex rates for all world currencies with customizable update frequency
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.currencyLatestRates({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CurrencyLatestRatesRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**base:** `string` optional — Base currency for rate calculations
    
</dd>
</dl>

<dl>
<dd>

**symbols:** `string | string[]` optional — Comma separated list of desired currency codes
    
</dd>
</dl>

<dl>
<dd>

**updates:** `ApifreaksApi.CurrencyLatestRatesRequestUpdates` optional — Exchange rates update period (1d=daily, 1h=hourly, 10m=10 minutes, 1m=1 minute)
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.currencyHistoricalRates(request) -> Promise<ApifreaksApi.CurrencyHistoricalRatesResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get historical exchange rates for any specific date
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.currencyHistoricalRates({
    apiKey: "apiKey",
    date: "2023-01-15"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CurrencyHistoricalRatesRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**base:** `string` optional — Base currency for rate calculations
    
</dd>
</dl>

<dl>
<dd>

**symbols:** `string | string[]` optional — Comma separated list of desired currency codes
    
</dd>
</dl>

<dl>
<dd>

**date:** `string` — Specific date in YYYY-MM-DD format
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.currencyConvertLatest(request) -> Promise<ApifreaksApi.CurrencyConvertLatestResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Convert amount between currencies using the latest exchange rates
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.currencyConvertLatest({
    apiKey: "apiKey",
    from: "from",
    to: "to"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CurrencyConvertLatestRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**from:** `string` — Source currency code
    
</dd>
</dl>

<dl>
<dd>

**to:** `string` — Target currency code
    
</dd>
</dl>

<dl>
<dd>

**amount:** `number` optional — Amount to convert
    
</dd>
</dl>

<dl>
<dd>

**updates:** `ApifreaksApi.CurrencyConvertLatestRequestUpdates` optional — Exchange rates update period (1d=daily, 1h=hourly, 10m=10 minutes, 1m=1 minute)
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.currencyConvertHistorical(request) -> Promise<ApifreaksApi.CurrencyConvertHistoricalResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Convert amount between currencies using historical rates
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.currencyConvertHistorical({
    apiKey: "apiKey",
    from: "from",
    to: "to",
    date: "2023-01-15"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CurrencyConvertHistoricalRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**from:** `string` — From currency symbol
    
</dd>
</dl>

<dl>
<dd>

**to:** `string` — To currency symbol
    
</dd>
</dl>

<dl>
<dd>

**amount:** `number` optional — The Amount to be converted
    
</dd>
</dl>

<dl>
<dd>

**date:** `string` — specific date (format YYYY-MM-DD) of which exchange rates is used.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.currencyTimeSeries(request) -> Promise<ApifreaksApi.CurrencyTimeSeriesResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get exchange rates for a time range
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.currencyTimeSeries({
    apiKey: "apiKey",
    startDate: "2023-01-15"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CurrencyTimeSeriesRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**startDate:** `string` — Start date (format YYYY-MM-DD) of the preferred time frame
    
</dd>
</dl>

<dl>
<dd>

**endDate:** `string` optional — End date (format YYYY-MM-DD) of the preferred time frame
    
</dd>
</dl>

<dl>
<dd>

**base:** `string` optional — Base currency
    
</dd>
</dl>

<dl>
<dd>

**symbols:** `string | string[]` optional — comma separated list of desired currencies/ commodities symbols
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.currencyFluctuation(request) -> Promise<ApifreaksApi.CurrencyFluctuationResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get currency fluctuation data for a time period
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.currencyFluctuation({
    apiKey: "apiKey",
    startDate: "2023-01-15",
    base: "USD"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CurrencyFluctuationRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**startDate:** `string` — Start date (format YYYY-MM-DD) of the preferred time frame
    
</dd>
</dl>

<dl>
<dd>

**endDate:** `string` optional — End date (format YYYY-MM-DD) of the preferred time frame
    
</dd>
</dl>

<dl>
<dd>

**base:** `string` optional — Base currency
    
</dd>
</dl>

<dl>
<dd>

**symbols:** `string | string[]` optional — comma separated list of desired currencies/ commodities symbols
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.currencyConvertByIp(request) -> Promise<ApifreaksApi.CurrencyConvertByIpResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Convert amount using user's location
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.currencyConvertByIp({
    apiKey: "apiKey",
    from: "from"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CurrencyConvertByIpRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**updates:** `ApifreaksApi.CurrencyConvertByIpRequestUpdates` optional — Exchange rates update period (1d=daily, 1h=hourly, 10m=10 minutes, 1m=1 minute)
    
</dd>
</dl>

<dl>
<dd>

**from:** `string` — From currency symbol
    
</dd>
</dl>

<dl>
<dd>

**ip:** `string` optional — IPv4 or IPv6 geolocated currency
    
</dd>
</dl>

<dl>
<dd>

**amount:** `number` optional — Amount to convert
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.currencySupported(request) -> Promise<ApifreaksApi.CurrencySupportedResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get list of all supported currencies with their metadata
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.currencySupported({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CurrencySupportedRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.currencySymbols(request) -> Promise<ApifreaksApi.CurrencySymbolsResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get currency symbols and codes
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.currencySymbols({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CurrencySymbolsRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.currencyHistoricalLimits(request) -> Promise<ApifreaksApi.CurrencyHistoricalLimitsResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about historical data availability and limits
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.currencyHistoricalLimits({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CurrencyHistoricalLimitsRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.commodityLatestRates(request) -> Promise<ApifreaksApi.CommodityLatestRatesResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get live commodity rates with customizable update frequency
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.commodityLatestRates({
    apiKey: "apiKey",
    symbols: ["symbols"],
    updates: "10m"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CommodityLatestRatesRequestFormat` optional — Format of the Response
    
</dd>
</dl>

<dl>
<dd>

**symbols:** `string | string[]` optional — Comma separated list of desired commodities symbols *(e.g. XAU,XAG,WTI,BRENT)* **Required**
    
</dd>
</dl>

<dl>
<dd>

**updates:** `ApifreaksApi.CommodityLatestRatesRequestUpdates` — Exchange rates update period. Possible values are: (1) `10m` - 10 minute update (2) `1m` - 1 minute update **Required**
    
</dd>
</dl>

<dl>
<dd>

**quote:** `string` optional — Specifies the target currency for the exchange rate; default quote currency is the market currency of commodity *(e.g. USD, EUR, INR)*
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.commodityHistoricalRates(request) -> Promise<ApifreaksApi.CommodityHistoricalRatesResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get historical commodity rates for a specific date
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.commodityHistoricalRates({
    apiKey: "apiKey",
    date: "2023-01-15",
    symbols: ["symbols"]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CommodityHistoricalRatesRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**date:** `string` — Historical date (YYYY-MM-DD)
    
</dd>
</dl>

<dl>
<dd>

**symbols:** `string | string[]` optional — Comma-separated list of commodity symbols
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.commodityFluctuation(request) -> Promise<ApifreaksApi.CommodityFluctuationResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get commodity price fluctuation data for a time period
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.commodityFluctuation({
    apiKey: "apiKey",
    symbols: ["symbols"],
    startDate: "2023-01-15",
    endDate: "2023-01-15"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CommodityFluctuationRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**symbols:** `string | string[]` optional — Comma-separated list of commodity symbols
    
</dd>
</dl>

<dl>
<dd>

**startDate:** `string` — Start date (YYYY-MM-DD)
    
</dd>
</dl>

<dl>
<dd>

**endDate:** `string` — End date (YYYY-MM-DD)
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.commodityTimeSeries(request) -> Promise<ApifreaksApi.CommodityTimeSeriesResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get commodity rates for a time range
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.commodityTimeSeries({
    apiKey: "apiKey",
    symbols: ["symbols"],
    startDate: "2023-01-15",
    endDate: "2023-01-15"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CommodityTimeSeriesRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**symbols:** `string | string[]` optional — Comma-separated list of commodity symbols
    
</dd>
</dl>

<dl>
<dd>

**startDate:** `string` — Start date (YYYY-MM-DD)
    
</dd>
</dl>

<dl>
<dd>

**endDate:** `string` — End date (YYYY-MM-DD)
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.commoditySymbols(request) -> Promise<ApifreaksApi.CommoditySymbolsResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get list of supported commodities
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.commoditySymbols({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CommoditySymbolsRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vatSupportedCountries(request) -> Promise<ApifreaksApi.VatSupportedCountriesResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of supported countries.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.vatSupportedCountries({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.VatSupportedCountriesRequestFormat` optional — Format of the response. Default is JSON.
    
</dd>
</dl>

<dl>
<dd>

**type:** `ApifreaksApi.VatSupportedCountriesRequestType` optional — Which list to return: VAT (`VAT_Supported_Countries_And_States`), IBAN (`IBAN_Supported_Countries`) or SWIFT (`SWIFT_Supported_Countries`). Each value returns only its own list. If omitted (or unknown), all three lists are returned.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vatRateByIp(request) -> Promise<ApifreaksApi.VatRateByIpResponseItem[]></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches VAT rate based on the specified or originating IP address.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.vatRateByIp({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.VatRateByIpRequestFormat` optional — Specify the desired response format. Options: 'json' (default) or 'xml'.
    
</dd>
</dl>

<dl>
<dd>

**ipAddress:** `string` optional — IPv4 or IPv6 address to look up VAT rate for. If omitted, the originating IP address will be used.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vatRateByCountry(request) -> Promise<ApifreaksApi.VatRateByCountryResponseItem[]></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches VAT rates for a single country or state provided via query parameters.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.vatRateByCountry({
    apiKey: "apiKey",
    country: "country"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.VatRateByCountryRequestFormat` optional — Specify the desired response format. Options: 'json' (default) or 'xml'.
    
</dd>
</dl>

<dl>
<dd>

**country:** `string` — Country identifier in Alpha-2 (PK), Alpha-3 (PAK), or full name (Pakistan). Combine with the optional "state" query for sub-national VAT; values are case-insensitive and may use underscores instead of spaces.
    
</dd>
</dl>

<dl>
<dd>

**state:** `string` optional — Optional state or region in Alpha-2 (NY) or full name (New_York). Use with "country" for state-level VAT; values are case-insensitive and may use underscores.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkVatRateByCountry(request) -> Promise<ApifreaksApi.BulkVatRateByCountryResponseItem[]></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves VAT details for multiple countries or country-state combinations in a single request. Maximum of `100` entries per request are allowed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bulkVatRateByCountry({
    apiKey: "apiKey",
    countries: [{
            country: "PAK"
        }, {
            country: "United_States",
            state: "New_York"
        }]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.BulkVatRateByCountryRequestFormat` optional — Specify the desired response format. Options: 'json' (default) or 'xml'.
    
</dd>
</dl>

<dl>
<dd>

**countries:** `ApifreaksApi.BulkVatRateByCountryRequest.Countries.Item[]`
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vatValidate(request) -> Promise<ApifreaksApi.VatValidateResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Validates an EU or UK VAT number and returns registration status details.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.vatValidate({
    apiKey: "apiKey",
    vatNumber: "vatNumber"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.VatValidateRequestFormat` optional — Specify the desired response format. Options: 'json' (default) or 'xml'.
    
</dd>
</dl>

<dl>
<dd>

**vatNumber:** `string` — EU or UK VAT number to validate.
    
</dd>
</dl>

<dl>
<dd>

**requesterVatNumber:** `string` optional — Requester EU or UK VAT number.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ibanValidate(request) -> Promise<ApifreaksApi.IbanValidateResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Checks an IBAN for structural validity, checksum accuracy, and bank metadata.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.ibanValidate({
    apiKey: "apiKey",
    iban: "iban"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.IbanValidateRequestFormat` optional — Specify the desired response format. Options: 'json' (default) or 'xml'.
    
</dd>
</dl>

<dl>
<dd>

**iban:** `string` — IBAN to validate.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.swiftCodeFind(request) -> Promise<string[]></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches SWIFT codes for a given country, bank, and city.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.swiftCodeFind({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.SwiftCodeFindRequestFormat` optional — Specify the desired response format. Options: 'json' (default) or 'xml'.
    
</dd>
</dl>

<dl>
<dd>

**country:** `string` optional — Country name (accepts full name, e.g., Pakistan, United States). If only the country parameter is supplied, lists all banks in the country.
    
</dd>
</dl>

<dl>
<dd>

**bank:** `string` optional — Bank name (upper case) used to filter SWIFT codes. Should be used together with the country parameter. If only country and bank are provided (without city), returns the list of cities for that bank.
    
</dd>
</dl>

<dl>
<dd>

**city:** `string` optional — Gives SWIFT codes for a bank. Optionally specify the city (upper case) to narrow results to a specific city for that bank.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.swiftCodeLookup(request) -> Promise<ApifreaksApi.SwiftCodeLookupResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches detailed information about a SWIFT code.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.swiftCodeLookup({
    apiKey: "apiKey",
    swiftCode: "swiftCode"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.SwiftCodeLookupRequestFormat` optional — Specify the desired response format. Options: 'json' (default) or 'xml'.
    
</dd>
</dl>

<dl>
<dd>

**swiftCode:** `string` — SWIFT/BIC code to lookup (must be 8 or 11 characters).
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.zipcodeLookup(request) -> Promise<ApifreaksApi.ZipcodeLookupResponse></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.zipcodeLookup({
    apiKey: "apiKey",
    code: "code"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.ZipcodeLookupRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**code:** `string` — Comma separated list of postal / zip codes. Max. 100 values.
    
</dd>
</dl>

<dl>
<dd>

**country:** `string` optional — Country code in ISO 3166-1 alpha-2 format. If not provided, search results will be returned from all countries.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkZipcodeLookup(request) -> Promise<ApifreaksApi.BulkZipcodeLookupResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Validates a bulk of ZIP/postal codes and returns result for each. Maximum `100` ZIP/postal codes per request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bulkZipcodeLookup({
    apiKey: "apiKey",
    codes: ["codes"]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.BulkZipcodeLookupRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**codes:** `string[]` — Comma separated list of postal / zip codes. Max. 100 values.
    
</dd>
</dl>

<dl>
<dd>

**country:** `string` optional — Country code in ISO 3166-1 alpha-2 format. If not provided, search results will be returned from all countries.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.zipcodeSearchByCity(request) -> Promise<ApifreaksApi.ZipcodeSearchByCityResponse></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.zipcodeSearchByCity({
    apiKey: "apiKey",
    city: "city",
    country: "country"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.ZipcodeSearchByCityRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**city:** `string` — Name of the city in which we want to find zipcodes in.
    
</dd>
</dl>

<dl>
<dd>

**country:** `string` — Country code in ISO 3166-1 alpha-2 format.
    
</dd>
</dl>

<dl>
<dd>

**state_name:** `string` optional — Name of the state or province associated with the country.
    
</dd>
</dl>

<dl>
<dd>

**page:** `number` optional — Page number to retrieve paginated results.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.zipcodeSearchByRegion(request) -> Promise<ApifreaksApi.ZipcodeSearchByRegionResponse></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.zipcodeSearchByRegion({
    apiKey: "apiKey",
    country: "country"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.ZipcodeSearchByRegionRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**country:** `string` — Country code in ISO 3166-1 alpha-2 format.
    
</dd>
</dl>

<dl>
<dd>

**region:** `string` optional — Name of the region, state or province associated with the country. Either region or region_code is required; region_code takes priority if both are given.
    
</dd>
</dl>

<dl>
<dd>

**page:** `number` optional — Page no. to retrieve paginated results.
    
</dd>
</dl>

<dl>
<dd>

**region_code:** `string` optional — ISO code of the region, state, or province associated with the country. Either region or region_code is required. region_code takes priority if both are given.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.zipcodeSearchByRadius(request) -> Promise<ApifreaksApi.ZipcodeSearchByRadiusResponse></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.zipcodeSearchByRadius({
    apiKey: "apiKey",
    radius: 1.1
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.ZipcodeSearchByRadiusRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**code:** `string` optional — Postal/Zip code to be used as the center point for the search.
    
</dd>
</dl>

<dl>
<dd>

**lat:** `number` optional — Latitude coordinate for the base location.
    
</dd>
</dl>

<dl>
<dd>

**long:** `number` optional — Longitude coordinate for the base location.
    
</dd>
</dl>

<dl>
<dd>

**country:** `string` optional — Country code in ISO 3166-1 alpha-2 format. Required only when using the code parameter.
    
</dd>
</dl>

<dl>
<dd>

**radius:** `number` — Search radius for the query. The maximum allowed values are: - 100 km - 100 mi - 109361 yd - 100000 m - 328084 ft - 3937007.75 in
    
</dd>
</dl>

<dl>
<dd>

**unit:** `ApifreaksApi.ZipcodeSearchByRadiusRequestUnit` optional — Supported distance units are m, km, mi, ft, yd, in.
    
</dd>
</dl>

<dl>
<dd>

**page:** `number` optional — Page no. to retrieve paginated results.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.zipcodeDistance(request) -> Promise<ApifreaksApi.ZipcodeDistanceResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get distance between postal codes. Maximum `100` postal codes per request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.zipcodeDistance({
    apiKey: "apiKey",
    compare: ["compare"],
    country: "country"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.ZipcodeDistanceRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**compare:** `string[]` — Comma separated list of postal / zip codes with which base point is compared w.r.t. Max 100 zip codes can be provided.
    
</dd>
</dl>

<dl>
<dd>

**code:** `string` optional — Postal/Zip code to be used as the base point.
    
</dd>
</dl>

<dl>
<dd>

**lat:** `number` optional — Latitude coordinate for the base location.
    
</dd>
</dl>

<dl>
<dd>

**long:** `number` optional — Longitude coordinate for the base location.
    
</dd>
</dl>

<dl>
<dd>

**country:** `string` — Country code in ISO 3166-1 alpha-2 format.
    
</dd>
</dl>

<dl>
<dd>

**unit:** `ApifreaksApi.ZipcodeDistanceRequest.Unit` optional — Supported distance units are m, km, mi, ft, yd, in.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.zipcodeDistanceMatch(request) -> Promise<ApifreaksApi.ZipcodeDistanceMatchResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get matching ZIP/postal code pairs within a specified distance. Maximum `100` postal codes per request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.zipcodeDistanceMatch({
    apiKey: "apiKey",
    codes: ["codes"],
    country: "country"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.ZipcodeDistanceMatchRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**codes:** `string[]` — Comma-separated list of postal/zip codes. Maximum 100 values allowed.
    
</dd>
</dl>

<dl>
<dd>

**country:** `string` — Country code in ISO 3166-1 alpha-2 format.
    
</dd>
</dl>

<dl>
<dd>

**distance:** `number` optional — Maximum allowed distance between postal code pairs.
    
</dd>
</dl>

<dl>
<dd>

**unit:** `ApifreaksApi.ZipcodeDistanceMatchRequest.Unit` optional — Supported distance units are m, km, mi, ft, yd, in.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.currentWeather(request) -> Promise<ApifreaksApi.CurrentWeatherResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get current weather data including temperature, humidity, precipitation, wind conditions, atmospheric pressure, and air quality for any location. Accepts city names, coordinates, or IP addresses. Also includes astronomy data and timezone-aware timestamps.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.currentWeather({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.CurrentWeatherRequestFormat` optional — Response format returned by the API. Only JSON is supported.
    
</dd>
</dl>

<dl>
<dd>

**location:** `string` optional — City name, place name, or full address.
    
</dd>
</dl>

<dl>
<dd>

**lat:** `number` optional — Latitude of the location.
    
</dd>
</dl>

<dl>
<dd>

**long:** `number` optional — Longitude of the location.
    
</dd>
</dl>

<dl>
<dd>

**ip:** `string` optional — IP(v4 or v6) address for location inference.
    
</dd>
</dl>

<dl>
<dd>

**timezone:** `string` optional — Timezone for the results.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkCurrentWeather(request) -> Promise<ApifreaksApi.BulkCurrentWeatherResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve current weather conditions for up to `50 locations` in a single request. A maximum of 50 locations (city names, IP addresses, or geographic coordinates) can be included in the request body.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bulkCurrentWeather({
    apiKey: "apiKey",
    locations: [{
            location: "lahore"
        }, {
            lat: 32.5,
            long: 74.5
        }, {
            ip: "8.8.8.8"
        }, {
            location: "seoul"
        }]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.BulkCurrentWeatherRequestFormat` optional — Response format returned by the API. Only JSON is supported.
    
</dd>
</dl>

<dl>
<dd>

**timezone:** `string` optional — Timezone for the results.
    
</dd>
</dl>

<dl>
<dd>

**locations:** `ApifreaksApi.BulkCurrentWeatherRequest.Locations.Item[]` — Array of locations to fetch weather data for
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.weatherForecast(request) -> Promise<ApifreaksApi.WeatherForecastResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Access comprehensive weather forecasts with customizable precision - choose from daily overviews, hourly breakdowns, or even minute-by-minute data. Configure your date ranges or use the default 7-day forecast for standard weather planning.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.weatherForecast({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.WeatherForecastRequestFormat` optional — Response format returned by the API. Only JSON is supported.
    
</dd>
</dl>

<dl>
<dd>

**startDate:** `string` optional — Start date for the forecast in YYYY-MM-DD format. Forecast dates must be current or future dates only. Past dates are not allowed for forecast data. The difference between startDate and endDate must not exceed 16 days.
    
</dd>
</dl>

<dl>
<dd>

**endDate:** `string` optional — End date for the forecast in YYYY-MM-DD format. Forecast dates must be current or future dates only. Past dates are not allowed for forecast data. The difference between startDate and endDate must not exceed 16 days.
    
</dd>
</dl>

<dl>
<dd>

**forecastDays:** `number` optional — Number of days for the forecast, from 1 to 16. Default is 7. Maximum value is 16.
    
</dd>
</dl>

<dl>
<dd>

**location:** `string` optional — City name, place name, or full address.
    
</dd>
</dl>

<dl>
<dd>

**lat:** `number` optional — Latitude of the location.
    
</dd>
</dl>

<dl>
<dd>

**long:** `number` optional — Longitude of the location.
    
</dd>
</dl>

<dl>
<dd>

**ip:** `string` optional — IP(v4 or v6) address for location inference.
    
</dd>
</dl>

<dl>
<dd>

**precision:** `ApifreaksApi.WeatherForecastRequestPrecision` optional — Precision of the forecast data.
    
</dd>
</dl>

<dl>
<dd>

**timezone:** `string` optional — Timezone for the results.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.historicalWeather(request) -> Promise<ApifreaksApi.HistoricalWeatherResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Access past weather conditions for specific dates with records going back to 1940. Retrieve comprehensive historical data with both daily and hourly precision options.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.historicalWeather({
    apiKey: "apiKey",
    date: "2023-01-15"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.HistoricalWeatherRequestFormat` optional — Response format returned by the API. Only JSON is supported.
    
</dd>
</dl>

<dl>
<dd>

**date:** `string` — Specific date for which to fetch weather data in YYYY-MM-DD format. Historical dates must be past dates only. Current or future dates are not allowed for historical data. Data available from 1940 onwards.
    
</dd>
</dl>

<dl>
<dd>

**location:** `string` optional — City name, place name, or full address.
    
</dd>
</dl>

<dl>
<dd>

**lat:** `number` optional — Latitude of the location.
    
</dd>
</dl>

<dl>
<dd>

**long:** `number` optional — Longitude of the location.
    
</dd>
</dl>

<dl>
<dd>

**ip:** `string` optional — IP(v4 or v6) address for location inference.
    
</dd>
</dl>

<dl>
<dd>

**precision:** `ApifreaksApi.HistoricalWeatherRequestPrecision` optional — Precision of the historical data. **Note:** 'daily' returns daily aggregates, 'hourly' returns hourly data.
    
</dd>
</dl>

<dl>
<dd>

**timezone:** `string` optional — Timezone for the results.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.weatherTimeSeries(request) -> Promise<ApifreaksApi.WeatherTimeSeriesResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pull historical weather information for date ranges up to 90 days (daily data) or 7 days (hourly data). Get consistent formatting across your specified date range with reliable historical weather patterns.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.weatherTimeSeries({
    apiKey: "apiKey",
    startDate: "2023-01-15",
    endDate: "2023-01-15"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.WeatherTimeSeriesRequestFormat` optional — Response format returned by the API. Only JSON is supported.
    
</dd>
</dl>

<dl>
<dd>

**startDate:** `string` — Starting date for the data in YYYY-MM-DD format. Historical dates must be past dates only. Current or future dates are not allowed for historical data. Data available from 1940 onwards. For precision=daily, the difference between endDate and startDate must not exceed 90 days. For precision=hourly, the difference must not exceed 7 days.
    
</dd>
</dl>

<dl>
<dd>

**endDate:** `string` — End date for the data in YYYY-MM-DD format. Historical dates must be past dates only. Current or future dates are not allowed for historical data. Data available from 1940 onwards. For precision=daily, the difference between endDate and startDate must not exceed 90 days. For precision=hourly, the difference must not exceed 7 days.
    
</dd>
</dl>

<dl>
<dd>

**location:** `string` optional — City name, place name, or full address.
    
</dd>
</dl>

<dl>
<dd>

**lat:** `number` optional — Latitude of the location.
    
</dd>
</dl>

<dl>
<dd>

**long:** `number` optional — Longitude of the location.
    
</dd>
</dl>

<dl>
<dd>

**ip:** `string` optional — IP(v4 or v6) address for location inference.
    
</dd>
</dl>

<dl>
<dd>

**precision:** `ApifreaksApi.WeatherTimeSeriesRequestPrecision` optional — Precision of the data.
    
</dd>
</dl>

<dl>
<dd>

**timezone:** `string` optional — Timezone for the results.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.marineWeather(request) -> Promise<ApifreaksApi.MarineWeatherResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Provides hourly forecasts of marine conditions including wave heights, wave directions, wave periods, swell info, sea surface temperatures, and ocean currents. Supports multiple geographical points and returns daily max wave statistics for up to 7 days. Ideal for maritime planning, navigation, and coastal activities.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.marineWeather({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.MarineWeatherRequestFormat` optional — Response format returned by the API. Only JSON is supported.
    
</dd>
</dl>

<dl>
<dd>

**startDate:** `string` optional — Starting date for marine forecast data in YYYY-MM-DD format. Forecast dates must be current or future dates only. Past dates are not allowed for forecast data. The difference between endDate and startDate must not exceed 16 days.
    
</dd>
</dl>

<dl>
<dd>

**endDate:** `string` optional — End date for marine forecast data in YYYY-MM-DD format. Forecast dates must be current or future dates only. Past dates are not allowed for forecast data. The difference between endDate and startDate must not exceed 16 days.
    
</dd>
</dl>

<dl>
<dd>

**location:** `string` optional — City name, place name, or full address.
    
</dd>
</dl>

<dl>
<dd>

**lat:** `number` optional — Latitude of the location.
    
</dd>
</dl>

<dl>
<dd>

**long:** `number` optional — Longitude of the location.
    
</dd>
</dl>

<dl>
<dd>

**ip:** `string` optional — IP(v4 or v6) address for location inference.
    
</dd>
</dl>

<dl>
<dd>

**precision:** `ApifreaksApi.MarineWeatherRequestPrecision` optional — Precision of the marine data.
    
</dd>
</dl>

<dl>
<dd>

**timezone:** `string` optional — Timezone for the results.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.airQuality(request) -> Promise<ApifreaksApi.AirQualityResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Monitor and predict air quality conditions using European and US AQI standards. Track pollutant concentrations including PM10, PM2.5, carbon monoxide, nitrogen dioxide, sulfur dioxide, ozone, and dust particles. Get current readings plus hourly forecasts up to 5 days ahead, complete with UV index and aerosol measurements for comprehensive air quality assessment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.airQuality({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.AirQualityRequestFormat` optional — Response format returned by the API. Only JSON is supported.
    
</dd>
</dl>

<dl>
<dd>

**startDate:** `string` optional — Starting date for AQI forecast data in YYYY-MM-DD format. Forecast dates must be current or future dates only. Past dates are not allowed for forecast data. The difference between endDate and startDate must not exceed 5 days.
    
</dd>
</dl>

<dl>
<dd>

**endDate:** `string` optional — End date for AQI forecast data in YYYY-MM-DD format. Forecast dates must be current or future dates only. Past dates are not allowed for forecast data. The difference between endDate and startDate must not exceed 5 days.
    
</dd>
</dl>

<dl>
<dd>

**location:** `string` optional — City name, place name, or full address.
    
</dd>
</dl>

<dl>
<dd>

**lat:** `number` optional — Latitude of the location.
    
</dd>
</dl>

<dl>
<dd>

**long:** `number` optional — Longitude of the location.
    
</dd>
</dl>

<dl>
<dd>

**ip:** `string` optional — IP(v4 or v6) address for location inference.
    
</dd>
</dl>

<dl>
<dd>

**precision:** `ApifreaksApi.AirQualityRequestPrecision` optional — Only hourly precision is supported; returns hourly AQI data for the selected date range.
    
</dd>
</dl>

<dl>
<dd>

**timezone:** `string` optional — Timezone for the results.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.floodForecast(request) -> Promise<ApifreaksApi.FloodForecastResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Provides flood forecast data for a given location, including river discharge metrics such as mean, median, maximum, minimum, and percentile values (p25, p75). Requires a startDate and endDate, with the date range limited to 16 days. Location can be specified using city name, latitude/longitude, or IP address.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.floodForecast({
    apiKey: "apiKey",
    startDate: "2023-01-15",
    endDate: "2023-01-15"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.FloodForecastRequestFormat` optional — Response format returned by the API. Only JSON is supported.
    
</dd>
</dl>

<dl>
<dd>

**startDate:** `string` — Starting date for flood forecast data in YYYY-MM-DD format. Forecast dates must be current or future dates only. Past dates are not allowed for forecast data. The difference between endDate and startDate must not exceed 16 days.
    
</dd>
</dl>

<dl>
<dd>

**endDate:** `string` — End date for flood forecast data in YYYY-MM-DD format. Forecast dates must be current or future dates only. Past dates are not allowed for forecast data. The difference between endDate and startDate must not exceed 16 days.
    
</dd>
</dl>

<dl>
<dd>

**location:** `string` optional — City name, place name, or full address.
    
</dd>
</dl>

<dl>
<dd>

**lat:** `number` optional — Latitude of the location.
    
</dd>
</dl>

<dl>
<dd>

**long:** `number` optional — Longitude of the location.
    
</dd>
</dl>

<dl>
<dd>

**ip:** `string` optional — IP(v4 or v6) address for location inference.
    
</dd>
</dl>

<dl>
<dd>

**precision:** `ApifreaksApi.FloodForecastRequestPrecision` optional — Only daily precision is supported; returns flood forecast data for the selected date range.
    
</dd>
</dl>

<dl>
<dd>

**timezone:** `string` optional — Timezone for the results.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.getCountries(request) -> Promise<ApifreaksApi.GetCountriesResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve countries, optionally filtered by region or subregion.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.getCountries({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.GetCountriesRequestFormat` optional — Format of the response
    
</dd>
</dl>

<dl>
<dd>

**region:** `string` optional — Optional filter to return countries within a specific region from the region endpoint.
    
</dd>
</dl>

<dl>
<dd>

**subregion:** `string` optional — Optional filter to return countries within a specific subregion from the subregion endpoint.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.getCountryDetails(request) -> Promise<ApifreaksApi.GetCountryDetailsResponse></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.getCountryDetails({
    apiKey: "apiKey",
    country: "country"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.GetCountryDetailsRequestFormat` optional — Format of the response
    
</dd>
</dl>

<dl>
<dd>

**country:** `string` — Country code in ISO 3166-1 alpha-2 format.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.getRegions(request) -> Promise<ApifreaksApi.GetRegionsResponse></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.getRegions({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.GetRegionsRequestFormat` optional — Format of the response
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.getSubregions(request) -> Promise<ApifreaksApi.GetSubregionsResponse></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.getSubregions({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.GetSubregionsRequestFormat` optional — Format of the response
    
</dd>
</dl>

<dl>
<dd>

**region:** `string` optional — Name of the region. If omitted, all subregions are returned.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.getAdminLevels(request) -> Promise<ApifreaksApi.GetAdminLevelsResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve administrative units based on ISO 3166-1 alpha-2 country code.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.getAdminLevels({
    apiKey: "apiKey",
    country: "country"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.GetAdminLevelsRequestFormat` optional — Format of the response
    
</dd>
</dl>

<dl>
<dd>

**country:** `string` — Country code in ISO 3166-1 alpha-2 format
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.getAdminUnits(request) -> Promise<ApifreaksApi.GetAdminUnitsResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve administrative divisions for a given country using ISO 3166-1 alpha-2 country codes. You can optionally filter by administrative levels.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.getAdminUnits({
    apiKey: "apiKey",
    country: "country"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.GetAdminUnitsRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**country:** `string` — Country code in ISO 3166-1 alpha-2 format.
    
</dd>
</dl>

<dl>
<dd>

**admin_level:** `string | string[]` optional — Filter results by one or more administrative level names (e.g. `land`, `state`, `province`), sent as a comma-separated list. Use the admin levels endpoint to list the levels a country has.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.getAdminUnitDetails(request) -> Promise<ApifreaksApi.GetAdminUnitDetailsResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve detailed administrative unit information by country and optionally filtered by admin code.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.getAdminUnitDetails({
    apiKey: "apiKey",
    country: "country",
    admin_unit: "admin_unit"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.GetAdminUnitDetailsRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**country:** `string` — Country code in ISO 3166-1 alpha-2 format.
    
</dd>
</dl>

<dl>
<dd>

**admin_unit:** `string` — Optional admin code to fetch details for a specific administrative unit.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.getCities(request) -> Promise<ApifreaksApi.GetCitiesResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of cities within a country, optionally filtered by an administrative unit code.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.getCities({
    apiKey: "apiKey",
    country: "country"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.GetCitiesRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**country:** `string` — Country code in ISO 3166-1 alpha-2 format.
    
</dd>
</dl>

<dl>
<dd>

**admin_unit:** `string` optional — Administrative unit code used to filter cities within a specific region.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.getSupportedFlags(request) -> Promise<ApifreaksApi.GetSupportedFlagsResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get list of all supported flags with their metadata
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.getSupportedFlags({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.getFlags(request) -> Promise<core.BinaryResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the flag for a specific country
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.getFlags({
    apiKey: "apiKey",
    name: "name",
    shape: "flat",
    type: "country"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**name:** `string` — Country code in ISO 3166-1 alpha-2 format.
    
</dd>
</dl>

<dl>
<dd>

**shape:** `ApifreaksApi.GetFlagsRequestShape` — Flag shape. One of: `'flat'` or `'round'`.
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.GetFlagsRequestFormat` optional — Flag format. Applicable only for PNG or WEBP formats. Default is png.
    
</dd>
</dl>

<dl>
<dd>

**size:** `ApifreaksApi.GetFlagsRequestSize` optional — Flag size in pixels. Valid options: `16px`, `24px`, `32px`, `48px`, `64px`. Applicable only for PNG or WEBP formats.
    
</dd>
</dl>

<dl>
<dd>

**type:** `ApifreaksApi.GetFlagsRequestType` — Type of flag. One of: `country` or `organization`.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.timezoneLookup(request) -> Promise<ApifreaksApi.TimezoneLookupResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve current time, date, and timezone-related information by specifying a timezone name, location address, location coordinates, IP address, or use the client IP address if no parameter is passed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.timezoneLookup({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.TimezoneLookupRequestFormat` optional — Format of the response
    
</dd>
</dl>

<dl>
<dd>

**ip:** `string` optional — IPv4 or IPv6 address to extract timezone information.
    
</dd>
</dl>

<dl>
<dd>

**tz:** `string` optional — Timezone name (e.g., "Asia/Kolkata") to retrieve information directly.
    
</dd>
</dl>

<dl>
<dd>

**location:** `string` optional — Location string (preferably city and country) to extract timezone.
    
</dd>
</dl>

<dl>
<dd>

**lat:** `number` optional — Latitude for geolocation lookup.
    
</dd>
</dl>

<dl>
<dd>

**long:** `number` optional — Longitude for geolocation lookup.
    
</dd>
</dl>

<dl>
<dd>

**lang:** `ApifreaksApi.TimezoneLookupRequestLang` optional — Language code for response localization (default is "en").
    
</dd>
</dl>

<dl>
<dd>

**iata_code:** `string` optional — 3-letter IATA airport code (e.g., JFK).
    
</dd>
</dl>

<dl>
<dd>

**icao_code:** `string` optional — 4-letter ICAO airport code (e.g., KJFK).
    
</dd>
</dl>

<dl>
<dd>

**lo_code:** `string` optional — 5-letter UN/LO city code.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.timezoneConvert(request) -> Promise<ApifreaksApi.TimezoneConvertResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Converts a given time from one timezone to another using various input types like timezone name, coordinates, location, or codes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.timezoneConvert({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.TimezoneConvertRequestFormat` optional — Format of the response .
    
</dd>
</dl>

<dl>
<dd>

**time:** `string` optional — Time to convert in `yyyy-MM-dd HH:mm` or `yyyy-MM-dd HH:mm:ss` format.
    
</dd>
</dl>

<dl>
<dd>

**tz_from:** `string` optional — Source timezone name (e.g., `Asia/Kolkata`).
    
</dd>
</dl>

<dl>
<dd>

**tz_to:** `string` optional — Target timezone name (e.g., `America/New_York`).
    
</dd>
</dl>

<dl>
<dd>

**lat_from:** `number` optional — Latitude of source location.
    
</dd>
</dl>

<dl>
<dd>

**long_from:** `number` optional — Longitude of source location.
    
</dd>
</dl>

<dl>
<dd>

**lat_to:** `number` optional — Latitude of target location.
    
</dd>
</dl>

<dl>
<dd>

**long_to:** `number` optional — Longitude of target location.
    
</dd>
</dl>

<dl>
<dd>

**location_from:** `string` optional — From location (city/country).
    
</dd>
</dl>

<dl>
<dd>

**location_to:** `string` optional — To location (city/country).
    
</dd>
</dl>

<dl>
<dd>

**iata_from:** `string` optional — From IATA airport code (e.g., JFK).
    
</dd>
</dl>

<dl>
<dd>

**iata_to:** `string` optional — To IATA airport code.
    
</dd>
</dl>

<dl>
<dd>

**icao_from:** `string` optional — From ICAO airport code (e.g., KJFK).
    
</dd>
</dl>

<dl>
<dd>

**icao_to:** `string` optional — To ICAO airport code.
    
</dd>
</dl>

<dl>
<dd>

**locode_from:** `string` optional — From UN/LO CODE.
    
</dd>
</dl>

<dl>
<dd>

**locode_to:** `string` optional — To UN/LO CODE.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.userAgentLookup(request) -> Promise<ApifreaksApi.UserAgentLookupResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Parse User Agent string to get detailed browser, device, and operating system information
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.userAgentLookup({
    apiKey: "apiKey",
    "User-Agent": "User-Agent"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.UserAgentLookupRequestFormat` optional — Format of the response
    
</dd>
</dl>

<dl>
<dd>

**User-Agent:** `string` — The User-Agent string to parse, sent as the User-Agent HTTP header.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkUserAgentLookup(request) -> Promise<ApifreaksApi.BulkUserAgentLookupResponseItem[]></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Parse up to `20000 User-Agent strings` at once in a single request; exceeding that returns a 413, not a 400.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.bulkUserAgentLookup({
    apiKey: "apiKey",
    uaStrings: ["uaStrings"]
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.BulkUserAgentLookupRequestFormat` optional — Format of the response
    
</dd>
</dl>

<dl>
<dd>

**uaStrings:** `string[]` — Array of User-Agent strings to parse. Maximum 20000 strings per request — exceeding that returns a 413.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ocrPredict(request) -> Promise<ApifreaksApi.OcrPredictResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Perform Optical Character Recognition (OCR) on images, PDFs, or ZIP archives. Supports two models: `mini-ocr-v1` for CAPTCHA-optimized OCR and `ocr-v1` for general-purpose document text extraction. Supports zonal OCR to extract text from specific regions of an image.

**Notes:**
- The `zone` query parameter cannot be given with .pdf and .zip types as it can only be applied to single image query.
- The `page_range` query parameter cannot be given in any other type except .pdf types.
- PDFs containing images in them are allowed only for processing.
- The `mini-ocr-v1` model doesn’t support the following query parameters:
    - `page_range` (.pdf types)
    - `zone`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.ocrPredict({
    apiKey: "apiKey",
    model: "mini-ocr-v1",
    file: fs.createReadStream("/path/to/file")
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**model:** `ApifreaksApi.OcrPredictRequestModel` — OCR model to use. `mini-ocr-v1` for CAPTCHA OCR, `ocr-v1` for general OCR.
    
</dd>
</dl>

<dl>
<dd>

**url:** `string` optional — URL of the image or PDF (required if `file` is not uploaded).
    
</dd>
</dl>

<dl>
<dd>

**page_range:** `string` optional — Specify page range for multi-page PDFs (e.g., '1,3,5-10' or 'allpages'). **Note:** This parameter can only be used with .pdf file types.
    
</dd>
</dl>

<dl>
<dd>

**zone:** `string` optional — Define OCR zones using coordinates (top:left:height:width). Multiple zones can be defined using commas. Only available for model 'ocr-v1'. **Note:** This parameter cannot be used with .pdf and .zip file types as it can only be applied to single image queries.
    
</dd>
</dl>

<dl>
<dd>

**new_line:** `number` optional — Set to 1 to split output text into individual lines (default: 0). This changes the shape of `OCRText` (see the response).
    
</dd>
</dl>

<dl>
<dd>

**file:** `core.file.Uploadable` optional — Image, PDF, or ZIP file for OCR (required if `url` not provided). Supported formats: .png, .jpg, .jpeg, .bmp, .tiff, .gif, .pcx, .pdf, .zip. **Note:** PDFs containing images in them are allowed only for processing. The request body must contain only this file; every other option is a query parameter.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.grammarDetect(request) -> Promise<ApifreaksApi.GrammarDetectResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Analyze text for grammar errors and return the exact words flagged as grammatically incorrect with zero-based word positions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.grammarDetect({
    apiKey: "apiKey",
    text: "The global mental is health crisis is now a serious and compelex problem. It need quick and ongoing action from policymakers, healthcare workers, and the whole society."
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**text:** `string` — Text to analyze for grammar errors
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.grammarCorrect(request) -> Promise<ApifreaksApi.GrammarCorrectResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submit text with grammatical issues and receive a clean grammar-corrected result for proofreading and content workflows.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.grammarCorrect({
    apiKey: "apiKey",
    text: "The global mental is health crisis is now a serious and compelex problem. It need quick and ongoing action from policymakers, healthcare workers, and the whole society."
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**text:** `string` — Text to correct
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.weakWordsDetect(request) -> Promise<ApifreaksApi.WeakWordsDetectResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Analyze text and return weak, vague, or filler words with zero-based word positions to help writers produce clearer and more concise content.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.weakWordsDetect({
    apiKey: "apiKey",
    text: "Many people cannot get the support they need to handle their conditions well."
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**text:** `string` — Text to analyze for weak words
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.readabilityScore(request) -> Promise<ApifreaksApi.ReadabilityScoreResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Analyze text readability using industry-standard formulas including Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog Index, SMOG Index, Coleman-Liau Index, and Automated Readability Index.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.readabilityScore({
    apiKey: "apiKey",
    text: "The global mental is health crisis is now a serious and compelex problem. It needs quick and ongoing action from policymakers, healthcare workers, and the whole society."
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**target:** `ApifreaksApi.ReadabilityScoreRequestTarget` optional — Target audience used to tune sentence difficulty levels
    
</dd>
</dl>

<dl>
<dd>

**exclude:** `string` optional — Comma-separated response sections to omit. Possible values are readability_scores, sentence_readability, readability_grade
    
</dd>
</dl>

<dl>
<dd>

**text:** `string` — Text to analyze for readability
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.astronomyLookup(request) -> Promise<ApifreaksApi.AstronomyLookupResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve sunrise and sunset times, current position of the moon, and other related information by specifying a location address, location coordinates, IP address, or using the client IP address if no parameter is passed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.astronomyLookup({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.AstronomyLookupRequestFormat` optional — Format of the response.
    
</dd>
</dl>

<dl>
<dd>

**location:** `string` optional — Location name or address
    
</dd>
</dl>

<dl>
<dd>

**lat:** `number` optional — Latitude for location coordinates
    
</dd>
</dl>

<dl>
<dd>

**long:** `number` optional — Longitude for location coordinates
    
</dd>
</dl>

<dl>
<dd>

**ip:** `string` optional — IP address for location detection
    
</dd>
</dl>

<dl>
<dd>

**lang:** `string` optional
    
</dd>
</dl>

<dl>
<dd>

**date:** `string` optional — Date for astronomy data (YYYY-MM-DD)
    
</dd>
</dl>

<dl>
<dd>

**elevation:** `number` optional — Timezone of the location for which astronomy data is required
    
</dd>
</dl>

<dl>
<dd>

**time_zone:** `string` optional
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.getCreditsUsage(request) -> Promise<ApifreaksApi.GetCreditsUsageResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns subscription, subscription-surcharge, and one-off credit balances for the authenticated organization's account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.getCreditsUsage({
    apiKey: "apiKey"
});
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKey:** `string` — Your API key
    
</dd>
</dl>

<dl>
<dd>

**format:** `ApifreaksApi.GetCreditsUsageRequestFormat` optional — Format of the response. Possible values: json, xml.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApifreaksApiClient.RequestOptions` optional — Per-request overrides (timeout, retries, headers, abort signal).
    
</dd>
</dl>

</dd>
</dl>

</dd>
</dl>
</details>
