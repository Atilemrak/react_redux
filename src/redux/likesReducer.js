import { decrement, increment } from "./type";

const initialState = {
    likes: 0
};

export const likesReducer = (state = initialState, action) =>  {
    // const {likes} = state;
    switch(action.type) {
        case increment : 
        return {
            ...state, 
            likes: state.likes + 1
        } 
        case decrement : 
        return {
            ...state, 
            likes: state.likes - 1
        }
        
        default: {
            return state;  
        }
    }
   
}

