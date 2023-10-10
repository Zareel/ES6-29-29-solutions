//todo Use class Syntax to Define a Constructor Function

//? Use the class keyword and write a constructor to create the Vegetable class.

//* The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.

// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(`${this.name}`);
  }
}

// Only change code above this line

const carrot = new Vegetable("carrot");
console.log(carrot.name); // Should display 'carrot'
