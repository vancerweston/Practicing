
// Break in a Loop

let counter = 0;

while (counter < 5) {
    console.log('Counter: ' + counter);
    
    if(counter === 2) {
        break;
    }
    
    counter++;
}

// Continue in a Loop

for(let counter2 = 0; counter2 < 10; counter2++){
    if(counter2 ===4){
        continue;
    }
    console.log(counter2);
}

console.log('We are done looping.');