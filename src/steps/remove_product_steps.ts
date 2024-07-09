import {Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';



When('the costumer clicks on the remove button', async function () {
    await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
})


Then('the costumer should not see {string} in the shopping cart', async function (productCart: string)  {
    await expect(this.page.getByText( productCart)).not.toBeVisible();
})

