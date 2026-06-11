# Apifreaks TypeScript Library

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-Built%20with%20Fern-brightgreen)](https://buildwithfern.com?utm_source=github&utm_medium=github&utm_campaign=readme&utm_source=Apifreaks%2FTypescript)
[![npm shield](https://img.shields.io/npm/v/@api-freaks/sdk)](https://www.npmjs.com/package/@api-freaks/sdk)

The Apifreaks TypeScript library provides convenient access to the Apifreaks APIs from JavaScript and TypeScript.

## Table of Contents

- [Installation](#installation)
- [Reference](#reference)
- [Usage](#usage)
- [Environments](#environments)
- [Errors](#errors)
- [Request Types](#request-types)
- [Advanced](#advanced)
  - [Retries](#retries)
  - [Timeouts](#timeouts)
  - [Additional Headers](#additional-headers)
  - [Additional Query String Parameters](#additional-query-string-parameters)
  - [Raw Responses](#raw-responses)
  - [Custom Fetch](#custom-fetch)
- [Contributing](#contributing)

## Installation

Install the package with npm:

```sh
npm install @api-freaks/sdk
```

Or with yarn:

```sh
yarn add @api-freaks/sdk
```

Or with pnpm:

```sh
pnpm add @api-freaks/sdk
```

## Reference

A full reference for this library is available [here](./reference.md).

## Usage

Instantiate and use the client with the following:

```typescript
import { ApifreaksApiClient } from "@api-freaks/sdk";

const client = new ApifreaksApiClient();

async function main() {
    const response = await client.geolocationLookup({
        apiKey: "your_api_key",
        ip: "8.8.8.8",
    });

    console.log(response);
}

main().catch(console.error);
```

CommonJS usage is also supported after publishing:

```javascript
const { ApifreaksApiClient } = require("@api-freaks/sdk");

const client = new ApifreaksApiClient();
```

## Environments

This SDK allows you to configure the base URL for API requests.

```typescript
import { ApifreaksApiClient, ApifreaksApiEnvironment } from "@api-freaks/sdk";

const client = new ApifreaksApiClient({
    environment: ApifreaksApiEnvironment.Default,
});
```

You can also set a custom base URL:

```typescript
const client = new ApifreaksApiClient({
    baseUrl: "https://api.apifreaks.com",
});
```

## Errors

When the API returns a non-success status code, the SDK throws an error. You can catch the base `ApifreaksApiError` or one of the exported status-specific errors.

```typescript
import { ApifreaksApiClient, ApifreaksApiError } from "@api-freaks/sdk";

const client = new ApifreaksApiClient();

try {
    const response = await client.geolocationLookup({
        apiKey: "your_api_key",
        ip: "8.8.8.8",
    });

    console.log(response);
} catch (error) {
    if (error instanceof ApifreaksApiError) {
        console.log(error.statusCode);
        console.log(error.body);
    } else {
        throw error;
    }
}
```

## Request Types

The SDK exports request and response types through the `ApifreaksApi` namespace.

```typescript
import { ApifreaksApiClient, type ApifreaksApi } from "@api-freaks/sdk";

const client = new ApifreaksApiClient();

const request: ApifreaksApi.GeolocationLookupRequest = {
    apiKey: "your_api_key",
    ip: "8.8.8.8",
};

const response = await client.geolocationLookup(request);
```

## Advanced

### Retries

The SDK supports automatic retries. Configure the maximum retry count globally on the client or per request.

```typescript
const client = new ApifreaksApiClient({
    maxRetries: 3,
});

const response = await client.geolocationLookup(
    {
        apiKey: "your_api_key",
        ip: "8.8.8.8",
    },
    {
        maxRetries: 3,
    },
);
```

### Timeouts

The SDK defaults to a 60 second timeout. Configure the timeout globally on the client or per request.

```typescript
const client = new ApifreaksApiClient({
    timeoutInSeconds: 30,
});

const response = await client.geolocationLookup(
    {
        apiKey: "your_api_key",
        ip: "8.8.8.8",
    },
    {
        timeoutInSeconds: 30,
    },
);
```

### Additional Headers

You can add custom headers globally on the client or per request.

```typescript
const client = new ApifreaksApiClient({
    headers: {
        "X-Custom-Header": "custom-value",
    },
});

const response = await client.geolocationLookup(
    {
        apiKey: "your_api_key",
        ip: "8.8.8.8",
    },
    {
        headers: {
            "X-Request-Header": "request-value",
        },
    },
);
```

### Additional Query String Parameters

You can add custom query parameters per request.

```typescript
const response = await client.geolocationLookup(
    {
        apiKey: "your_api_key",
        ip: "8.8.8.8",
    },
    {
        queryParams: {
            fields: "country,city",
        },
    },
);
```

### Raw Responses

Every SDK method returns an awaitable response object. Use `.withRawResponse()` when you also need the raw HTTP response metadata.

```typescript
const { data, rawResponse } = await client
    .geolocationLookup({
        apiKey: "your_api_key",
        ip: "8.8.8.8",
    })
    .withRawResponse();

console.log(data);
console.log(rawResponse.statusCode);
```

### Custom Fetch

You can provide a custom `fetch` implementation for runtimes or environments that need it.

```typescript
const client = new ApifreaksApiClient({
    fetch: customFetch,
});
```

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically.
Additions made directly to this library would have to be moved over to our generation code,
otherwise they would be overwritten upon the next generated release. Feel free to open a PR as
a proof of concept, but know that we will not be able to merge it as-is. We suggest opening
an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!