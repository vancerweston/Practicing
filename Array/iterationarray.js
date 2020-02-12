// Array Iteration (looping over arrays)

let elements = ['Fire', 'Water', 'Air', 'Earth'];
let search = 'Air';
let searchedElement;
for(let counter = 0; counter < elements.length; counter++){
    let currentElement = elements[counter];

    if(search === currentElement){
        searchedElement = currentElement;
        continue;
    }
    console.log(currentElement);
}

console.log('We are outside of our loop.');
console.log(searchedElement);
// >Fire 
// >Water 
// >Earth 
// >We are outside of our loop.
// >Air

let counter = 0;

do{
    console.log(elements[counter]);
    counter++;
} while(counter < elements.length)
// >Fire 
// >Water 
// >Air 
// >Earth 
