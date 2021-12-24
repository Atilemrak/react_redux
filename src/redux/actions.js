import { decrement, increment, inputText, commentsCreate, commentsUpdate, commentsDelete, commentsLoad, loaderDisplayOn, loaderDisplayOff } from "./type";

export function incrementLikes() {
    return {
        type: increment
    }
}


export function decrementLikes() {
    return {
        type: decrement
    }
}

export function input_Text(text) {
    return {
        type: inputText,
        text
    }
}

export function comments_Create(text, id) {
    return {
        type: commentsCreate,
        data: { text, id }
       
    }
}

export function comments_Update(text, id) {
    return {
        type: commentsUpdate,
        data: { text, id }
       
    }
}
export function comments_Delete(id) {
    return {
        type: commentsDelete,
        id
       
    }
}

export function comments_load() {
    return async dispatch => {
        dispatch(loaderOn());
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
         const jsonData = await response.json();

         setTimeout(() => {
            dispatch({
                type: commentsLoad,
                data: jsonData
            });
            dispatch(loaderOff());
         }, 1000)
         
    }
}

export function loaderOn() {
    return {
        type: loaderDisplayOn,
    }
}


export function loaderOff() {
    return {
        type: loaderDisplayOff,
    }
}