import profileData from "../Data/profileData.json";


const ProfileReducer = (state = profileData, action) => {
    switch (action.type) {
        case 'edit-profile':

             state.map(profile => {
                 if(action.editName === ""){
                     profile.name = profile.name;
                 } else {
                     profile.name = action.editName;
                 }
                 if(action.editName === ""){
                     profile.bio = profile.bio
                 } else {
                     profile.bio = action.editBio;
                 }

               })
             return (state);

         default:
                return(state);
    }
};

export default ProfileReducer;