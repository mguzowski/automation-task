import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  async openHomePage() {
    await this.page.goto('https://nordpass.com/b/');
  }

  async navigateToBusinessPricingPage() {
    await this.page.getByRole('link', { name: 'For Business' }).click();
  }
  
}