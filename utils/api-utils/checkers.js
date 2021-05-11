const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const checkEmailMask = (email) => emailRegExp.test(email);

const checkIsJson = (obj) => {
  try {
    return JSON.parse(obj);
  } catch (err) {
    return false;
  }
};

module.exports = { checkEmailMask, checkIsJson };
