import { useSelector} from 'react-redux';
import Loader from "react-loader-spinner";

const Spin = (props) => {
    console.log('spinner');
    const spinner = useSelector(state => state.loaderReducer.loading);
    console.log('spinner', spinner);
    return (
        <div className="loader-styles">
            <Loader 
            type="TailSpin"
            color="#00BFFF"
            height={100}
            width={100}
            visible={spinner}
            />
        </div>
    )
}

export default Spin;
