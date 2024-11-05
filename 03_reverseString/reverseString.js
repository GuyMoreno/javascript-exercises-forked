const reverseString = function (string) {
    // creating an array that every element is a letter.
    let splitString = string.split("");
    // revese the order of the letters.
    let reversedAraay = splitString.reverse();
    // join
    let joinArray = reversedAraay.join("");

    return joinArray;
};
console.log(reverseString("Hello World")); // dlroW olleH
// shorten and better version below:
// return string.split("").reverse().join("");

// Do not edit below this line
module.exports = reverseString;
