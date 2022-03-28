import profileData from "../Data/profileData.json"
import React from "react";
import EditProfileItem from "./EditProfileItem";

const EditProfileList = (
    {
        active = 'forYou'

    }
) => {
    return(
        <ul className="container pt-1 col-12 mt-0" >
            {
                profileData.map(profileData => {
                    return(<EditProfileItem profileData={profileData} active={active}/>
                    );
                })
            }
        </ul>
    );
}
export default EditProfileList;