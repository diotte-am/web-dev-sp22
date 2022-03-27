import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.json"
import React from "react";

const PostSummaryList = (
    {
        active = 'forYou'
    }
) => {
    return(
<li className="container pt-1 col-12 mt-0" >
            {
                post.map(post => {
                    return(<PostSummaryItem post={post} active={active}/>
                    );
                })
            }
</li>
    );
}
export default PostSummaryList;
