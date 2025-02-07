import dotenv from "dotenv";

dotenv.config({
    path: `.env.${process.env.ENV || 'dev'}`
});

export const environments = {
    // baseUrl: process.env.BASE_URL || 'https://speechanalyzer.elsaspeak.com/',
    // apiUrl: process.env.API_URL || 'https://api.example.com',
    // timeout: parseInt(process.env.TIMEOUT || '120000', 10),
    // environment: process.env.ENV || 'dev',
    // browserOptions: {
    //     headless: process.env.HEADLESS === 'true',
    //     slowMo: parseInt(process.env.SLOW_MO || '0', 10)
    // },
    // testData: {
    //     users: {
    //         admin: {
    //             username: process.env.ADMIN_USER,
    //             password: process.env.ADMIN_PASSWORD
    //         }
    //     }
    // }

    dev: {
        baseUrl: process.env.DEV_BASE_URL,
        credentials: {
            admin: {
                username: process.env.DEV_ADMIN_USER,
                password: process.env.DEV_ADMIN_PASSWORD
            }
        }
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
