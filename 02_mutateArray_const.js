// todo Mutate an Array Declared with const

//? An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s.unshift(2);
  s.pop();
  // Using s = [2, 5, 7] would be invalid
  console.log(s);
  // Only change code above this line
}
editInPlace();

//[ 2, 5, 7 ]