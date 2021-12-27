import dotenv from "dotenv";
dotenv.config();

const config = {
    PORT: process.env.PORT || 8080,
    redisEndpointUri: process.env.REDIS_ENDPOINT_URI || "redis://localhost:6379",
    numberOfRequests: process.env.NUMBER_OF_REQUESTS || 100,
    requestExpiry: process.env.REQUEST_EXPIRY || 20,
    redisHost: process.env.REDIS_HOST || "localhost",
    redisPort: process.env.REDIS_PORT || 6379
}

export default config;