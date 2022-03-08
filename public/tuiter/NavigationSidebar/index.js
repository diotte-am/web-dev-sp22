const NavigationSidebar = (active) => {
            if(active === "home"){
                return(`

            <div class="list-group m-0 p-2">
                <a class="list-group-item "  href="/">
                    <i class="fab fa-twitter"></i></a>
                
                <a class="list-group-item active" href="../HomeScreen/index.html">
                    <i class="fas fa-home" > <span style="font-family: 'Helvetica Neue', sans-serif">Home</span></i></a>
                       
                <a class="list-group-item" href="../ExploreScreen/index.html">
                    <i class="fas fa-hashtag"><span style="font-family: 'Helvetica Neue', sans-serif"> Explore</i></>
                    
                <a class="list-group-item" href="../html/notifications.html">
                    <i class="fas fa-bell"><span style="font-family: 'Helvetica Neue', sans-serif"> Notifications</i></a>
                    
                <a class="list-group-item" href="../html/messages.html">
                    <i class="fas fa-envelope"><span style="font-family: 'Helvetica Neue', sans-serif"> Messages</i></a>      
                    
                <a class="list-group-item" href="../html/bookmarks.html">
                    <i class="fas fa-bookmark"><span style="font-family: 'Helvetica Neue', sans-serif"> Bookmarks</i></a>    
                    
                <a class="list-group-item" href="../html/lists.html">
                    <i class="fas fa-list"><span style="font-family: 'Helvetica Neue', sans-serif"> Lists</i></a>            
                    
                <a class="list-group-item" href="../html/profile.html">
                    <i class="fas fa-user"><span style="font-family: 'Helvetica Neue', sans-serif"> User</i></a> 
                    
                
                <a class="list-group-item" href="../html/more.html">
                    <div class="fa-stack" style="margin: -12px">
                        <i class="fas fa-circle fa-stack-1x"><i class="fas fa-ellipsis-h fa-stack-1x small" style="color: black; font-size: .65em"></i></i>
                    </div><span style="font-family: 'Helvetica Neue', sans-serif"> More</a>     
             
            </div>
            
            <div class="d-grid ps-2 pe-2 color">
                <a href="../html/tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
            }if(active === "explore"){
        return(`

            <div class="list-group m-0 p-2">
                <a class="list-group-item "  href="/">
                    <i class="fab fa-twitter"></i></a>
                
                <a class="list-group-item" href="../HomeScreen/index.html">
                    <i class="fas fa-home" > <span style="font-family: 'Helvetica Neue', sans-serif">Home</span></i></a>
                       
                <a class="list-group-item active" href="../ExploreScreen/index.html">
                    <i class="fas fa-hashtag"><span style="font-family: 'Helvetica Neue', sans-serif"> Explore</i></>
                    
                <a class="list-group-item" href="../html/notifications.html">
                    <i class="fas fa-bell"><span style="font-family: 'Helvetica Neue', sans-serif"> Notifications</i></a>
                    
                <a class="list-group-item" href="../html/messages.html">
                    <i class="fas fa-envelope"><span style="font-family: 'Helvetica Neue', sans-serif"> Messages</i></a>      
                    
                <a class="list-group-item" href="../html/bookmarks.html">
                    <i class="fas fa-bookmark"><span style="font-family: 'Helvetica Neue', sans-serif"> Bookmarks</i></a>    
                    
                <a class="list-group-item" href="../html/lists.html">
                    <i class="fas fa-list"><span style="font-family: 'Helvetica Neue', sans-serif"> Lists</i></a>            
                    
                <a class="list-group-item" href="../html/profile.html">
                    <i class="fas fa-user"><span style="font-family: 'Helvetica Neue', sans-serif"> User</i></a> 
                    
                
                <a class="list-group-item" href="../html/more.html">
                    <div class="fa-stack" style="margin: -9px">
                        <i class="fas fa-circle fa-stack-1x"><i class="fas fa-ellipsis-h fa-stack-1x small" style="color: black; font-size: .65em"></i></i>
                    </div><span style="font-family: 'Helvetica Neue', sans-serif"> More</a>     
             
            </div>
            
            <div class="d-grid ps-2 pe-2">
                <a href="../html/tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
            } else {
        return(`

            <div class="list-group m-0 p-2">
                <a class="list-group-item "  href="/">
                    <i class="fab fa-twitter"></i></a>
                
                <a class="list-group-item" href="../HomeScreen/index.html">
                    <i class="fas fa-home" > <span style="font-family: 'Helvetica Neue', sans-serif">Home</span></i></a>
                       
                <a class="list-group-item" href="../ExploreScreen/index.html">
                    <i class="fas fa-hashtag"><span style="font-family: 'Helvetica Neue', sans-serif"> Explore</i></>
                    
                <a class="list-group-item" href="../html/notifications.html">
                    <i class="fas fa-bell"><span style="font-family: 'Helvetica Neue', sans-serif"> Notifications</i></a>
                    
                <a class="list-group-item" href="../html/messages.html">
                    <i class="fas fa-envelope"><span style="font-family: 'Helvetica Neue', sans-serif"> Messages</i></a>      
                    
                <a class="list-group-item" href="../html/bookmarks.html">
                    <i class="fas fa-bookmark"><span style="font-family: 'Helvetica Neue', sans-serif"> Bookmarks</i></a>    
                    
                <a class="list-group-item" href="../html/lists.html">
                    <i class="fas fa-list"><span style="font-family: 'Helvetica Neue', sans-serif"> Lists</i></a>            
                    
                <a class="list-group-item" href="../html/profile.html">
                    <i class="fas fa-user"><span style="font-family: 'Helvetica Neue', sans-serif"> User</i></a> 
                    
                
                <a class="list-group-item" href="../html/more.html">
                    <div class="fa-stack" style="margin: -9px">
                        <i class="fas fa-circle fa-stack-1x"><i class="fas fa-ellipsis-h fa-stack-1x small" style="color: black; font-size: .65em"></i></i>
                    </div><span style="font-family: 'Helvetica Neue', sans-serif"> More</a>     
             
            </div>
            
            <div class="d-grid ps-2 pe-2">
                <a href="../html/tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
    }

}
export default NavigationSidebar;
