const PostItem = (post) => {
    return(`

        <div class="wd-c-story-container wd-text-regular p-3 row">
             
                <div class="col-2">
                    <img src="${post.avatarImage}" class="wd-rnd-icon-80"/>
                </div>
                <div class="col">
                    <span class="wd-c-white-bd-text">${post.topic} <i class="fas fa-check-circle"></i></span> 
        
                    <span class="wd-c-grey-reg-text">${post.userName} </span> <span class="wd-c-grey-reg-text"> &bull; ${post.time}</span>
                    <br>
                    <span class="wd-c-white-bd-text">${post.subhead}</span>
                    
                    <img src="${post.image}" width="500px"/>
                </div>
                
            </div>
             
    `)
}
export default PostItem;