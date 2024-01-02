// @ts-check
const { test, expect } = require('@playwright/test');


// practice playwright test

/**
 * Logo is visible on page load
 * 1. Navigate to 'bloomtech.com'
 * 2. Assert that the logo is visible on the page
 */

test('header has logo visible', async ({ page }) => {
  await page.goto('https://Bloomtech.com/');
  await expect(page.locator('[alt="Logo Bloom Institute of Technology"]')).toBeVisible();
  await expect(page.locator('[class*="landing-page-logo"]')).toBeVisible();
})


/**
 * User is unable to log in with an invalid email
 * 1. Navigate to 'bloomtech.com'
 * 2. Navigate to the 'Log in' page
 * 3. Fill in the 'email' input with an invalid email address
 * 4. Assert "We found some errors. Please review the form and make corrections." is visible on the page
 * 5. Assert "This field cannot be left blank" is visible on the page below the 'password' input
 * 6. Assert that the user is not logged 
 */

test('unable to log in with an invalid email', async ({ page }) => {
  await page.goto('https://Bloomtech.com/');
  await page.getByText('Login');
  await page.getByLabel('Login')
//  .getByRole('button').click();
 
 
  // await page.goto('https://login.bloomtech.com/oauth2/default/v1/authorize?scope=openid+profile+email&sessionToken=&response_type=code&client_id=0oaedywvl9Isex5Vd357&redirect_uri=https%3A%2F%2Fapp.bloomtech.com%2Fapi%2Fauth%2Fcallback%2Fokta&state=883c4d11-53ca-4d26-8fe1-b931dfc188cb');
  // await page.getByLabel('email').fill('max@test.com');
  // const locator = page.locator('input[type=text]');
  // await expect(locator).toHaveValue('max@test.com');
  // await expect(locator).toHaveText(/We found/);
})


/**
 * User is unable to log in with blank credentials
 * 1. Navigate to 'bloomtech.com'
 * 2. Navigate to the 'Log in' page
 * 3. Click the "Sign in" button with both inputs blank
 * 4. Assert "We found some errors. Please review the form and make corrections." is visible on the page
 * 5. Assert "This field cannot be left blank" is visible on the page below the 'password' input
 * 6. Assert "This field cannot be left blank" is visible on the page below the 'email' input
 * 7. Assert that the user is not logged 
 */

/**
 * User is unable to log in with invalid credentials
 * 1. Navigate to 'bloomtech.com'
 * 2. Navigate to the 'Log in' page
 * 3. Fill in the 'email' input with "test@test.com"
 * Fill in the 'password' input with '123'
 * Click "sign in" button
 * Assert User is redirected to a "No Access" page
 * Assert URL contains "/invalid-login"
 * 7. Assert that the user is not logged 
 */