import { useState } from "react";

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
    { id: 1, clicked: false },
    { id: 2, clicked: false },
    { id: 3, clicked: false },
    { id: 4, clicked: false },
    { id: 5, clicked: false },
  ];

  const ratingsItems = ratings.map((rating) => (
    <button className="ratings-selection">{rating.id}</button>
  ));

  return <div className="ratings-selection-list">{ratingsItems}</div>;
}

function Submit() {
  return <button className="ratings-submit">SUBMIT</button>;
}
