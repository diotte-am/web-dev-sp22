const PostItem = (post) => {
    return(`

        <div  class="pt-2 pb-2 wd-grey-border">
             <div class="row col-12 pt-2 pb-2 ms-2">
                <div class="col-2 ps-4 pt-3">
                    <img src="${post.avatarImage}" class="wd-rnd-icon-80"/>
                </div>
                
                <div class="col-9" >
                    <span class="wd-c-white-bd-text">${post.topic} <i class="fas fa-check-circle"></i></span> 
        
                    <span class="wd-c-grey-reg-text">${post.userName} </span> <span class="wd-c-grey-reg-text"> &bull; ${post.time}</span>
                    <br>
                    <span class="wd-white-text" style="line-height: 1.5em">${post.title}</span>
                    <div class="row p-3 wd-grey-border" style="border-radius: 15px">
                                <img width="auto" src="${post.image}"/>
                                <span class="wd-white-text" >${post.subhead}</span>                       
                                ${post.details}
                     </div>
                </div>
             </div>
             <div class="row pt-2 pb-2">
                <div class="col-2 ps-4 pt-3">
                    
                </div>
                <div class="col-9 row ms-1" >
                   
                   <div class="col" >
                   <a href="#"><i class="fa fa-comment-o pe-2"  aria-hidden="true">
                        <span class="wd-text-regular wd-grey-reg-text"> ${post.comments}</span></i></a>
                    </div>
                    
                    <div class="col">
                        <a href="#"><i class="fa fa-retweet wd-grey-reg-text" aria-hidden="true">
                        <span class="wd-text-regular wd-grey-reg-text"> ${post.retweets}</span></i></a>
                    </div>
                    
                    <div class="col">
                        <a href="#"><i class="fa fa-heart wd-grey-reg-text" aria-hidden="true">
                        <span class="wd-text-regular wd-grey-reg-text"> ${post.likes}</span></i></a>
                    </div>
                    
                    <div class="col">
                        <a href="#"><i class="fa fa-upload wd-grey-reg-text" aria-hidden="true">
                        <span class="wd-text-regular wd-grey-reg-text"> </span></i></a>
                    </div>
                    
                </div>
             </div>
               
    </div>
             
    `)
}
export default PostItem;