const { odd, even } = require("./let");
const checkOE = require("./func");

const funcStr = (str) => {
  if (str.length % 2 != 0) {
    return odd;
  }
  return even;
};

console.log(checkOE(10));
console.log(funcStr(`hellllo`));
