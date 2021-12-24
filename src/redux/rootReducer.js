import { combineReducers } from "redux";
import { commentsReducer } from "./commentsReduser";
import { inputReducer } from "./inputReducer ";
import { likesReducer } from "./likesReducer";
import { loaderReducer } from "./loaderReducer";

export const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    commentsReducer,
    loaderReducer
    
});

