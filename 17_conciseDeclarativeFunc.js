//todo When defining functions within objects in ES5, we have to use the keyword function as follows:

//?Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

const person = {
  name: "Shon",
  sayHello() {
    return `Hello ${this.name}`;
  },
};
console.log(person.sayHello());

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
