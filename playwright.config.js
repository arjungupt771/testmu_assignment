// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,  // 🔥 Important
  workers: 2,           // Runs both tests parallel
  use: {
    headless: true,
  },
});