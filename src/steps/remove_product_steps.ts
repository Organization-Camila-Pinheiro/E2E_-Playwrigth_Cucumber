import {Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';


Then('the costumer should not see any product', async function () {
    await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
})

When('the costumer clicks on the remove button', async function () {
    await expect(this.page.locator('[data-test="item-4-title-link"]')).not.toBeVisible();
})
