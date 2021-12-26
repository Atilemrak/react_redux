import { errorOn } from "./actions"
import { commentsCreate } from "./type"

const badWords = ['козел', 'урод']

export function spamFilter(store) {
    console.log(store);
    return function (next) {
        return function (action) {
            if (action.type === commentsCreate) {
                console.log('ss')
                const hasBadWords = badWords.some(res => action.data.text.includes(res));
                if (hasBadWords) {
                    return store.dispatch(errorOn('не надо так'))
                }
            }
            return next(action);
        }
    }
}

// export function spamFilter(store) {
//     return function (next) {
//         return function (action) {
//             if (action.type === commentsCreate) {
//                 console.log('ss')
//                 const hasBadWords = badWords.some(res => action.data.text.includes(res));
//                 if  (hasBadWords) {
//                     return store.dispatch(errorOn('не надо так'))
//                 }
//             }
//             return next(action);
//         }
//     }
// }