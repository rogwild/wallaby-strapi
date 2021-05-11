const utils = require("~api/order/services/utils/order.js");
const orderEnums = require("~api/order/models/order.settings.json");
const { setupStrapi } = require("~testsHelpers/strapi.js");

beforeAll(async (done) => {
  await setupStrapi();
  done();
});

describe("Order Services Utils | checkEnumsAttributes", () => {
  test('should return "true" if passed values ​​that are valid for the ENUM of the Order model', () => {
    const passedArrtibutes = [];

    orderEnums.attributes.status.enum.map((en) => {
      passedArrtibutes.push({ attribute: "status", value: en });
    });
    orderEnums.attributes.type.enum.map((en) => {
      passedArrtibutes.push({ attribute: "type", value: en });
    });

    expect(() => utils.checkEnumsAttributes(passedArrtibutes)).not.toThrow();
  });

  test("throw an error if the passed attribute with wrong ENUM value", () => {
    const passedArrtibutes = [{ attribute: "type", value: 234 }];
    const result = () => {
      return utils.checkEnumswAttributes(passedArrtibutes);
    };

    expect(result).toThrow(Error);
  });
});
