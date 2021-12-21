import {useDispatch, useSelector} from 'react-redux';
import { input_Text } from './redux/actions';

function Title(props) {

    const dispatch = useDispatch();
    const text = useSelector(state => {
        const {text} = state.inputReducer;
        return text;
    });
    const handleChange = (e) => {
        dispatch(input_Text(e.target.value))
    };

    return (
        <div className="card-title">
            <div className="card-title-top">
                <input type="text" onChange={handleChange}></input>
            </div>
            <p>{text}</p>
        </div>
    );
    
}

export default Title;