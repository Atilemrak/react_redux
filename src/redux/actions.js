import { decrement, increment, inputText, commentsCreate, commentsUpdate, commentsDelete, commentsLoad, loaderDisplayOn, loaderDisplayOff, errorDisplayOn, errorDisplayOff } from "./type";

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

export function errorOn(text) {
    return dispatch => {
        dispatch({
            type: errorDisplayOn,
            text
        });
        setTimeout(() => {
            dispatch(errorOff());
        }, 2000)
    }
}

export function errorOff() {
    return {
        type: errorDisplayOff
    }
   
}

export function comments_load() {
    return async dispatch => {
        try {
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
        catch (err) {
            dispatch(errorOn('ошибка:', err));
            // console.log(err);
            dispatch(loaderOff());
        }
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