import { commentsCreate, commentsUpdate, commentsDelete, commentsLoad } from "./type";

const initialState = {
    comments: []
};

export const commentsReducer = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case commentsCreate:
            return {
                ...state,
                comments: [...state.comments, action.data]
            }

            case commentsLoad:
                const commentsNew = action.data.map((res) => {
                    return {
                        text: res.name,
                        id: res.id
                    }
                })
            return {
                ...state,
                comments: commentsNew
            }


        case commentsUpdate:
            const { data } = action;
            const { comments } = state;
            const itemindex = comments.findIndex(res => res.id === data.id);
            const nextComment = [
                ...comments.slice(0, itemindex),
                data,
                ...comments.slice(itemindex + 1)
            ];
            return {
                ...state,
                comments: nextComment
            }


        case commentsDelete:
            return (() => {
                const { id } = action;
                const { comments } = state;
                const itemindex = comments.findIndex(res => res.id === id);
                const nextComment = [
                    ...comments.slice(0, itemindex),
                    ...comments.slice(itemindex + 1)
                ];
                return {
                    ...state,
                    comments: nextComment
                }
            })();

        default: {
            return state;
        }
    }

}