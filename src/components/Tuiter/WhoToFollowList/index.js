import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.json";

const WhoToFollowList = () => {
    return(
        <ul>
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
