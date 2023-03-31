import { useState } from "react";

import "./App.css";
import Content from "./component/Content.js";
import NumberRating from "./component/NumberRating.js";
import Thankyou from "./component/Thankyou";
import Submit from "./component/Submit";

function App() {
  const [rating, setRate] = useState(0);
  const [submitted, setSubmit] = useState(false);

  function handleSubmit() {
    setSubmit(true);
    console.log(`state is ${rating} & submitted is ${submitted}`); 

  }

  return (
    <div className="App">
      <div className={submitted ? "hidden" : "container"}>
        <Content />
        <div className="ratings">
          <NumberRating rating={rating} setRate={setRate} />
          <Submit rating={rating} handleSubmit={handleSubmit} />
        </div>
      </div>
        <Thankyou rating={rating} submitted={submitted}/>
      </div>
  );
}

export default App;
