import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
           <div class="row">
           <div class="container pt-1">
                    <div class="input-group mb-3 justify-content-evenly align-items-center" >
                        <span class="input-group-text" style="background-color: #1e2023; border-radius: 25px 0px 0px 25px; border: none"><i class="fas fa-search wd-icon-color-override-dk"></i></span>
                        <input type="text" class="form-control" placeholder="Search Tuiter"
                               style="border-radius: 0px 25px 25px 0px; border: none; height: 40%; background-color: #1e2023">
                        <a href="../../../tuiter/html/explore-settings.html">
                            <i class="fas fa-cog fa-2x p-1 wd-icon-color-override text-primary"></i>
                        </a>
                    </div>

                </div>
           </div>
           
           <ul class="nav mb-2 nav-tabs">
            <div class="container pt-1">
                    <ul class="nav nav-tabs" style="border: none">
                        <li class="nav-item " >
                            <a class="nav-link active wd-color-override" href="#">For you</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link wd-color-override" href="../../../tuiter/html/trending.html" >Trending</a>
                        </li>
                        <li class="nav-item wd-color-override">
                            <a class="nav-link wd-color-override" href="../../../tuiter/html/news.html">News</a>
                        </li>
                        <li class="nav-item wd-color-override">
                            <a class="nav-link wd-color-override" href="../../../tuiter/html/sports.html">Sports</a>
                        </li>
                        <li class="nav-item d-none d-sm-none d-md-inline wd-color-override">
                            <a class="nav-link wd-color-override" href="../../../tuiter/html/entertainment.html">Entertainment</a>
                        </li>

                    </ul>
                </div>
           </ul>
           
    
                        <div>
                            <div class="card" style="border-color: #1e2023; border-radius: 0px">
                                <img class="card-img" src="../image/starship.jpg" style="border-radius: 0px" alt="SpaceX's Starship">
                                <div class="card-img-overlay text-white d-flex justify-content-start align-items-end">
                                    <h2 style="margin-bottom: -8px">SpaceX's Starship</h2>
                                </div>
                            </div>

                   </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
