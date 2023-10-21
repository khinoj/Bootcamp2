const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
// TODO: Add a comment describing the purpose of this variable.
// setting a variable to 0
  let count = 0;

  // TODO: Add a comment describing what is happening. 
  // returning a function
  return function () {
  
   // TODO: Add a comment describing how this variable is being scoped. 
   // this.function scoping
    count++;
   // TODO: Add a comment describing how we are using the 'count' variable.
   // adding text to the count
    this.textContent = `Clicks: ${count}`;
  };
};

// TODO: Add a comment describing the purpose of this loop.
// creates a loop for each button to ensure they can be clicked on by the user.
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
