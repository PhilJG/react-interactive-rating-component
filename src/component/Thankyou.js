export default function Thankyou({submitted, rating}) {

  return (
    <div className={submitted ? "container" : "hidden"}>
      {/* <img src="./images/illustration-thank-you.svg"></img> */}
      <div>You selected {rating} out of 5</div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
