import React from "react";

const ProfileListItem = (
    {profileData}

) => {
    return(


        <div className="wd-c-story-container wd-grey-border wd-text-regular p-3 list-group-item">

            <div>
                <div className="wd-c-grey-reg-text"> {profileData.topic}</div>
                <span className="wd-c-white-bd-text">{profileData.userName} <i className="fas fa-check-circle"></i></span> <span className="wd-c-grey-reg-text"> - {profileData.time}</span>
                <div className="wd-c-white-bd-text">{profileData.title}</div>
            </div>
            <img src={profileData.image} className="wd-rnd-icon-90 m-2"/>
        </div>
    )
}
export default ProfileListItem;