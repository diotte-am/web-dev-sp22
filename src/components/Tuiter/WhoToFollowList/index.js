import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return(
        <ul className="list-group">
            <li key={"title"} className="list-group-item d-grid d-flex row col-10 ps-1 pe-2">
                <span className="wd-c-white-bd-text">Who to follow</span>
            </li>
            {
                who.map(who => {
                        return(<WhoToFollowListItem who={who} key={who.handle}/>
                        );
                    })
            }
        </ul>
    );
}
export default WhoToFollowList;
