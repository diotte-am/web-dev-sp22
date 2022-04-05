import React from "react";



const WhoToFollowListItem = ({who}) => {
    return(

        <li className="row list-group-item d-grid d-flex row col-10 pe-sm-2">
            <div className="col-2 align-items-start ps-0">
                <img alt="avatar" src={who.avatarIcon} style={{width: "50px"}}/>
            </div>


            <div className="col-6 ps-4">
                <span className="wd-c-white-bd-text">{who.userName} <i className="fas fa-check-circle"> </i></span>
                    <div className="wd-grey-reg-text">@{who.handle} </div>
            </div>

            <div className="col-4 btn btn-primary float-end" style={{borderRadius: "25px", border: "none", fontWeight: "bold", height: "2.25em"}} >
                <span>Follow</span>
            </div>



        </li>

    )
}
export default WhoToFollowListItem;
