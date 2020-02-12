// Common Array Methods
// -------------------------

let myData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let elements = ['Fire', 'Air', 'Water'];

// Join
//      put the data out as user readable
let elementsJoined = elements.join(' - ');
console.log(elementsJoined);
// >Fire - Air - Water

// Pop
//      removes the last element and removes
//      it to caller, is destructive
console.log(elements);
let capturedElement = elements.pop();
console.log(capturedElement);
console.log(elements);
// before >Array(3) ['Fire', 'Air', 'Water']
// >Water
// after >Array(2) ['Fire', 'Air']

// Push
//      puts a new element at the end of the array
let capturedElementStorage = ['Earth'];
capturedElementStorage.push(capturedElement);
console.log(elements);
console.log(capturedElementStorage);
// >Array(2) ['Fire', 'Air']
// >Array(2) ['Earth', 'Water']

// Shift
//      removes the first element, sister of pop
capturedElement = capturedElementStorage.shift();
elements.push(capturedElement);
capturedElement = capturedElementStorage.shift();
elements.push(capturedElement);
console.log(elements);
console.log(capturedElementStorage);
// >Array(4) ['Fire', 'Air', 'Earth', 'Water']
// >Array(0) []

// indexOf
//      lets us locate any item in the array
//      works like a search engine
let earthIndex = elements.indexOf('Earth');
console.log(earthIndex);
// >2
console.log(elements[earthIndex]);
// >Earth

// Slice
//      returns a shallow copy of a portion of the 
//      array as a new array
let subElements = elements.slice(1, 3);
console.log(subElements);
// >Array(2) ['Air', 'Earth']

// Splice
//      change the content of an array by changing
//      or removing elements of the array
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // the 0 means no replace
months.splice(4, 1, 'May'); // the 1 replaces
console.log(months);
//before >Array(5) ['Jan', 'Feb', 'March', 'April', 'June']
//after >Array(5) ['Jan', 'Feb', 'March', 'April', 'May']



