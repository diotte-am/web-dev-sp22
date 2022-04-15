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
                logoImage: "https://cdn.pixabay.com/photo/2013/07/12/16/51/internet-151384_960_720.png",
                postedBy: {
                    username: "Amare Diotte"
                },
                handle: "adiotte",
                likes: 0,
                dislikes: 0,

                stats: {
                    retuits: 0,

                    replies: 0
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