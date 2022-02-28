import NavigationSidebarSm from "../NavigationSidebar/NavigationSidebarSm.js";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import HomeComponent from "./HomeComponent.js";

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
        <div class="col-xl-2 d-none d-xl-block p-0 m-0">
            ${NavigationSidebar()}
        </div>
        <div class="col-1 col-sm-1 col-m-1 col-lg-1 d-xl-none p-0">
            ${NavigationSidebarSm()}
        </div>
        <div class="col-xl-6 col-lg-7 col-md-11 col-sm-11 col-11 p-0 ps-2 pe-2">
            ${HomeComponent()}
        </div>
            
        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 pe-2">
            ${PostSummaryList()}
        </div>
        </div>
    `);
})($);

