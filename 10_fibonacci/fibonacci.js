// 1, 1, 2, 3, 5, 8, 13, 21, 34...
// n == position
const fibonacci = function (n) {
    if (typeof n !== 'number') {
        n = parseInt(n);
    }

    // check for valid input
    if (n < 0) return "OOPS";
    if (n == 1 || n == 2) return 1;
    if (n == 0) return 0;

    let prev = 1;
    let current = 1;

    for (let i = 3; i <= n; i++) { // start from 3 because we already have the 2 first
        let next = prev + current; // fibo number.
        prev = current;
        current = next;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
