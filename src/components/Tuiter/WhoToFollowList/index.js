import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state);
    return(
        <ul>
            <li className="list-group-item d-grid gap-2 d-flex row">
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
