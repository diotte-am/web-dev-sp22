import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return(
        <ul className="list-group">
            <li className="list-group-item d-grid gap-2 d-flex row col-10 ps-1">
                <span className="wd-c-white-bd-text">Who to follow</span>
            </li>
            {
                who.map(who => {
                        return(<WhoToFollowListItem who={who}/>
                        );
                    })
            }
        </ul>
    );
}
export default WhoToFollowList;
