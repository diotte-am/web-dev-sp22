import React from "react";
import {Link, useLocation} from "react-router-dom";

const NavigationSidebar = (
    {
        active
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

    const location = useLocation();

    return(
        <div className='list-group m-0 p-0 '>

            <Link to="/" className='list-group-item'>
            <div className='' style={toolText}>
                <i className='fab fa-twitter '><i className='' ></i></i>
                <span style={toolText}> </span></div></Link>



            <Link to="/tuiter" className={`list-group-item
        ${location.pathname === '/tuiter' ? 'active' : ''}
         ${location.pathname === '/tuiter/' ? 'active' : ''}
        `}>

            <div className='' style={toolText}>
                <i className='fas fa-home'><i className='' ></i></i>
                <span className='d-none d-xl-inline' style={toolText}> Home</span></div></Link>



                <Link to="/tuiter/explore" className={`list-group-item
        ${location.pathname === '/tuiter/explore' ? 'active' : ''}`}>

                    <div className='' style={toolText}>
                        <i className='fas fa-hashtag '><i className='' ></i></i>
                        <span className='d-none d-xl-inline' style={toolText}> Explore</span></div></Link>



            <Link to="/tuiter/notifications" className={`list-group-item
        ${location.pathname === '/tuiter/notifications' ? 'active' : ''}`}>

            <div className='' style={toolText}>
                <i className='fas fa-bell '><i className='' ></i></i>
                <span className='d-none d-xl-inline' style={toolText}> Notifications</span></div></Link>



            <Link to="/tuiter/messages" className={`list-group-item
        ${location.pathname === '/tuiter/messages' ? 'active' : ''}`}>

                <div className='' style={toolText}>
                    <i className='fas fa-envelope '><i className='' ></i></i>
                    <span className='d-none d-xl-inline' style={toolText}> Messages</span></div></Link>



            <Link to="/tuiter/bookmarks" className={`list-group-item
        ${location.pathname === '/tuiter/bookmarks' ? 'active' : ''}`}>

                <div className='' style={toolText}>
                    <i className='fas fa-bookmark '><i className='' ></i></i>
                    <span className='d-none d-xl-inline' style={toolText}> Bookmarks</span></div></Link>



            <Link to="/tuiter/lists" className={`list-group-item
        ${location.pathname === '/tuiter/lists' ? 'active' : ''}`}>

            <div className='' style={toolText}>
                <i className='fas fa-list '><i className='' ></i></i>
                <span className='d-none d-xl-inline' style={toolText}> Lists</span></div></Link>



            <Link to="/tuiter/profile" className={`list-group-item
        ${location.pathname === '/tuiter/profile' ?  'active' : ''}`}>

                <div className='' style={toolText}>
                    <i className='fas fa-user '><i className='' ></i></i>
                    <span className='d-none d-xl-inline' style={toolText}> Profile</span></div></Link>


           <Link to= "/tuiter/more" className={`list-group-item
        ${location.pathname === '/tuiter/more' ? 'active' : ''}`}>

                <div className='fa-stack' style={toolTextStacked}>
                    <i className='fas fa-circle fa-stack-1x'><i className='fas fa-ellipsis-h fa-stack-1x small' style={{color: "black", fontSize: ".65em"}}></i></i>
                    <span className='d-none d-xl-inline' style={textStacked}> More</span></div></Link>


        <div className="d-grid  mt-3">
            <button
               className="btn btn-primary btn-block rounded-pill ps-2 pe-2">
                Tweet</button>
        </div>

    </div>
    )

}
export default NavigationSidebar;
