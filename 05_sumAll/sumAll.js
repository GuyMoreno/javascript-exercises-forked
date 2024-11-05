const sumAll = function (num1, num2) {
    // innizialize result
    let result = 0;

    // check if order of parmaters wrong
    if (num1 > num2) { //we don't want 👈🏽
        // so change the paras to array
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
