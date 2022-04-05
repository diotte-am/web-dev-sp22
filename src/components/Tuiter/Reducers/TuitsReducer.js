import {
    CREATE_TUIT,
    DELETE_TUIT,
    UPDATE_TUIT,
    FIND_ALL_TUITS
} from "../actions/tuits-actions";



const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE_TUIT:
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                    action.tuit : tuit);

        case CREATE_TUIT:
            const newTuit = {
                tuit: action.newTuit.tuit,
                _id: (new Date()).getTime() + '',
                postedBy: {
                    username: "SampleUser"
                },
                handle: "sampleHandle",
                avatarImage: "../../images/react-logo.png",
                likes: 222,
                dislikes: 444,

                stats: {
                    retuits: 111,

                    replies: 333
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