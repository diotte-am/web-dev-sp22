import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import HomeComponent from "./HomeComponent";
import PostSummaryList from "../PostSummaryList";
const ExploreScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <HomeComponent/>
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 pe-2">
                <PostSummaryList/>
            </div>
        </div>
    );
};
export default ExploreScreen;