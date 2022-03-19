import React from "react";

const PostSummaryItem = (
    {post}

) => {
    return(

        <div className="wd-c-story-container wd-grey-border wd-text-regular p-3">

             <div>
                <div className="wd-c-grey-reg-text"> {post.topic}</div>
                <span className="wd-c-white-bd-text">{post.userName} <i className="fas fa-check-circle"></i></span> <span className="wd-c-grey-reg-text"> - {post.time}</span>
                <div className="wd-c-white-bd-text">{post.title}</div>
            </div>
             <img src={post.image} className="wd-rnd-icon-90 m-2"/>
        </div>
    )
}
export default PostSummaryItem;