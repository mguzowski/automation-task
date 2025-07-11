import { expect, Page } from '@playwright/test';

export class BusinessTrialPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillForm({ fullName, email, companyName }: { fullName: string; email: string; companyName: string }) {
    await this.page.getByRole('textbox', { name: 'Full name' }).fill(fullName);
    await this.page.getByRole('textbox', { name: 'Work email' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Company name' }).fill(companyName);
    await this.page.getByRole('radio', { name: 'European Union' }).click();
    await this.page.getByRole('checkbox', {
      name: 'I have read and agree to the Terms and Conditions.',
    }).click();
  }

  async submitForm() {
    await this.page.getByRole('button', { name: 'Continue' }).click();
  }

  async expectInvalidEmailError() {
    await expect(this.page.getByText('Please enter a valid company email address (e.g., john.doe@company.com)')).toBeVisible();
  }
 }