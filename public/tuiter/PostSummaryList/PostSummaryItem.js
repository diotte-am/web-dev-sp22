const PostSummaryItem = (post) => {
    return(`

        <div class="wd-c-story-container wd-text-regular p-3">
        
             <div>
                <span class="wd-c-grey-reg-text"> ${post.topic}</span>
                <br>
                <span class="wd-c-white-bd-text">${post.userName} <i class="fas fa-check-circle"></i></span> <span class="wd-c-grey-reg-text"> - ${post.time}</span>
                <br>
                <span class="wd-c-white-bd-text">${post.title}</span>
            </div>
             <img src="${post.image}" class="wd-rnd-icon-90 m-2"/>
        </div>
    `)
}
export default PostSummaryItem;