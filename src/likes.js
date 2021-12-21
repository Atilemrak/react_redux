import {connect} from 'react-redux';
import { decrementLikes, incrementLikes } from './redux/actions';


function Likes(props) {
    return (
        <div className='button-controls'>
            <button onClick={props.onIncrementLikes}> ♥ {props.likes}</button>
            <button onClick={props.onDecrementLikes}>  👎 Dislike</button>
        </div> 
    );
    
}

function mapStateToProps(state) {
    //  console.log (state);
    //  console.log (state.like);
    const {likes} = state.likesReducer;
    return {
        likes: likes
    }
}

function mapDispathToProps(dispatch) {
        return {
            onIncrementLikes: () => {return dispatch(incrementLikes())},
            onDecrementLikes: () => {return dispatch(decrementLikes())}
        }
}

export default connect(mapStateToProps, mapDispathToProps)(Likes);