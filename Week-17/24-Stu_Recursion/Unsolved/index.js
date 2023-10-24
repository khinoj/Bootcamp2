// TODO: Add a comment describing what the `position` parameter means for this function.
// start the # at a certain position
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  // if less than index 1 return
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  // determines the next value 
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return?
// is 34 in the seq. 
console.log(fibonacci(9));
