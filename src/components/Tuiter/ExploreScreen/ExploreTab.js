import React from "react";

const ExploreTab = (
    {tabs}

) => {
    return(

            <li className="nav-item d-none d-sm-none d-md-inline wd-color-override">
                <a className="nav-link wd-color-override"  href={tabs.link}>{tabs.name}</a>
            </li>

    )
}
export default ExploreTab;


