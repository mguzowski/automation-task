import { faker } from '@faker-js/faker';

export function createDataForInvalidForm() {
  return {
    fullName: faker.person.fullName(),
    email: 'test@gamil.com',
    companyName: faker.company.name(),
  };
}