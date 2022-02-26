import WhoToFollowListItem from "./WhoToFollowListItem.js";
import todos from "./who.js";

const WhoToFollowList = () => {
    return(`
        <ul class="list-group"
             style="border-top-left-radius: 25px; border-top-right-radius: 25px">
            Who to follow
        </ul>
        <div class="list-group">
            ${
        todos.map(todo => {
            return(WhoToFollowListItem(todo));
        }).join('')
    }
        </div>
    `);
}
export default WhoToFollowList;