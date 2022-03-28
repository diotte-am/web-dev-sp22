import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const EditProfileItem = (
    {profileData}


) => {
    let [editName, setName]
        = useState('');
    const dispatch = useDispatch();
    const editClickHandler = () => {
        dispatch({type: 'edit-profile',
            editName
        });
    }
    return(
        <>

        <div className="wd-text-regular">


            <div className="d-grid gap-2 d-flex row col-12 ms-1 me-1 mb-3 wd-center-align-vert">
                <div className="col-1">
                    <Link to="/tuiter/profile">
                    <i className="fas fa-times wd-white-text"></i>
                    </Link>

                </div>
                <div className="col-9">

                    <div className="wd-c-white-bd-text"> Edit Profile</div>
                </div>
                <div className="col-1 ps-0">
                    <Link to="/tuiter/profile">
                     <button type="button" className="btn btn-dark"  style={{borderRadius: "45px", fontWeight: "bold", backgroundColor: "white"}} onClick={editClickHandler}>Save</button>
                    </Link>
                   </div>

            </div>
            <img className="col-12" src={profileData.bannerPicture} alt="banner"/>


            <div className="d-grid gap-2 d-flex row col-12 ms-1 me-1" style={{marginTop: "-4em"}}>



                <div className="col-9 mb-1">
                    <img alt="profile pic" src={profileData.profilePicture} className="wd-rnd-icon-12"/>
                </div>

                <div className="form-group form-outline form-white wd-grey-border mb-1"  style={{backgroundColor: "#070807"}}>
                    <div className="wd-c-grey-reg-text ms-3"  >
                        Name
                    </div>

                    <textarea type="name" className="form-control " rows="5"  style={{color: "white", backgroundColor: "#070807", resize: "none"}} onChange={(event) =>
                        setName(event.target.value)}>
                        {profileData.name}
                    </textarea>

                </div>

                <div className="form-group form-outline form-white wd-grey-border mb-1" style={{backgroundColor: "#070807"}}>
                    <div className="wd-c-grey-reg-text ms-3">
                        Bio
                    </div>

                    <textarea type="bio" className="form-control " rows="5"  style={{color: "white", backgroundColor: "#070807", resize: "none"}} id="exampleFormControlInput1">
                        {profileData.bio}
                    </textarea>

                </div>



            </div>





        </div>
        </>

    )
}
export default EditProfileItem;