import { decrement, increment, inputText } from "./type";

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
        text: text
    }
}