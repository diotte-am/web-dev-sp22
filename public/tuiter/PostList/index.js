import exploreItems from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return(`
             ${
        exploreItems.map(post => {
            return(PostItem(post));
        }).join(' ')
    }
    `);
}
export default PostList;