import exploreItems from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return(`
             ${
        exploreItems.map(todo => {
            return(PostSummaryItem(todo));
        }).join(' ')
    }
    `);
}
export default PostSummaryList;
