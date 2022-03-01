const NavigationSidebarSm = (active) => {
    if(active == "home"){
        return(`
            <div class="list-group m-0 p-2 pe-3">
                <a class="list-group-item "  href="/">
                    <i class="fab fa-twitter"></i> </a>
                
                <a class="list-group-item active" href="../HomeScreen/index.html">
                    <i class="fas fa-home" ></i> </a>
                    
                <a class="list-group-item " href="../ExploreScreen/index.html">
                    <i class="fas fa-hashtag"></i> </a>
                    
                <a class="list-group-item" href="../html/notifications.html">
                    <i class="fas fa-bell"></i> </a>
                    
                <a class="list-group-item" href="../html/messages.html">
                    <i class="fas fa-envelope"></i> </a>      
                    
                <a class="list-group-item" href="../html/bookmarks.html">
                    <i class="fas fa-bookmark"> </i></a>    
                    
                <a class="list-group-item" href="../html/lists.html">
                    <i class="fas fa-list"></i> </a>            
                    
                <a class="list-group-item" href="../html/profile.html">
                    <i class="fas fa-user"></i> </a> 
                    
                
                <a class="list-group-item" href="../html/more.html">
                    <div class="fa-stack" style="margin: -12px">
                        <i class="fas fa-circle fa-stack-1x"><i class="fas fa-ellipsis-h fa-stack-1x small" style="color: black; font-size: .65em"></i> </i>
                    </div></a>     
             
            </div>
            
            <div class="d-grid">
                <a href="../html/tuit.html"
                   class="btn btn-primary btn-block rounded-pill ps-0 pe-0">
                    Tweet</a>
            </div>
    `);
    } if(active === "explore"){
        return(`
            <div class="list-group m-0 p-2">
                <a class="list-group-item "  href="/">
                    <i class="fab fa-twitter"></i> </a>
                
                <a class="list-group-item" href="../HomeScreen/index.html">
                    <i class="fas fa-home" ></i> </a>
                    
                <a class="list-group-item active" href="../ExploreScreen/index.html">
                    <i class="fas fa-hashtag"></i> </a>
                    
                <a class="list-group-item" href="../html/notifications.html">
                    <i class="fas fa-bell"></i> </a>
                    
                <a class="list-group-item" href="../html/messages.html">
                    <i class="fas fa-envelope"></i> </a>      
                    
                <a class="list-group-item" href="../html/bookmarks.html">
                    <i class="fas fa-bookmark"> </i></a>    
                    
                <a class="list-group-item" href="../html/lists.html">
                    <i class="fas fa-list"></i> </a>            
                    
                <a class="list-group-item" href="../html/profile.html">
                    <i class="fas fa-user"></i> </a> 
                    
                
                <a class="list-group-item" href="../html/more.html">
                    <div class="fa-stack" style="margin: -9px">
                        <i class="fas fa-circle fa-stack-1x"><i class="fas fa-ellipsis-h fa-stack-1x small" style="color: black; font-size: .65em"></i> </i>
                    </div></a>     
             
            </div>
            
            <div class="d-grid">
                <a href="../html/tuit.html"
                   class="btn btn-primary btn-block rounded-pill ps-0 pe-0">
                    Tweet</a>
            </div>
    `);
    } else {
        return(`
            <div class="list-group m-0 p-2">
                <a class="list-group-item "  href="/">
                    <i class="fab fa-twitter"></i> </a>
                
                <a class="list-group-item" href="../HomeScreen/index.html">
                    <i class="fas fa-home" ></i> </a>
                    
                <a class="list-group-item" aria-current="true" href="../ExploreScreen/index.html">
                    <i class="fas fa-hashtag"></i> </a>
                    
                <a class="list-group-item" href="../html/notifications.html">
                    <i class="fas fa-bell"></i> </a>
                    
                <a class="list-group-item" href="../html/messages.html">
                    <i class="fas fa-envelope"></i> </a>      
                    
                <a class="list-group-item" href="../html/bookmarks.html">
                    <i class="fas fa-bookmark"> </i></a>    
                    
                <a class="list-group-item" href="../html/lists.html">
                    <i class="fas fa-list"></i> </a>            
                    
                <a class="list-group-item" href="../html/profile.html">
                    <i class="fas fa-user"></i> </a> 
                    
                
                <a class="list-group-item" href="../html/more.html">
                    <div class="fa-stack" style="margin: -9px">
                        <i class="fas fa-circle fa-stack-1x"><i class="fas fa-ellipsis-h fa-stack-1x small" style="color: black; font-size: .65em"></i> </i>
                    </div></a>     
             
            </div>
            
            <div class="d-grid">
                <a href="../html/tuit.html"
                   class="btn btn-primary btn-block rounded-pill ps-0 pe-0">
                    Tweet</a>
            </div>
    `);
    }

}
export default NavigationSidebarSm;