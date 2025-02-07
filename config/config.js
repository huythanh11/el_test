import dotenv from "dotenv";

dotenv.config({
    path: `.env.${process.env.ENV || 'dev'}`
});

export const environments = {
    dev: {
        baseUrl: process.env.DEV_BASE_URL
    }
};

const environment = process.env.ENV || 'dev';

export const CONFIG = {
    ...environments[environment],
    timeout: parseInt(process.env.TIMEOUT || '120000', 10),
    environment: environment,
    browserOptions: {
        headless: process.env.HEADLESS === 'true',
        slowMo: parseInt(process.env.SLOW_MO || '0', 10)
    }
};
