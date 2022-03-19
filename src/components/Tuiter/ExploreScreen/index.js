import PostSummaryList from "../PostSummaryList/index";
import React from "react";

const ExploreComponent = (
) => {
    return(
        <>
           <div className="row">
           <div className="container pt-1">
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
                        <li className="nav-item " >
                            <a className="nav-link active wd-color-override" href="#">For you</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wd-color-override" href="../../../tuiter/html/trending.html" >Trending</a>
                        </li>
                        <li className="nav-item wd-color-override">
                            <a className="nav-link wd-color-override" href="../../../tuiter/html/news.html">News</a>
                        </li>
                        <li className="nav-item wd-color-override">
                            <a className="nav-link wd-color-override" href="../../../tuiter/html/sports.html">Sports</a>
                        </li>
                        <li className="nav-item d-none d-sm-none d-md-inline wd-color-override">
                            <a className="nav-link wd-color-override" href="../../../tuiter/html/entertainment.html">Entertainment</a>
                        </li>

                    </ul>
                </div>
           </ul>


                        <div>
                            <div className="card" style={{borderColor: '#1e2023', borderRadius: '0px'}}>
                                <img className="card-img" src="/tuiter/image/Starship-Mk1-Day.jpg" style={{borderRadius: '0px'}} alt="SpaceX's Starship"/>
                                <div className="card-img-overlay text-white d-flex justify-content-start align-items-end">
                                    <h2 style={{marginBottom: '-8px'}}>SpaceX's Starship</h2>
                                </div>
                            </div>

                   </div>
            <PostSummaryList/>
        </>
    )
}
export default ExploreComponent;