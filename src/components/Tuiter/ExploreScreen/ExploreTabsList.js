import tabs from "./tabs.json"
import React from "react";
import ExploreTab from "./ExploreTab";


const ExploreTabsList = () => {
    return(
        <>
            {
                tabs.map(tabs => {
                    return(<ExploreTab tabs={tabs}/>
                    );
                })
            }
        </>
    );
}
export default ExploreTabsList;

