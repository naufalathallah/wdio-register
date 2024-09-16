import { faker } from "@faker-js/faker";

export const defaultData = {
  noHp: "081234567890",
  email: `${faker.internet.userName()}@yopmail.com`,
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
};
