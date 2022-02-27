import PostSummaryList from "../PostSummaryList/index.js";

const HomeComponent = () => {
    return(`

           

            <div class="container wd-c-story-container">
                <h6 class="wd-c-white-bd-text">Home</h6>
                </div>

           
    
                     
           ${PostSummaryList()}
    `);
}
export default HomeComponent;
