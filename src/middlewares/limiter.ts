import { createClient } from "redis";
import RedisStore from "rate-limit-redis";
import RateLimit from "express-rate-limit";
import config from "../config";

const { redisEndpointUri, numberOfRequests, requestExpiry } = config;

const redisClient = createClient({ url: redisEndpointUri });

const limiter = new (RateLimit as any)({
    store: new (RedisStore as any)({
        host: 'localhost', 
        port: 6379,
        expiry: Number(requestExpiry),
    }),
    max: numberOfRequests, // limit each IP to 100 requests per windowMs
    delayMs: 0, // disable delaying - full speed until the max limit is reached
});

export default limiter;