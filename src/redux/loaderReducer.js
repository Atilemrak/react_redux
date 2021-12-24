import { loaderDisplayOff, loaderDisplayOn } from "./type";

const initialState = {
    loading: false
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
        
        default: {
            return state;  
        }
    }
   
}

