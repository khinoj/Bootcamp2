// TODO: Create a `name` variable
const first_name = ['Bob', 'Tom', 'Orange'];

// TODO: Create a `thoughts` variable
const think = '3';

// This should be a string regarding what you think of React
const react = 'is very odd';


const myList = first_name.map((item) => <p>{item}</p>)

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          {/* TODO: Add your name variable */}
          <h1>Hi! My name is {first_name}</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has {first_name.length} letters</h2>
          {/* TODO: Add your thoughts variable */}
          <h2>I think React {react}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
