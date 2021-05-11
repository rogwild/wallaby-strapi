/**
 * Get array of model `ENUM` values
 *
 * @param {string} model - model name
 * @param {string} attribute - attribute name
 * @returns {array} - an array of valid `ENUM` values
 */
const getEnumList = (model, attribute) =>
  strapi.models[model].attributes[attribute].enum;

module.exports = { getEnumList };
