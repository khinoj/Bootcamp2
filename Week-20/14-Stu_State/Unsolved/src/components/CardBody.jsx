// TODO: Add a comment explaining what is being passed to this "child" component as props

function CardBody(props) {
  return (
    <div className="card-body">
      {/* gets data from cardbody props past in from counter*/}
      <p className="card-text">Click Count: {props.count}</p>
      <button
        type="button"
        className="btn btn-primary"
        // {/* gets data from cardbody props */}
        onClick={props.handleIncrement}
      >
        Increment
      </button>{' '}
      <button
        type="button"
        className="btn btn-danger"
        // {/* gets data from cardbody props */}
        onClick={props.handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default CardBody;
