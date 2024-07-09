
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';


When('the costumer add to cart {string}', async function (addProduct: string) {
  await this.page.locator('[data-test="add-to-cart-' + addProduct.toLowerCase().replaceAll(" ", "-") + '"]').click();
})

When('the costumer clicks on the cart button', async function () {
  await this.page.locator('[data-test="shopping-cart-link"]').click();
})

Then('the costumer see {string} in the shopping cart', async function (productCart: string) {
  await expect(this.page.getByText(productCart)).toBeVisible();

})

