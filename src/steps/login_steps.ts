import {Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';


Given('the costumer is on Sauce Labs login page',async function () {
  await this.page.goto(this.URL);
})

When('the costumer fills the username with {string}', async function (username: string) {
  await this.page.locator('[data-test="username"]').fill(username);
})

When('fills the password with {string}', async function(password: string)  {
  await this.page.locator('[data-test="password"]').fill(password);
})

When('the costumer clicks on the login button', async function () {
  await this.page.locator('[data-test="login-button"]').click();
})

Then('the costumer should see the prodcuts page', async function() {
  await expect(this.page.locator('[data-test="title"]')).toBeVisible();
})

Then('the costumer should see an error message {string}', async function (errorMessage: string) {
  await expect(this.page.locator('[data-test="error"]')).toContainText (errorMessage)
})




