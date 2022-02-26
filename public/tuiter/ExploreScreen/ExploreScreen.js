
import NavigationSidebar from "../NavigationSidebar/index.js";
//import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
            stuff goes here
        <div class="col-3 col-md-3 col-lg-2 col-xl-3">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);

