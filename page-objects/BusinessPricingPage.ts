import { Page } from '@playwright/test';

export class BusinessPricingPage {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  async selectPlanTab(tabName: string) {
    await this.page.getByRole('tab', { name: tabName }).click();
  }

  async getCardPrice(planName: string): Promise<string> {
    const pricingCard = this.page.locator('[data-testid="pricing-card"]').filter({
      has: this.page.locator('p', { hasText: planName }),
    });

    const priceElements = await pricingCard
      .locator('[data-testid="pricing-widget-wrapper"] span.heading-lg:visible')
      .allInnerTexts();

    return priceElements.join('');
  }

  async goToFreeTrailPage() {
    await this.page.locator('a[href="/business-free-trial/?trial_ref=business"]:visible').first().click();
  }

}