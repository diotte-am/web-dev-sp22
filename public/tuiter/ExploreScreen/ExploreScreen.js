import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import NavigationSidebar from "../NavigationSidebar/index.js";
import NavigationSidebarSm from "../NavigationSidebar/NavigationSidebarSm.js";

const active = "explore";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-xl-2 d-none d-xl-block p-0 m-0">
            ${NavigationSidebar(active)}
        </div>
        <div class="col-1 col-sm-2 col-m-1 col-lg-1 d-xl-none ps-1 pe-2" style="min-width: 75px">
            ${NavigationSidebarSm(active)}
        </div>
        <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10 col-10 p-2">
            ${ExploreComponent()}
        </div>
            
        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 pe-2">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);
