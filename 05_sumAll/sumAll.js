const sumAll = function (num1, num2) {
    if (typeof num1 !== "number" ||
        typeof num2 !== "number" ||
        !Number.isInteger(num1) ||
        !Number.isInteger(num2)) {
        return "ERROR";
    }

    let result = 0;
    if (num1 > num2) { //we don't want 👈🏽
        // and then switch beween if needed
        [num1, num2] = [num2, num1];
    }
    if (num1 >= 0 && num2 >= 0) {
        for (let i = num1; i <= num2; i++) {
            result += i;

        }

    } else {
        return "ERROR";
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
