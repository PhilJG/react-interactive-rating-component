export default function NumberRating({rating, setRate}) {
  function handleSubmit() {
    console.log(`state is ${rating}`);
  }

  return (
    <div className="ratings">
      <RatingBtns setRate={setRate} rating={rating} />
      <Submit rating={rating} handleSubmit={handleSubmit} />
    </div>
  );
}

function RatingBtns({ rating, setRate }) {
  const ratings = [1, 2, 3, 4, 5];

  const ratingsItems = ratings.map((r) => (
    <button 
    //By providing a unique key prop to each button element, you are helping React to identify each element uniquely and optimize the rendering performance.
    key={r}
    className="ratings-selection" 
    //By wrapping the setRate function call inside an arrow function, to delay the execution of the function until the button is clicked and you are not directly updating the state of the App component while it is still rendering.
    onClick={() => setRate(r)}
    >
      {r}
    </button>
  ));

  return <div 
  className="ratings-selection-list">
    {ratingsItems}
    </div>;
}

function Submit({ rating, handleSubmit }) {
  return (
    <button className="ratings-submit" onClick={handleSubmit}>
      SUBMIT
    </button>
  );
}
