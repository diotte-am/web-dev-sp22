import React from "react";



const WhoToFollowListItem = ({who}) => {
    return(

        <li className="list-group-item d-grid gap-2 d-flex row col-10">
            <div className="col-2 align-items-start ps-0">
                <img alt="avatar" src={who.avatarIcon} style={{width: "50px"}}/>
            </div>


            <div className="col-5 ps-1">
                <span className="wd-c-white-bd-text">{who.userName} <i className="fas fa-check-circle"> </i></span>
                    <div className="wd-grey-reg-text">@{who.handle} </div>
            </div>
            <div className="col-2">
                <div className="btn btn-primary align-items-end " style={{borderRadius: "25px", border: "none", fontWeight: "bold"}} >
                    <span>Follow</span>
                </div>
            </div>


        </li>

    )
}
export default WhoToFollowListItem;
