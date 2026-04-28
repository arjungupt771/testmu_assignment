async function extractPrice(page) {
  const selectors = [
    '#corePrice_feature_div .a-price .a-offscreen',
    '.a-price .a-offscreen',
    '#priceblock_ourprice',
    '#priceblock_dealprice',
    'span.a-price-whole'
  ];

  for (const sel of selectors) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 3000 })) {
        const txt = await el.textContent();
        if (txt) return txt.trim();
      }
    } catch {}
  }
  return 'Price not found';
}

async function addToCart(page) {
  const selectors = [
    '#add-to-cart-button',
    'input#add-to-cart-button',
    'button#add-to-cart-button',
    'span:has-text("Add to Cart")'
  ];

  for (const sel of selectors) {
    try {
      const btn = page.locator(sel).first();
      if (await btn.isVisible({ timeout: 5000 })) {
        await btn.click();
        return;
      }
    } catch {}
  }
  console.log('Add to cart not available');
}

module.exports = { extractPrice, addToCart };