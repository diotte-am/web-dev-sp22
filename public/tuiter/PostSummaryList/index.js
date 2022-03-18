import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts";
import React from "react";

const PostSummaryList = (


) => {
    return(
        <ul>
            {
                posts.map(post => {
                    return(<PostSummaryItem post={post}/>
                    );
                })
            }
        </ul>
    );
}
export default PostSummaryList;
