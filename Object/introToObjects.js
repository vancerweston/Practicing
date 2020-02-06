// Creating the obect of a Person

let personVance = {
    name: 'Vance',
    eyeColor: 'Hazel',
    hairColor: 'Dirty Blond',
    height: 6,
    weight: 160,
    talk: function() {
        return this.name + ' says hello to you.';
    },
    walk: function() {
        return this.name + ' is walking away.';
    },
    run: function() {
        return this.name + ' is runing.';
    }

}

console.log(personVance.talk());
console.log(personVance.walk());
console.log(personVance.run());

console.log(personVance.weight);
personVance.weight = 180;
    //we can reassign value of our attributes(keys)
console.log(personVance.weight);