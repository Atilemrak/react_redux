import { loaderDisplayOff, loaderDisplayOn, errorDisplayOn, errorDisplayOff } from "./type";

const initialState = {
    loading: false,
    error: null
};

export const loaderReducer = (state = initialState, action) =>  {
 
    switch(action.type) {
        case loaderDisplayOn : 
        return {
            ...state, 
           loading: true
        } 

        case loaderDisplayOff : 
        return {
            ...state, 
           loading: false
        } 

        case errorDisplayOn : 
        return {
            ...state, 
           error: action.text
        } 
        case errorDisplayOff : 
        return {
            ...state, 
           error: null
        } 
        
        default: {
            return state;  
        }
    }
   
}

