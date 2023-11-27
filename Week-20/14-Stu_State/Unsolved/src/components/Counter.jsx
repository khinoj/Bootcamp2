import { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// export functions inside it brackets 
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // useState is a function that hold the array for 
  const [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // click handler to increase number
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // decrease count by 1
  const handleDecrement = () => {
    if (count > 0) {
      setCount((count - 1));
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      {/* count, handleIncrement, handleDecrement */} 
      {/* exporting to cardbody  */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
