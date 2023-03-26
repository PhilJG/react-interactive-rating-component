import './App.css';
import Content from './component/Content.js';
import NumberRating from './component/NumberRating.js';


function App() {
  return (
    <div className="App">
      <div className="container">
      {/* App content */}
    <Content />
      {/* Number rating */}
      {/* Submit button */}
      <NumberRating />
    
      </div>
    </div>
  );
}

export default App;
