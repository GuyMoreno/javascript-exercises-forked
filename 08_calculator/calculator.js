const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

// for multiple numbers
const sum = function (array) {
  return array.reduce((total, current) => total + current, 0)
}

const multiply = function (array) {
  return array.reduce((product, current) => product * current, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);

};

const factorial = function (n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
