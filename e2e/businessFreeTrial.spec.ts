import { test } from '@playwright/test';
import { BusinessPricingPage } from '../page-objects/BusinessPricingPage';
import { HomePage } from '../page-objects/HomePage';
import { BusinessTrialPage } from '../page-objects/BusinessTrialPage';
import { createDataForInvalidForm } from '../fixtures/test-data';


test('Validation for real work email', async ({ page }) => {
    const pricingPage = new BusinessPricingPage(page);
    const homePage = new HomePage(page)
    const trialPage = new BusinessTrialPage(page);

    const invalidFormData = createDataForInvalidForm()

    await homePage.openHomePage();
    await homePage.navigateToBusinessPricingPage();
    await pricingPage.goToFreeTrailPage();

    await trialPage.fillForm(invalidFormData);
    await trialPage.submitForm();
    await trialPage.expectInvalidEmailError();
    });