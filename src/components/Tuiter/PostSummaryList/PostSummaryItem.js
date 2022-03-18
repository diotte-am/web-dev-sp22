import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "/tuiter/image/react-logo.png"
        }
    }


) => {
    return(

        <div className="wd-c-story-container wd-grey-border wd-text-regular p-3">

             <div>
                <div className="wd-c-grey-reg-text"> {post.topic}</div>
                <span className="wd-c-white-bd-text">{post.userName} <i className="fas fa-check-circle"></i></span> <span class="wd-c-grey-reg-text"> - {post.time}</span>
                <div className="wd-c-white-bd-text">{post.title}</div>
            </div>
             <img src={post.image} className="wd-rnd-icon-90 m-2"/>
        </div>
    )
}
export default PostSummaryItem;