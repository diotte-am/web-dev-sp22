import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import HomeComponent from "./HomeComponent";
import PostSummaryList from "../PostSummaryList";
import TuitList from "../TuitList";
import WhatsHappening from "./WhatsHappening";


const HomeScreen = () => {
    return(
        <div>
            <WhatsHappening/>
            <TuitList/>
        </div>
    )
}
export default HomeScreen;