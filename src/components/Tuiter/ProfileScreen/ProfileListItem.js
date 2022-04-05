import React from "react";
import {Link} from "react-router-dom";

const ProfileListItem = (
    {profileData}

) => {
    return(


        <div className="wd-text-regular">
            <div className="d-grid gap-2 d-flex row col-12 ms-2 me-2">
                <div className="col-1 p-0  me-0">
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div className="col-3 ms-0 p-0">
                <div className="wd-c-white-bd-text"> {profileData.name}</div>
                <div className="wd-c-grey-reg-text"> {profileData.tuitCount} Tuits</div>
                </div>
            </div>
                <img className="col-12" src={profileData.bannerPicture} alt="banner"/>


                <div className="d-grid gap-2 d-flex row col-12 ms-1 me-1" style={{marginTop: "-4em"}}>



                    <div className="col-9">
                        <img alt="profile" src={profileData.profilePicture} className="wd-rnd-icon-12"/>
                        <div className="wd-c-white-bd-text"> {profileData.name}</div>
                        <span className="wd-c-grey-reg-text">@{profileData.handle} </span>
                    </div>
                    <Link to="/tuiter/editProfile" className="col-2 align-items-end ps-0 pe-0 ms-4 mt-4">
                        <button type="button" className="btn btn-outline-dark btn-sm"  style={{borderRadius: "45px", fontWeight: "bold", color: "white", marginTop: "4em"}}>Edit Profile</button>
                    </Link>

                    <div className="wd-white-text">{profileData.bio}</div>

                    <div className="pt-2">
                        <i className="fas fa-map-marker-alt"></i>&nbsp; {profileData.location}&nbsp;&nbsp;  <i className="fas fa-birthday-cake"></i>&nbsp;  Born {profileData.dateOfBirth}&nbsp;&nbsp;  <i className="far fa-calendar-alt"></i>&nbsp; Joined {profileData.dateJoined}
                    </div>

                    <div className="pt-2">
                        <span className="wd-c-white-bd-text"> {profileData.followingCount} </span> Following <span className="wd-c-white-bd-text"> {profileData.followersCount} </span> Follows
                    </div>


                </div>





            </div>


    )
}
export default ProfileListItem;