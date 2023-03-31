import { useState } from "react";

import "./App.css";
import Content from "./component/Content.js";
import NumberRating from "./component/NumberRating.js";
import Thankyou from "./component/Thankyou";
import Submit from "./component/Submit";
import Attribution from "./component/Attribution"

function App() {
  const [rating, setRate] = useState(0);
  const [submitted, setSubmit] = useState(false);

  function handleSubmit() {
    rating !== 0 ? setSubmit(true) : setSubmit(false);
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
        <Attribution />
      </div>
  );
}

export default App;
