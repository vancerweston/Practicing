// Ordered Lists
//  Favorite Places
//      1. Bear Lake, Utah
//      2. Ocean Side, California
//      3. Mohogany Bay, Isla Rotan


// Arrays
//      an ordered list and are 0 indexed
let favoritePlaces = ['Bear Lake, Utah', 
                        'Ocean Side, California', 
                        'Mohogany Bay, Isla Rotan'];

// Indexing
//      remember an array is 0 indexed
let firstPlace = favoritePlaces[0];
console.log(firstPlace);

//      same thing as above
console.log(favoritePlaces[0]);

// Assigning Values
//      adjusting/updating the array
favoritePlaces[4] = favoritePlaces[2];
favoritePlaces[2] = 'Geogia';
favoritePlaces[3] = 'Cruise ships';

console.log(favoritePlaces);