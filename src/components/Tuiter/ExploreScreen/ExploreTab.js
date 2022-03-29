import React from "react";

const ExploreTab = (
    {tabs,
    active="forYou"}

) => {
    return(

            <li key={tabs.name} className="nav-item d-none d-sm-none d-md-inline ">

                <a className={`nav-link 
                ${active === tabs.active ? 'active' : ''}
                 "`} href={tabs.link}>{tabs.name}</a>



            </li>

    )
}
export default ExploreTab;


