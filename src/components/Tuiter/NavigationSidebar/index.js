import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    const toolText = {
        fontFamily: "sans-serif",
        fontWeight: "normal"
    };

    return(
        <div className='list-group m-0 p-2'>
                <a className='list-group-item'>
                    <i className='fab fa-twitter'></i></a>



            <a className={`list-group-item
        ${active === 'home' ? 'active' : ''}`}>
                <i className='fas fa-home'><span style={toolText}> Home</span></i></a>



                <a className={`list-group-item
        ${active === 'explore' ? 'active' : ''}`}>
                    <i className='fas fa-hashtag'><span style={toolText}> Explore</span></i></a>



            <a className={`list-group-item
        ${active === 'notifications' ? 'active' : ''}`}>
                <i className='fas fa-bell'><span style={toolText}> Notifications</span></i></a>



            <a className={`list-group-item
        ${active === 'messages' ? 'active' : ''}`}>
                <i className='fas fa-envelope'><span style={toolText}> Messages</span></i></a>



            <a className={`list-group-item
        ${active === 'bookmarks' ? 'active' : ''}`}>
                <i className='fas fa-bookmark'><span style={toolText}> Bookmarks</span></i></a>



            <a className={`list-group-item
        ${active === 'lists' ? 'active' : ''}`}>
                <i className='fas fa-list'><span style={toolText}> Lists</span></i></a>



            <a className={`list-group-item
        ${active === 'user' ? 'active' : ''}`}>
                <i className='fas fa-user'><span style={toolText}> User</span></i></a>


            <a className={`list-group-item
        ${active === 'explore' ? 'active' : ''}`}>
                <div className='fa-stack' style={{margin: "-.75em"}}>
                    <i className='fas fa-circle fa-stack-1x'><i className='fas fa-ellipsis-h fa-stack-1x small' style={{color: "black", fontSize: ".65em"}}></i></i>
                </div> More</a>


        <div className="d-grid mt-3">
            <a
               className="btn btn-primary btn-block rounded-pill">
                Tweet</a>
        </div>

    </div>
    )

}
export default NavigationSidebar;
