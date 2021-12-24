import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { comments_Update, comments_Delete } from "./redux/actions";

function SingleComment({data}) {
    // console.log(data);
    const [commentText, setCommentText] = useState('');
    // const [text, id] = data;
    const {text, id} = data
    const dispatch = useDispatch();

    useEffect(() => {
      if(text) {
          setCommentText(text);
      }

    }, [text]);

    const handleInput = (e) => {
        setCommentText(e.target.value);

    };

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(comments_Update(commentText, id));
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(comments_Delete(id));
    }



    return ( 
            <form onSubmit={handleUpdate} className="comments-item">
                <div onClick={handleDelete} className="commments-item-delete">&times;</div>
                <input type="text" value={commentText} onChange={handleInput}/>
                <input type="submit" hidden/>
            </form>
    )
}

export default SingleComment;