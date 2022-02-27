
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-2 col-xl-2 p-0">
            ${NavigationSidebar()}
        </div>
        <div class="col-xl-6 col-lg-6 col-md-10 col-sm-10 col-10 p-0 ps-2 pe-2">
            ${ExploreComponent()}
        </div>
            
        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 pe-lg-2">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);

