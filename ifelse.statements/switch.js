let activity = "gaming!";
let why = "";

//Ask user why
//Give user options: bored, thrill, stressed
//....

let response = "stressed";

switch (response) {
    case "bored":
        //executed bored code here
        console.log("You selected bored.");
        break;
    case "thrill":
        //execute thrill code here
        console.log("You selected thrill.");
        break;
    case "stressed":
        //execute stressed code here
        console.log("You selected stressed.");
        break;
    default:
        console.log("You did NOT select a correct option... Please select again.");
        break;
}

//begin coding after switch
console.log("We are out of the switch statement now.");