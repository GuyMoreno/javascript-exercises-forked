const removeFromArray = function (array, ...numsToRemove) {
    const copiedArray = array.slice();

    for (let num of numsToRemove) {
        let index = copiedArray.indexOf(num);
        while (index !== -1) {
            copiedArray.splice(index, 1);
            index = copiedArray.indexOf(num);
        }

    }
    return copiedArray;
};







// Do not edit below this line
module.exports = removeFromArray;
