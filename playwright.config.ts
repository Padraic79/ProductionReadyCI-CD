import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    timeout: 30_000,
    expect: { timeout: 5000 },
    reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
    projects: [
        {
            name: 'CI/CD Pipeline',
            testDir: 'tests/ui',
            use: {
                // Use BASE_URL from environment if set, otherwise default to local
                baseURL: process.env.BASE_URL || 'http://localhost:3000',
                headless: true,
                screenshot: 'only-on-failure',
                video: 'retain-on-failure',
                trace: 'retain-on-failure',
                ...devices['Desktop Chrome'],
            },
        },
    ],
});
