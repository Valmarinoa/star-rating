
import './App.css';
import StarRating from './components/StarRating';

function App() {

  return (
    <div className="App">
      <div className='stars'>
        {[...Array(5)].map((star, i) => {
          
          const ratingKey = i + 1

          return <label key={i}>
              <input type="radio" name="rating" value={ratingKey}/>
              <StarRating />
          </label>
        })}
      </div>
    </div>
  );
}

export default App;
