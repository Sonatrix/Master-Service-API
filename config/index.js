import {config} from 'dotenv';

config();

export default {
    MONGO_URL: process.env.MONGO_URL,
    CLIENT: process.env.CLIENT,
    PORT: process.env.PORT || 3000,
    HOST: process.env.HOST
}

