// todo Use Destructuring Assignment to Assign Variables from Objects

//* Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

//? Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

const { today: highToday } = HIGH_TEMPERATURES;
const { tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// Only change code above this line

