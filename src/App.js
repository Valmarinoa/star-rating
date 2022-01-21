
import './App.css';
import StarRating from './components/StarRating';

function App() {

  return (
    <div className="App">
      <div className='stars'>
        {[...Array(5)].map((star) => {
          return <label key={star}>
              <input type="radio" name="rating" />
              <StarRating />
          </label>
        })}
      </div>
    </div>
  );
}

export default App;
