/*
console.log('\"I\'m the best\" -Jared');

function sayYourName(yourName) {
    console.log(`Hello ${yourName}, how are you feeling today?`);
    console.log(`${yourName}, you are doing awesome!`)
}

let myName = 'Jared';

sayYourName(myName);
*/

//Functions are repeatable code
//To help us use the DRY and KISS principles

function funkyAddition(numOne, numTwo, numThree) {
    let sum = numOne + numThree + numTwo;
    return sum;
}

let results = funkyAddition(3, 6, 9);
console.log(results);

results = funkyAddition(2, 1, 3);
console.log(results);

results = funkyAddition(4, 7, 12);
console.log(results);
