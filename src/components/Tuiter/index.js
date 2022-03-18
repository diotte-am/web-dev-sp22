import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryList from "./PostSummaryList";

const Tuiter = () => {
    return(
        <>
            <h1>Tuiter</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/labs">
                Labs
            </Link>
            <NavigationSidebar active="home"/>
            <WhoToFollowList/>
            <PostSummaryList/>

        </>
    )
};

export default Tuiter;
