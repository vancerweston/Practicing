//Advanced Funtion Syntax
//-------------------------------------------------

//Named Function
function myFunction(stringOne, stringTwo, stringThree) {
    let sum = stringOne + stringTwo + stringThree;
    return sum;
}
let results = myFunction('Hi, ', 'I\'m Neat, ', 'don\'t you think?');
console.log(results);

//Anonymous Function
//(often seen when defining methods on objects)
function () {

}

//Expression Function
//(anonymous referenced with a variable name)
let thisFunction = function (yourName) {
    return `Hello, your name is ${yourName}.`;
}
let name =  thisFunction('Vance');
console.log(name);
