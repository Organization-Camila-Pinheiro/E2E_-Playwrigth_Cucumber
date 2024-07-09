import {Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';


Then('the costumer should see the first product with name {string}',async function (product: string) {
    await expect(this.page.locator('[data-test="inventory-item-name"]').first()).toContainText(product);  
})

Then('the costumer should see the last product with name {string}', async function(product: string) {
    await expect(this.page.locator('[data-test="inventory-item-name"]').last()).toContainText(product);
})

When('the costumer clicks on the filter name Z to A', async function() {
    await this.page.locator('[data-test="product-sort-container"]').selectOption('za');
})

When('the costumer clicks on the filter name A to Z', async function() {
    await this.page.locator('[data-test="product-sort-container"]').selectOption('az');
})
