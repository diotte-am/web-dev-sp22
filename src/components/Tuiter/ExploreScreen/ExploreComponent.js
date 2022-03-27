import PostSummaryList from "../PostSummaryList/index";
import React from "react";
import ExploreTabsList from "./ExploreTabsList";

const ExploreComponent = (
) => {
    return(
      <>
          <ul className="nav mb-2 nav-tabs">
           <li className="container pt-1">
                    <div className="input-group" >
                        <span className="input-group-text col-10 col-md-11" style={{backgroundColor: 'white', borderRadius: "25px 25px 25px 25px", border: "none"}}><i class="fas fa-search wd-icon-color-override-dk"></i>
                        <input type="text"  placeholder="Search Tuiter" style={{backgroundColor: "white", borderRadius: "25px 25px 25px 25px", border: "none"}}
                              />
                        </span>
                        <a href="../../../tuiter/html/explore-settings.html">
                            <i className="fas fa-cog fa-2x p-1 wd-icon-color-override text-primary"></i>
                        </a>
                    </div>

           </li>



            <div className="container pt-1">
                    <ul className="nav mb-2 mt-2 nav-tabs" style={{border: 'none'}}>
                        <ExploreTabsList/>

                    </ul>
                </div>




                            <li className="card ms-4 me-4 mb-0" style={{borderColor: '#1e2023', borderRadius: '0px'}}>
                                <img className="card-img" src="/tuiter/image/Starship-Mk1-Day.jpg" style={{borderRadius: '0px'}} alt="SpaceX's Starship"/>
                                <div className="card-img-overlay text-white d-flex justify-content-start align-items-end">
                                    <h2 style={{marginBottom: '-8px'}}>SpaceX's Starship</h2>
                                </div>
                            </li>



                <PostSummaryList/>

          </ul>

      </>


    )
}
export default ExploreComponent;