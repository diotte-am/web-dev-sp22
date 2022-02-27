import exploreItems from "./posts.js";
import PostItem from "./PostItem.js";
import PostItemNoText from "./PostItemNoText.js";

const PostList = () => {
    return(`
             ${
        exploreItems.map(post => {
            if (post.subhead === ""){
                return (PostItemNoText(post));
            } else{
                return(PostItem(post));
            }
         
        }).join(' ')
    }
    `);
}
export default PostList;