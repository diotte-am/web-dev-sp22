import PostList from "../PostList/index.js";

const HomeComponent = () => {
    return(`

           

          
             
           <div class="container wd-c-story-container-headline pt-1 pb-2">
                   <Span class="wd-c-white-bd-text">Home</Span> 
           </div>

           
    
                     
           ${PostList()}
    `);
}
export default HomeComponent;
