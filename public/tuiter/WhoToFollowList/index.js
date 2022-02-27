import WhoToFollowListItem from "./WhoToFollowListItem.js";
import todos from "./who.js";

const WhoToFollowList = () => {
    return(`
        <ul class="list-group"
             style="border-top-left-radius: 25px; border-top-right-radius: 25px">
             <li class="list-group-item d-grid gap-2 d-flex row">
                Who to follow
              </li>
              
              
                   ${
                 todos.map(todo => {
              return(WhoToFollowListItem(todo));
             }).join(' ')
                }

            
        </ul>
       
    `);
}
export default WhoToFollowList;