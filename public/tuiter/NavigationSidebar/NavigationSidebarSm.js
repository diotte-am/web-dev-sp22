const NavigationSidebarSm = () => {
    return(`
            <div class="list-group m-0 p-2">
                <a class="list-group-item "  href="/">
                    <i class="fab fa-twitter"></i></a>
                
                <a class="list-group-item" href="../html/home.html">
                    <i class="fas fa-home" ></i></a>
                    
                <a class="list-group-item active" aria-current="true" href="../html/explore.html">
                    <i class="fas fa-hashtag"></i></a>
                    
                <a class="list-group-item" href="../html/notifications.html">
                    <i class="fas fa-bell"></i></a>
                    
                <a class="list-group-item" href="../html/messages.html">
                    <i class="fas fa-envelope"></i></a>      
                    
                <a class="list-group-item" href="../html/bookmarks.html">
                    <i class="fas fa-bookmark"></i></a>    
                    
                <a class="list-group-item" href="../html/lists.html">
                    <i class="fas fa-list"></i></a>            
                    
                <a class="list-group-item" href="../html/profile.html">
                    <i class="fas fa-user"></i></a> 
                    
                
                <a class="list-group-item" href="../html/more.html">
                    <div class="fa-stack" style="margin: -9px">
                        <i class="fas fa-circle fa-stack-1x"><i class="fas fa-ellipsis-h fa-stack-1x small" style="color: black; font-size: .65em"></i></i>
                    </div></a>     
             
            </div>
            
            <div class="d-grid ps-2 pe-2">
                <a href="../html/tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebarSm;