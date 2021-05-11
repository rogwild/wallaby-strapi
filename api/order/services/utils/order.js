"use strict";
const R = require("ramda");
const { throwErrorMessage } = require("../../../../utils/api-utils/errors");
const {
  getEnumList,
} = require("../../../../utils/content-types/common/models");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  /**
   * Checking an array of passed attributes of type `ENUM`.
   * If the array has an `ENUM` type that is not in the valid values ​​of the model, an error will be thrown
   *
   * @param {array} attributes - array of attributes.
   *    For example:
   *    `[{ attribute: "type", value: "market" }, { attribute: "status", value: "opened" }]`
   * @return {boolean|error} - if all elements of the array are valid, then the value will be returned `true`
   */
  checkEnumsAttributes(attributes) {
    R.all(({ attribute, value }) => {
      const enumList = getEnumList("order", attribute);
      if (enumList && !enumList.includes(value)) {
        throwErrorMessage({
          message: `Invalid ${attribute} value.`,
        });
      }
      return true;
    }, attributes);
  },
};
