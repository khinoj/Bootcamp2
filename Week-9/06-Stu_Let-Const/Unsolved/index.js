// TODO: Fix the declarations so that the function works properly.
const addGreetingMessage = (name) => {
  let message = 'How are you?';

  if (name.length > 0) {
    let message = 'Hello ' + name;
    console.log(message);
  }

  console.log(message);
};

addGreetingMessage('Tammy');

// TODO: Fix the declarations so that the function works properly.
const calloutCounter = () => {
  let callout = 'Outside of the loop';
  var counter = 5;

  while (counter > 0) {
    let callout = 'Inside the loop';
    console.log(counter, callout);
    counter--;
  }

  console.log(callout);
};

calloutCounter();

// TODO: Fix the declarations so that the function works properly.
const countMatrix = () => {
  for (let i = 0; i < matrix.length; i++) {
    var line = matrix[i];
    for (let i = 0; i < line.length; i++) {
      var element = line[i];
      console.log(element);
    }
  }
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

countMatrix(matrix);


//tutor
const doubled = (num1) => { 
  return num1 * 2;
}

const doubled2 = num1 => {
  return num1 * 2;
}

const doubled3 = num1 => num1 *2;


for(var i = 0; i < 5; i++){
  console.log(i)
}

for(var i = 0; i < 5; i++){
  console.log(i);
}

console.log(num1)

var num1 = 5
