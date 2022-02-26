const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                
                <a class="list-group-item" href="../html/home.html">
                    <i class="fas fa-home"> Home</i></a>
                    
                <a class="list-group-item" href="../html/explore.html.html">
                    <i class="fas fa-hashtag"> Explore</i></a>
                    
                <a class="list-group-item" href="../html/explore.html.html">
                    <i class="fas fa-bell"> Notifications</i></a>
                    
                <a class="list-group-item" href="../html/explore.html.html">
                    <i class="fas fa-envelope"> Messages</i></a>      
                    
                <a class="list-group-item" href="../html/explore.html.html">
                    <i class="fas fa-bookmark"> Bookmarks</i></a>    
                    
                <a class="list-group-item" href="../html/explore.html.html">
                    <i class="fas fa-list"> Lists</i></a>            
                    
                <a class="list-group-item" href="../html/explore.html.html">
                    <i class="fas fa-user"> User</i></a> 
                    
                
                <a class="list-group-item" href="../html/explore.html.html">
                    <div class="fa-stack" style="margin: -9px">
                        <i class="fas fa-circle fa-stack-1x"><i class="fas fa-ellipsis-h fa-stack-1x fa-inverse small"></i></i>
                    </div> More</a>     
             
            <!-- continue the rest of the list -->
            </div>
            
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
