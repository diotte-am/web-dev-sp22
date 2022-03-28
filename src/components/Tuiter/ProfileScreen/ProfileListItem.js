import React from "react";

const ProfileListItem = (
    {profileData}

) => {
    return(


        <div className="wd-text-regular">
            <div className="wd-c-white-bd-text"> {profileData.firstName} {profileData.lastName}</div>
            <div className="wd-c-grey-reg-text"> {profileData.tuitCount} Tuits</div>
            <img className="col-12" src={profileData.bannerPicture} alt="banner"/>


                <div className="d-grid gap-2 d-flex row col-12">



                    <div className="col-9">
                        <img src={profileData.profilePicture} className="wd-rnd-icon-80"/>
                    </div>
                    <div className="col-2 align-items-end ps-0 pe-0 ms-4 mt-4">
                        <button type="button" className="btn btn-outline-dark btn-sm"  style={{borderRadius: "45px", fontWeight: "bold", color: "white"}}>Edit Profile</button>
                    </div>


                </div>




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


    )
}
export default ProfileListItem;