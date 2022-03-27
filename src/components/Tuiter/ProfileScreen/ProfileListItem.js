import React from "react";

const ProfileListItem = (
    {profileData}

) => {
    return(


        <div className="container wd-text-regular">
            <div className="wd-c-white-bd-text"> {profileData.firstName} {profileData.lastName}</div>
            <div className="wd-c-grey-reg-text"> {profileData.tuitCount} Tuits</div>
            <img src={profileData.bannerPicture} alt="banner"/>
            <div className="container wd-text-regular">
                <img src={profileData.profilePicture} className="wd-rnd-icon-80"/>

                <div className="wd-c-white-bd-text"> {profileData.firstName} {profileData.lastName}</div>
                <span className="wd-c-grey-reg-text">@{profileData.handle} </span>
                <></>
                <div className="wd-white-text">{profileData.bio}</div>

                <div className="pt-2">
                    {profileData.location} Born {profileData.dateOfBirth} Joined {profileData.dateJoined}
                </div>

                <div className="pt-2">
                    <span className="wd-c-white-bd-text"> {profileData.followingCount} </span> Following <span className="wd-c-white-bd-text"> {profileData.followersCount} </span> Follows
                </div>
            </div>

        </div>
    )
}
export default ProfileListItem;