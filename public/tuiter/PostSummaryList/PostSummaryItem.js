const PostSummaryItem = (post) => {
    return(`

        <div class="wd-c-story-container wd-text-regular p-3">
             <div>
                <span class="wd-c-grey-reg-text"> ${post.topic}</span>
                <br>
                <span class="wd-c-white-bd-text">ReactJS <i class="fas fa-check-circle"></i></span> <span class="wd-c-grey-reg-text"> - ${post.time}</span>
                <br>
                <span class="wd-c-white-bd-text">React.js is a component based front end library that makes it very eacy to build Single Page Applications or SPAs</span>
            </div>
             <img src="${post.image}" class="wd-rnd-icon-90 m-2"/>
        </div>
    `)
}
export default PostSummaryItem;