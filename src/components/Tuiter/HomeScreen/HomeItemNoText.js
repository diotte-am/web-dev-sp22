import React from "react";

const PostItemNoText = (post) => {
    return(
    <>
        <div  className="pt-2 pb-2 wd-grey-border">
        <div className="row col-12 pt-2 pb-2">
              <div className="row">
                <div className="col-2 ps-4">
                    <img src={post.avatarImage} className="wd-rnd-icon-80"/>
                </div>

                <div className="col-10 ps-4" >
                    <span className="wd-c-white-bd-text">{post.topic} <i className="fas fa-check-circle"></i></span>

                    <span className="wd-c-grey-reg-text">{post.userName} </span> <span className="wd-c-grey-reg-text"> &bull; {post.time}</span>
                    <div className="wd-white-text" style={{lineHeight: "1.5em"}} dangerouslySetInnerHTML={{__html:post["title"]}}></div>
                    <img className="row wd-grey-border col-12 ms-0" src={post.image} style={{borderRadius: "15px"}}/>

                </div>
             </div>

             <div className="row">
                <div className="col-2 ms-2">

                </div>
                <div className="col-9 me-3 container row ps-4" >

                   <div className="col " >
                   <a href="#"><i className="fa fa-comment-o pe-2"  aria-hidden="true">
                        <span className="wd-text-regular wd-grey-reg-text"> {post.comments}</span></i></a>
                    </div>

                    <div class="col">
                        <a href="#"><i className="fa fa-retweet wd-grey-reg-text" aria-hidden="true">
                        <span className="wd-text-regular wd-grey-reg-text"> {post.retweets}</span></i></a>
                    </div>

                    <div className="col">
                        <a href="#"><i className="fa fa-heart wd-grey-reg-text" aria-hidden="true">
                        <span className="wd-text-regular wd-grey-reg-text"> {post.likes}</span></i></a>
                    </div>

                    <div className="col">
                        <a href="#"><i className="fa fa-upload wd-grey-reg-text" aria-hidden="true">
                        <span className="wd-text-regular wd-grey-reg-text"> </span></i></a>
                    </div>

                </div>
             </div>
        </div>
    </div>
</>
    )
}
export default PostItemNoText;