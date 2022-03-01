import PostSummaryList from "../PostSummaryList/index";
import HomeComponent from "./HomeComponent.js";
import NavigationSidebar from "../NavigationSidebar/index.js";
import NavigationSidebarSm from "../NavigationSidebar/NavigationSidebarSm.js";
const active = "home";

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
        <div class="col-xl-2 d-none d-xl-block p-0 m-0">
            ${NavigationSidebar(active)}
        </div>
        <div class="col-1 col-sm-2 col-m-1 col-lg-1 d-xl-none p-0 ps-2 pe-2">
            ${NavigationSidebarSm(active)}
        </div>
        <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10 col-11 p-0">
            ${HomeComponent()}
        </div>
            
        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 pe-2">
            ${PostSummaryList()}
        </div>
        </div>
    `);
})($);

