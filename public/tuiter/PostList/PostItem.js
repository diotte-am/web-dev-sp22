const PostItem = (post) => {
    return(`

        <div style="border: #1c90ee 1px solid">
             <div class="row">
                <div class="col-2 ps-4 pt-3">
                    <img src="${post.avatarImage}" class="wd-rnd-icon-80"/>
                </div>
                
                <div class="col-9 me-3" style="border: #1c90ee 1px solid">
                    <span class="wd-c-white-bd-text">${post.topic} <i class="fas fa-check-circle"></i></span> 
        
                    <span class="wd-c-grey-reg-text">${post.userName} </span> <span class="wd-c-grey-reg-text"> &bull; ${post.time}</span>
                    <br>
                    <span class="wd-white-text">${post.title}</span>
                    <div class="row p-3" >
                                <img width="auto" src="${post.image}"/>
                                <span class="wd-white-text" >${post.subhead}</span>                       
                                ${post.details}
                     </div>
                </div>
             </div>
             <div class="row">
                <div class="col-2 ps-4 pt-3">
                    
                </div>
                <div class="col-9 me-3" style="border: #1c90ee 1px solid">
                    <a href="#"><i class="fa fa-comment-o wd-color-grey"  aria-hidden="true">
                    <span class="wd-bm-icon">${post.comments}</span></i></a>

                <a href="#"><i class="fa fa-retweet wd-color-grey" aria-hidden="true">
                    <span class="wd-bm-icon">${post.retweets}</span></i></a>

                <a href="#"><i class="fa fa-heart wd-color-red" aria-hidden="true">
                    <span class="wd-bm-icon-selected">${post.likes}</span></i></a>

                <a href="#"><i class="fa fa-upload wd-color-grey" aria-hidden="true">
                    <span class="wd-bm-icon wd-bm-no-icon"> </span></i></a>
                </div>
             </div>
               
    </div>
             
    `)
}
export default PostItem;