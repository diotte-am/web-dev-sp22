import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {

                return(
    <>
            <div className={'list-group m-0 p-2'}>
                <a className={'list-group-item'} href="/">
                    <i className={'fab fa-twitter'}></i></a>
            </div>

            

    </>
    )

}
export default NavigationSidebar;
