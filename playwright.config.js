import { CONFIG } from './config/config.js';

const config = {
    testDir: './src/tests',
    testMatch: '**/*.{js,ts}',
    timeout: CONFIG.timeout,
    reporter: [
        ['list'],
        ['allure-playwright'],
        ['html', { outputFolder: '../reports/html-report' }]
    ],
    use: {
        baseURL: CONFIG.baseUrl,
        headless: CONFIG.browserOptions.headless,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
    },
    projects: [
        {
            name: 'Chrome',
            use: {
                browserName: 'chromium',
                viewport: { width: 1920, height: 1080 },
                ...CONFIG.browserOptions,
            },
        },
        {
            name: 'Firefox',
            use: {
                browserName: 'firefox',
                viewport: { width: 1920, height: 1080 },
                ...CONFIG.browserOptions,
            },
        },
        {
            name: 'Safari',
            use: {
                browserName: 'webkit',
                viewport: { width: 1920, height: 1080 },
                ...CONFIG.browserOptions,
            },
        },
    ],
};

export default config;