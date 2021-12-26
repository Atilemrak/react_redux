import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import uniqid from 'uniqid';
import { comments_Create, comments_load } from "./redux/actions";
import SingleComment from "./SingleComment";

function Comments(props) {

    const [textComments, setTextComments] = useState('');
    const dispatch = useDispatch();
    const {comments} = useSelector(state => state.commentsReducer);
    // console.log ('comments =>>>', comments);

    const handleInput = (e) => {
        // console.log(e.target.value); 
        setTextComments(e.target.value);
    }

    const hanldeSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(comments_Create(textComments, id));
        setTextComments('');
    }

    useEffect(() => {
        dispatch(comments_load())
    }, []);

    return ( 
        <div className="card-comments">
            <form onSubmit={hanldeSubmit} className="comments-item-create">
                <input className="input-create" type="text" value={textComments} onChange={handleInput}/>
                <input type="submit" hidden/>
            </form>
            {comments.length > 0 && comments.map((res) => {
                return <SingleComment key={res.id} data={res}/>
            })}
        </div>
    )
}

export default Comments;