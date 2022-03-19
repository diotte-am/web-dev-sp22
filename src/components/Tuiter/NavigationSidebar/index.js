import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    const toolText = {
        fontFamily: "sans-serif",
        fontWeight: "normal",
    };

    const toolTextStacked = {
        fontFamily: "sans-serif",
        fontWeight: "normal",
        margin: "-.75em"
    };

    const textStacked = {
        margin: "2em"
    };

    return(
        <div className='list-group m-0 p-2'>
                <a className='list-group-item'>

            <div className='' style={toolText}>
                <i className='fas fa-twitter '><i className='' ></i></i>
                <span style={toolText}> </span></div></a>



            <a className={`list-group-item
        ${active === 'home' ? 'active' : ''}`}>

            <div className='' style={toolText}>
                <i className='fas fa-home '><i className='' ></i></i>
                <span style={toolText}> Home</span></div></a>



                <a className={`list-group-item
        ${active === 'explore' ? 'active' : ''}`}>

                    <div className='' style={toolText}>
                        <i className='fas fa-hashtag '><i className='' ></i></i>
                        <span style={toolText}> Explore</span></div></a>



            <a className={`list-group-item
        ${active === 'notifications' ? 'active' : ''}`}>

            <div className='' style={toolText}>
                <i className='fas fa-bell '><i className='' ></i></i>
                <span style={toolText}> Notifications</span></div></a>



            <a className={`list-group-item
        ${active === 'messages' ? 'active' : ''}`}>

                <div className='' style={toolText}>
                    <i className='fas fa-envelope '><i className='' ></i></i>
                    <span style={toolText}> Messages</span></div></a>



            <a className={`list-group-item
        ${active === 'bookmarks' ? 'active' : ''}`}>

                <div className='' style={toolText}>
                    <i className='fas fa-bookmark '><i className='' ></i></i>
                    <span style={toolText}> Bookmarks</span></div></a>



            <a className={`list-group-item
        ${active === 'lists' ? 'active' : ''}`}>

            <div className='' style={toolText}>
                <i className='fas fa-list '><i className='' ></i></i>
                <span style={toolText}> Lists</span></div></a>



            <a className={`list-group-item
        ${active === 'user' ? 'active' : ''}`}>

                <div className='' style={toolText}>
                    <i className='fas fa-user '><i className='' ></i></i>
                    <span style={toolText}> User</span></div></a>


            <a className={`list-group-item
        ${active === 'explore' ? 'active' : ''}`}>

                <div className='fa-stack' style={toolTextStacked}>
                    <i className='fas fa-circle fa-stack-1x'><i className='fas fa-ellipsis-h fa-stack-1x small' style={{color: "black", fontSize: ".65em"}}></i></i>
                <span style={textStacked}> More</span></div></a>


        <div className="d-grid mt-3">
            <a
               className="btn btn-primary btn-block rounded-pill">
                Tweet</a>
        </div>

    </div>
    )

}
export default NavigationSidebar;
