import {Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';


When('the costumer clicks on the filter price low to high', async function() {
    await this.page.locator('[data-test="product-sort-container"]').selectOption('lohi');
})

Then('the costumer should see the first product with price {string}',async function (price: string) {
    await expect(this.page.locator('[data-test="inventory-item-price"]').first()).toContainText(price);  
}) 

Then('the costumer should see the last product with price {string}', async function (price: string) {
    await expect(this.page.locator('[data-test="inventory-item-price"]').last()).toContainText(price);
  
  })

When('the costumer clicks on the filter price high to low', async function() {
    await this.page.locator('[data-test="product-sort-container"]').selectOption('hilo')
})
  
  