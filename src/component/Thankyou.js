import { ReactComponent as Illustration } from "../images/illustration-thank-you.svg";

export default function Thankyou({submitted, rating}) {

  return (
    <div className={submitted ? "container" : "hidden"}>
      <Illustration />
      <div className="selection-box">You selected {rating} out of 5</div>
      <h1 className="thank-you-h">Thank you!</h1>
      <p className="thank-you-p">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
