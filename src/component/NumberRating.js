// import { useState } from "react";

export default function NumberRating() {
  // const [rating, setRating] = null;

  return (
    <div className="ratings">
      <RatingBtns />
      <Submit />
    </div>
  );
}

function RatingBtns() {
  const ratings = [
    { key: 1, clicked: false },
    { key: 2, clicked: false },
    { key: 3, clicked: false },
    { key: 4, clicked: false },
    { key: 5, clicked: false },
  ];

  function handleClick({key}){
    console.log('clicked');
    
  }

  const ratingsItems = ratings.map((rating) => (
    <button className="ratings-selection" onClick={() => {
      console.log(`${rating.key}`);
    }}>{rating.key}</button>
  ));

  return (
  <div className="ratings-selection-list" >
    {ratingsItems}
    </div>
    );
}

function Submit() {
  function handleSubmit(){
    
  }
  return <button className="ratings-submit" onClick={handleSubmit}>SUBMIT</button>;
}
