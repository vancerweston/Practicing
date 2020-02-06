// JavaScript API: Common Global Objects
//----------------------------

// String (an array of characters in a specific order)
    /*when we create a string JavaScript automatically
    wraps it in a string object */
let myName = 'Vance Weston';
let firstName = myName.substring (0,5);
console.log(firstName);
    //Vance

// Number (a numeric character in a specific order)
    /*just like a string JavaScript automatically wraps
    the number in a number object*/
let myNum = 10;
console.log(Number.isNaN(99));
    //false
console.log(myNum.toString());
    //"10"

// Math
    /*all Math functions are global, which means they 
    function on the imput data and not stored data 
    from a variable*/
let absValue = Math.abs(-500);
console.log(absValue);
    //500

// Date
    /*Date has both .prototype (functions on the
        value holding the date) and global*/
var date1 = new Date('March 26, 1996 03:24:00');
console.log(date1);
    //Tue Mar 26 1996 03:24:00 GMT-0700
    //(Mountain Standard Time)
console.log(date1.getMonth());
    //2 (Months are zero based, Jan is 0)
console.log(date1.getDate());
    //26 (dates are not zero based)
console.log(date1.getDay());
    //2 (days are zero based, Sun is 0)