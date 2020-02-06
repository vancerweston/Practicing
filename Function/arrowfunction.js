//Arrow Function
//   Special Syntax
//     (param1, param2, ..., paramN) => ( statments )
//     (param1, param2, ..., paramN) => expression
//         equivalent to: => { return expressions; }
    
    //Normal function
let myFunction = function(numOne, numTwo) {
    let sum = numOne + numTwo;
    return sum;
}
let result = myFunction(2, 3);
console.log(result);

    //Arrow function
let myOtherFunction = (numOne, numTwo) => {
    let sum2 = numOne + numTwo;
    return sum2;
}
let result2 = myOtherFunction(2, 3);
console.log(result2);

    //Arrow functions getting more terse
let myLaterFunction = (numOne, numTwo) => {
    return numOne + numTwo;
}
let result3 = myLaterFunction(2, 3);
console.log(result3);

    //Next
let myLastFunction = (numOne, numTwo) => 
    numOne + numTwo;

let result4 = myLastFunction(2, 3);
console.log(result4);

        //All these functions are identical

//   Parentheses are optional when there's only one param:
//     (singleParam) =>  { statements }
//     singleParam => { statements }

let newFunction = (paramOne) => paramOne++;
let newFunction2 = paramOne => paramOne++;

//   The parameter list for a function with no parameters
//   should be written with a pair of parentheses
//     () => { statements }

let noParamFunction = () => console.log('This function takes no parameters.')
noParamFunction();