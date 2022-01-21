
import React , { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './App.css';

function App() {
  const [reviews, setReviews] = useState(null)
  const [hovered, setHover] = useState(null)

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
                color={ratingKey <= (hovered || reviews) ? "#19d860" : "#e4e5e9"}
                onMouseEnter={() => setHover(ratingKey)}
                onMouseLeave={() => setHover(null)}
                />
          </label>
        })}
      </div>
      <div>
        <h3>{reviews} stars</h3>
      </div>

    </div>
  );
}

export default App;
