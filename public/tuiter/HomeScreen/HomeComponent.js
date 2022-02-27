import PostList from "../PostList/index.js";

const HomeComponent = () => {
    return(`

           

          
             
           <div class="container pt-1 pb-2" style="border: #1c90ee 1px solid">
                   <Span class="wd-c-white-bd-text">Home</Span> 
           </div>

           
    
                     
           ${PostList()}
    `);
}
export default HomeComponent;
