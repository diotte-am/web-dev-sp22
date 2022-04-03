import {
    CREATE_TUIT,
    DELETE_TUIT,
    FIND_ALL_TUITS
} from "../actions/tuits-actions";

const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_TUIT:
            const newTuit = {
                'tuit': action.newTuit.action,
                '_id': (new Date()).getTime() + '',
                'postedBy': {
                    'username': "ReactJS"
                },
                'stats': {
                    'retuits': '111',
                    'likes': '222',
                    'replies': '333'
                }
            }
            return [
                newTuit,
                ...state

            ];
        case DELETE_TUIT:
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        case FIND_ALL_TUITS:
            return action.tuits;
        default:
            return state;
    }


}

export default tuitsReducer;