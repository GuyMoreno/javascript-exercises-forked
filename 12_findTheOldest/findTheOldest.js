

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
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);//מחשבת את הגיל של האדם שמוגדר כרגע “המבוגר ביותר”.
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath); //מחשבת את הגיל של האדם הנוכחי שמושווה כרגע בלולאה.

        return oldestAge < currentAge ? currentPerson : oldest;
    });
};


// Do not edit below this line
module.exports = findTheOldest;
