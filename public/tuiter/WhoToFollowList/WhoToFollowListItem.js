const WhoToFollowListItem = (todo) => {
    return(`
        
    <li class="list-group-item d-grid gap-2 d-flex row col-10">
            <div class="col-2 align-items-start me-0 pe-0 pb-0">
                <img class="wd-rnd-icon-50" style="margin-left: -.75em" src=${todo.avatarIcon}/>
            </div>
            <div class="col-5 ">
                <span class="wd-c-white-bd-text">${todo.userName} <i class="fas fa-check-circle"></i></span>
                <br>
                    <span class="wd-grey-reg-text">@${todo.handle}</span>
            </div>
            <div class="col-2">
                <div class="btn btn-primary align-items-end " style="border-radius: 25px; border: none; font-weight: bold" >
                    <span>Follow</span>
                </div>
            </div>
 </li>
    `);
}
export default WhoToFollowListItem;
