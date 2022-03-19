import React from "react";

const HomeItem = (post) => {
    return(
        <>

        <div  className="pt-2 pb-2 wd-grey-border">
             <div className="row col-12 pt-2 pb-2">
             <div className="row">
                <div className="col-2 ps-4">
                    <img src={post.avatarImage} className="wd-rnd-icon-80"/>
                </div>

                <div className="col-10 ps-4" >
                    <span className="wd-c-white-bd-text">{post.topic} <i class="fas fa-check-circle"></i></span>

                    <span className="wd-c-grey-reg-text">{post.userName} </span> <span class="wd-c-grey-reg-text"> &bull; {post.time}</span>
                    <div className="wd-white-text" style={{lineHeight: "1.5em"}}>{post.title}</div>
                    <div className="row p-3 wd-grey-border" style={{borderRadius: "15px"}}>
                                <img width="auto" src={post.image}/>
                                <div className="wd-white-text" >{post.subhead}</div>
                                <div className="wd-grey-normal-text">{post.details}</div>
                    </div>
                </div>
                </div>
             </div>


             <div className="row">
                <div className="col-2 ps-4 pt-3">

                </div>
                <div className="col-9 row ms-1" >

                   <div className="col" >
                   <a href="#"><i className="far fa-comment pe-2 wd-grey-reg-text"  aria-hidden="true">
                        <span className="wd-text-regular wd-grey-reg-text"> {post.comments}</span></i></a>
                    </div>

                    <div className="col">
                        <a href="#"><i className="fa fa-retweet wd-grey-reg-text" aria-hidden="true">
                        <span className="wd-text-regular wd-grey-reg-text"> {post.retweets}</span></i></a>
                    </div>

                    <div className="col">
                        <a href="#"><i className="far fa-heart wd-grey-reg-text" aria-hidden="true">
                        <span className="wd-text-regular wd-grey-reg-text"> {post.likes}</span></i></a>
                    </div>

                    <div className="col">
                        <a href="#"><i className="fa fa-upload wd-grey-reg-text" aria-hidden="true">
                        <span className="wd-text-regular wd-grey-reg-text"> </span></i></a>
                    </div>

                </div>
             </div>

    </div>
        </>
    )
}
export default HomeItem;