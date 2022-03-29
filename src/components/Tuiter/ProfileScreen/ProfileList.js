
import profileData from "../Data/profileData.json"
import React from "react";
import ProfileListItem from "./ProfileListItem";

const ProfileList = (
    {
        active = 'forYou'
    }
) => {
    return(
        <ul className="container pt-1 col-12 mt-0" >
            {
                profileData.map(profileData => {
                    return(<ProfileListItem profileData={profileData} key={profileData.handle}/>
                    );
                })
            }
        </ul>
    );
}
export default ProfileList;
