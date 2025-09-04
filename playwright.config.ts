import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    timeout: 30_000,
    expect: { timeout: 5000 },
    reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
    projects: [
        {
            name: 'personal-site',
            testDir: 'tests/ui',
            use: {
                baseURL: 'https://padraic79.github.io/AutomationProjects/',
                headless: true,
                screenshot: 'only-on-failure',
                video: 'retain-on-failure',
                trace: 'retain-on-failure',
                ...devices['Desktop Chrome'],
            },
        },
    ],
});
