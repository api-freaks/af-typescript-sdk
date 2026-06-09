import { ApifreaksApiClient } from "@api-freaks/sdk";

async function main() {
    const client = new ApifreaksApiClient();

    const response = await client.geolocationLookup({
        apiKey: "YOUR_API_KEY",
        ip: "8.8.8.8",
    });

    console.log(response);
}

main().catch(console.error);