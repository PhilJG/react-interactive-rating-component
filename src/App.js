import {useState} from 'react' 

import './App.css';
import Content from './component/Content.js';
import NumberRating from './component/NumberRating.js';
import Thankyou from './component/Thankyou';


function App() {
  const [rating, setRate] = useState(0);
  
  return (
    <div className="App">
      <div className="container">
      {/* App content */}
    <Content />
      {/* Number rating */}
      {/* Submit button */}
      <NumberRating 
      rating={rating}
      setRate = {setRate}
      />
      </div>
      <Thankyou rating={rating}/>
    </div>
  );
}

export default App;
