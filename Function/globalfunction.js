// Global Functions in JavaScript API
//----------------

// isNan()
/*   allows us to input a variable or data and 
    ask and find out if it is not a number
    using true or false. */
let isNotANumber = 'Not a Number';
let result = isNaN(isNotANumber);
console.log(result);
    //true
result = isNaN(99);
console.log(result);
    //false
result = isNaN('99');
console.log(result);
    //false (auto conversion of string to number)
    //auto convert only works if string has only 
    //a number in it.

// parseFloat()
    //parseFloat pulls the number out of a string
    //and returns it as a number.
result = parseFloat('3.567')
console.log(result);
    //3.567
result = parseFloat('Not a number');
console.log(result);
    //NaN
result = parseFloat('5.67 has words');
console.log(result);
    //5.67
    //can float number if it is at the beginning
    //of the string, NaN if not at beginning.

// parseInt()
    //operates just like parseFloat()
result = parseInt(76);
console.log(result);
    //76
result = parseInt(45.65);
console.log(result);
    //45 parses only integer(whole number)
result = parseInt('Hi')
console.log(result);
    //NaN
result = parseInt('56.1 I\'m a String.')
console.log(result);
    //56 auto convert same rules apply

// encodeURI
    //calling web API
    //encodeURI fixes any error uri/url characters
    // /products/shoes/sneakers.html
let uriBase = 'https://www.neumont.edu';
let uriPath = '/products/shoes';
let userSelection = 'fancy sneakers';
let apiCallUri = uriBase + uriPath + userSelection;
    //https://www.neumont.edu/products/shoes/fancy sneakers
    //the space is not compatable and would error
let apiCallUriEncoded = encodeURI(apiCallUri);
    //https://www.neumont.edu/products/shoes/fancy%20sneakers
    //the uri is now compatable.

// decodeURI
    //URL and URI is the same thing
    //takes a uri and makes it human readable
    console.log(decodeURI(apiCallUriEncoded));
        //https://www.neumont.edu/products/shoes/fancy sneakers