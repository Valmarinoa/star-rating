
import React , { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './App.css';

function App() {
  const [reviews, setReviews] = useState(null)

  return (
    <div className="App">
      <div className='stars'>
        {[...Array(5)].map((star, i) => {
          const ratingKey = i + 1

          return <label key={i}>
              <input 
              type="radio" 
              name="rating" 
              value={ratingKey} 
              onClick={() => setReviews(ratingKey)}
              />
              <FaStar 
                className='eachStar' 
                color={ratingKey <= reviews ? "#19d860" : "#e4e5e9"}
                />
          </label>
        })}
      </div>
      <div>
        <h3>{reviews}</h3>
      </div>

    </div>
  );
}

export default App;
