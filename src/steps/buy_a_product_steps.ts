
import {Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';


When('the costumer clicks on the checkout button', async function() {
    await this.page.locator('[data-test="checkout"]').click();
})

When('the costumer fills the first name with {string}, the last name  with {string} and de zip code with {string}', async function (firstName: string, lastName: string, zipCode: string) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(zipCode);
    
})

When('the costumer clicks on the continue button', async function() {
    await this.page.locator('[data-test="continue"]').click();
  })

Then('the costumer should see the {string} title', async function (checkout: string) {
    await expect(this.page.locator('[data-test="title"]')).toContainText(checkout);
})

When('the costumer clicks on the finish button', async function () {
    await this.page.locator('[data-test="finish"]').click();
})

Then('the user should see the buy complete message {string}',async function (finishMessage: string) {
    await expect(this.page.locator('[data-test="complete-header"]')).toContainText(finishMessage);
  
})


  