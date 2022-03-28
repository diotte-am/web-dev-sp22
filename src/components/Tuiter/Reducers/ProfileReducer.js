import profileData from "../Data/profileData.json";


const ProfileReducer = (state = profileData, action) => {
    switch (action.type) {
        case 'edit-profile':

               return state.map(profile => {
                   profile.name = action.editName;
               })

         default:
                return(state);
    }
};

export default ProfileReducer;