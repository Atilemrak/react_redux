import './App.css';
import Likes from './likes';
import Title from './title';


function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Title/>
            <Likes />
            
 
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
