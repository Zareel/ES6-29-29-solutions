//todo Use Destructuring Assignment to Extract Values from Objects

//* Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

//? Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

const {today} = HIGH_TEMPERATURES;
const {tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line
