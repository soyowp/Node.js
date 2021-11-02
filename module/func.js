const { odd, even } = require("./let");

const checkOE = (num) => {
  if (num % 2) {
    return odd;
  }
  return even;
};

module.exports = checkOE;
