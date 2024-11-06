const convertToCelsius = function (fahrenhit) {
  let result = 0;
  result = (fahrenhit - 32) * 5 / 9;
  return parseFloat(result.toFixed(1));

};

const convertToFahrenheit = function (celsius) {
  let result = 0;
  result = celsius * 9 / 5 + 32;
  return parseFloat(result.toFixed(1));
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
