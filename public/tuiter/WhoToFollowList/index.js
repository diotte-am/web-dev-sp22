import WhoToFollowListItem from "./WhoToFollowListItem.js";
import todos from "./who.js";

const WhoToFollowList = () => {
    return(`
        <ul class="list-group m-1"
             style="border-radius: 25px">
             <li class="list-group-item d-grid gap-2 d-flex row me-0 pe-0 col-10">
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