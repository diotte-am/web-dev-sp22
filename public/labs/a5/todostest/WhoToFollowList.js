import WhoToFollowListItem from "./WhoToFollowListItem.js";
import todos from "./who.js";

const WhoToFollowList = () => {
    return(`
        <div class="wd-c-story-container wd-color-override ps-4 p-1 wd-c-white-bd-text pt-2"
             style="border-top-left-radius: 25px; border-top-right-radius: 25px">
            Who to follow
        </div>
        <ul>
            ${
        todos.map(todo => {
            return(WhoToFollowListItem(todo));
        }).join('')
    }
        </ul>
    `);
}
export default WhoToFollowList;