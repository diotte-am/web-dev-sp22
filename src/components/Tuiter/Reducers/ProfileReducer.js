import profileData from "../Data/profileData.json";


const ProfileReducer = (state = profileData, action) => {
    switch (action.type) {
        case 'edit-profile':
            return (
                 state.map(profile => {
                     if(action.editName === ""){

                     } else {
                         profile.name = action.editName;
                     }
                     if(action.editName === ""){

                     } else {
                         profile.bio = action.editBio;
                     }

                 })
             );

         default:
                return(state);
    }
};

export default ProfileReducer;