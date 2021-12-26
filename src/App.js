import { useSelector} from 'react-redux';

import './App.css';

import Comments from './Comments';
import Likes from './likes';
import Spin from './spin';
import Title from './title';



function App() {
  const error = useSelector(state => state.loaderReducer.error);
  console.log(error);
  return (
    <div className="App">
      <div className="wrap">
        <Spin/>
        <div className="card">
          {error && <div className='error-message'>{error} </div>}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Title/>
            <Likes />
          </div>
          <Comments/>
        </div>
      </div>
    </div>
  );
}

export default App;
