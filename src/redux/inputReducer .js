import { inputText } from "./type";

const initialState = {
    text: ''
};

export const inputReducer = (state = initialState, action) =>  {
 
    switch(action.type) {
        case inputText : 
        return {
            ...state, 
           text: action.text
        } 
        
        default: {
            return state;  
        }
    }
   
}

