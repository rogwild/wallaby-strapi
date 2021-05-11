const R = require("ramda");
const { checkIsJson } = require("./checkers");

const formatError = (error) => ({
  id: error.id,
  message: error.message,
  field: error.field,
});

const throwErrorMessage = (errorObj) => {
  const errorMessage = JSON.stringify(errorObj);
  throw new Error(errorMessage);
};

const sendErrorMessage = ({ ctx, error }) => {
  const errorObj = checkIsJson(error.message) || { message: error.message };
  return ctx.send(
    { statusCode: 400, error: "Bad request", data: formatError(errorObj) },
    400
  );
};

module.exports = {
  throwErrorMessage,
  sendErrorMessage,
  formatError,
};
