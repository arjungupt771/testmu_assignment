const { test } = require('@playwright/test');

test.describe('Ecommerce Tests (Stable)', () => {

  test('Test Case 1: iPhone (Demo)', async ({ page }) => {
    await page.goto('https://www.demoblaze.com');

    // Click phones
    await page.click('a:has-text("Phones")');

    // Select product
    await page.click('a:has-text("Iphone 6 32gb")');

    // Get price
    const price = await page.locator('.price-container').textContent();
    console.log('iPhone Price:', price);

    // Add to cart
    await page.click('a:has-text("Add to cart")');

    page.once('dialog', dialog => dialog.accept());

    console.log('✅ iPhone added to cart');
  });

  test('Test Case 2: Samsung (Demo)', async ({ page }) => {
    await page.goto('https://www.demoblaze.com');

    await page.click('a:has-text("Phones")');
    await page.click('a:has-text("Samsung galaxy s6")');

    const price = await page.locator('.price-container').textContent();
    console.log('Samsung Price:', price);

    await page.click('a:has-text("Add to cart")');

    page.once('dialog', dialog => dialog.accept());

    console.log('✅ Samsung added to cart');
  });

});