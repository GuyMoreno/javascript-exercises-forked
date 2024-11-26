

const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

const findTheOldest = function (people) {
    // check object object 1 by 1
    return people.reduce((oldest, currentPerson) => {
        // pass the first func from above
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        return oldestAge < currentAge ? currentPerson : oldest;
    });
};


// Do not edit below this line
module.exports = findTheOldest;
