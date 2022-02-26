const WhoToFollowListItem = (todo) => {
    return(`
        
    <li class="list-group-item d-grid gap-2 d-flex row">
            <div class="col-3">
                <img class="wd-rnd-icon-50" src=${todo.avatarIcon}/>
            </div>
            <div class="col-4">
                <span class="wd-c-white-bd-text">${todo.userName} <i class="fas fa-check-circle"></i></span>
                <br>
                    <span class="wd-grey-reg-text">@${todo.handle}</span>
            </div>
            <div class="col-4">
                <div class="btn btn-primary align-items-end" style="border-radius: 25px; border: none; font-weight: bold" >
                    <span>Follow</span>
                </div>
            </div>
 </li>
    `);
}
export default WhoToFollowListItem;
