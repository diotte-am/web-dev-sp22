import PostSummaryList from "../PostSummaryList/index";
import React from "react";
import ExploreTabsList from "./ExploreTabsList";

const ExploreComponent = (
) => {
    return(
        <div className="container">
           <div className="row">
           <div className="container pt-1 ms-4">
                    <div className="input-group mb-3 justify-content-evenly align-items-center" >
                        <span className="input-group-text" style={{backgroundColor: '#1e2023', borderRadius: "25px 0px 0px 25px", border: "none"}}><i class="fas fa-search wd-icon-color-override-dk"></i></span>
                        <input type="text" className="form-control" placeholder="Search Tuiter"
                               style={{borderRadius: '0px 25px 25px 0px', border: 'none', height: '40%', backgroundColor: '#1e2023'}}/>
                        <a href="../../../tuiter/html/explore-settings.html">
                            <i className="fas fa-cog fa-2x p-1 wd-icon-color-override text-primary"></i>
                        </a>
                    </div>

                </div>
           </div>

           <ul className="nav mb-2 nav-tabs">
            <div className="container pt-1">
                    <ul className="nav nav-tabs" style={{border: 'none'}}>
                        <ExploreTabsList/>

                    </ul>
                </div>
           </ul>



                            <div className="card ms-4" style={{borderColor: '#1e2023', borderRadius: '0px'}}>
                                <img className="card-img" src="/tuiter/image/Starship-Mk1-Day.jpg" style={{borderRadius: '0px'}} alt="SpaceX's Starship"/>
                                <div className="card-img-overlay text-white d-flex justify-content-start align-items-end">
                                    <h2 style={{marginBottom: '-8px'}}>SpaceX's Starship</h2>
                                </div>
                            </div>



                <PostSummaryList/>


        </div>

    )
}
export default ExploreComponent;