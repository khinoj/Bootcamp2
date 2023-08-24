// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here? spread operator
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
//'Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do? subtracts all numbers in the array
  return array.reduce((a, b) => a + b, 0);
};

a = 0, b = 1 // 0 + 1 -> A
a = 1, b = 2 // 1 + 2 -> A
a = 3, b = 3 // 3 + 3 -> A
a = 6


// TODO: What do you expect to be logged in the console?
//6
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter? rest 
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
//6
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3, 4, 100));
