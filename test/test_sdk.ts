import { ApifreaksApiClient } from "@api-freaks/sdk";

async function main() {
    const client = new ApifreaksApiClient();

    const response = await client.geolocationLookup({
        apiKey: "60445b65f24c48469802dfa824b449860",
        ip: "8.8.8.8",
    });

    console.log(response);
}

main().catch(console.error);