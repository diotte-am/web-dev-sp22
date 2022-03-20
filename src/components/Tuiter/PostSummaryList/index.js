import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.json"
import React from "react";

const PostSummaryList = (
    {
        active = 'forYou'
    }
) => {
    return(
        <ul>
            {
                post.map(post => {
                    return(<PostSummaryItem post={post} active={active}/>
                    );
                })
            }
        </ul>
    );
}
export default PostSummaryList;
