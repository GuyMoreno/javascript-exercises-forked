const palindromes = function (str) {
    // Define valid characters: lowercase letters and digits
    const validChars = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // Step 1: Clean the string
    cleanStr = str
        .toLowerCase() //Convert string to lowercase
        .split('') // Split string into an array of characters
        .filter(char => validChars.includes(char)) // check every element and filter if includes in validChars
        .join(''); //Join array back into a string

    // Step 2: Reverse the cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');

    // Step 3: Check if the cleaned string is the same as the reversed string
    return cleanStr === reversedStr; // Return true if palindrome, false otherwise
};

// Do not edit below this line
module.exports = palindromes;
