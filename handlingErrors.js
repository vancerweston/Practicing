// Exceptional situations in code
// Unable to identify all possible issues that 
//      might arise
// 1. Calling an external resource: web server,
//      API, web service, etc.
// 2. Using I/O (input/output): hard drive, file
//      system, a file (corrupt, does not exist)
// 3. Permissions to access
// 4. Runtime errors: bad calculations (divide 
//      by zero, index an array outside of its bounds)

// script terminates
// 'throw' is a keyword we can use to throw 
//      and error

console.log('this is before the error');
try {
    throw 'My Error';
} catch(error) {
    console.log('Code has errored');
    console.log(error);
}
console.log('this is after the error');



function myDivider(num1, num2) {
    if(num2 === 0) {
        throw { name: 'DividedByZeroError', message: 'An attempt was made to divide a number by zero, this is not allowed.'};
    } 
    if(num1 === 0) {
        throw { name: 'ZeroDividedBySomethingError', message: 'An attempt was made to divide zero into a number, this is not allowed.'};
    }
    return num1 / num2;
}

try {
    let results = myDivider(10, 0);
    console.log(results);
} catch (err) {
    console.log(err.message);

    if (err.name === 'DividedByZeroError') {
        console.log('Please provide a divisor that is greater than 0.');
    } else if (err.name === 'ZeroDividedBySomethingError') {
        console.log('Please provide a numerator that is greater than 0.');
    }
}

console.log('We caught the error.')