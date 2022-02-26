const WhoToFollowListItem = (todo) => {
    return(`
        
    <div class="wd-follow-container wd-color-override p-1">
            <div>
                <img class="wd-rnd-icon-50" src=${todo.avatarIcon}/>
            </div>
            <div class="ml-1 mt-3">
                <span class="wd-c-white-bd-text">${todo.userName} <i class="fas fa-check-circle"></i></span>
                <br>
                    <span class="wd-grey-reg-text">@${todo.handle}</span>
            </div>
            <div class="container justify-content-xxl-end wd-follow-button">
                <div class="btn btn-primary mt-3 mb-3 wd-color-override"
                     style="border-radius: 25px; border: none; font-weight: bold">
                    <span class="pe-2 ps-2">Follow</span>
                </div>
            </div>
 
    `);
}
export default WhoToFollowListItem;
