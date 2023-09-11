import { createClient } from "redis";

const client = createClient();

export const connectRedis = () => {

    client.connect().then(() => {
        console.log('Redis connected successfully');
    })
}

export default client;