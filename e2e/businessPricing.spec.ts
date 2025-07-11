import { test, expect, Page } from '@playwright/test';
import { BusinessPricingPage } from '../page-objects/BusinessPricingPage';
import { HomePage } from '../page-objects/HomePage';

test.describe('Pricing tests', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.openHomePage();
    })

    test('verify pricing for 1 year plan', async ({ page }) => {
        const pricingPage = new BusinessPricingPage(page);
        const homePage = new HomePage(page)

        const expectedTeamsPrice = '1.99';
        const expectedBusinessPrice = '3.99';
        const expectedEnterpricePrice = '5.99';


        await homePage.navigateToBusinessPricingPage();
    
        await pricingPage.selectPlanTab('1-year plan'); 
    
        const teamsPrice = await pricingPage.getCardPrice('Teams');
        expect(teamsPrice).toBe(expectedTeamsPrice);

        const businessPrice = await pricingPage.getCardPrice('Business');
        expect(businessPrice).toBe(expectedBusinessPrice);

        const enterprisePrice = await pricingPage.getCardPrice('Enterprise');
        expect(enterprisePrice).toBe(expectedEnterpricePrice);
    });

    test('verify pricing for 2 year plan', async ({ page }) => {
        const pricingPage = new BusinessPricingPage(page);
        const homePage = new HomePage(page)

        const expectedTeamsPrice = '1.79';
        const expectedBusinessPrice = '3.59';
        const expectedEnterpricePrice = '5.39';


        await homePage.navigateToBusinessPricingPage();
    
        await pricingPage.selectPlanTab('2-year plan'); 
    
        const teamsPrice = await pricingPage.getCardPrice('Teams');
        expect(teamsPrice).toBe(expectedTeamsPrice);

        const businessPrice = await pricingPage.getCardPrice('Business');
        expect(businessPrice).toBe(expectedBusinessPrice);

        const enterprisePrice = await pricingPage.getCardPrice('Enterprise');
        expect(enterprisePrice).toBe(expectedEnterpricePrice);
    })
});