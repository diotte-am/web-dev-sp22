import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import HomeComponent from "./HomeComponent";
import PostSummaryList from "../PostSummaryList";
import TuitList from "../TuitList";


const HomeScreen = () => {
    return(
        <div>
            <h2>Home</h2>
            <TuitList/>
        </div>
    )
}
export default HomeScreen;