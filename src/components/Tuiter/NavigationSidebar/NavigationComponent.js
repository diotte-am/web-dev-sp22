import React from "react";


const NavigationComponent = (
    {navs={

    "active": "explore",
    "stack": "fa-stack",
    "stackStyle": "toolTextStacked",
    "icon": "fas fa-circle fa-stack-1x",
    "stackedIcon": "fas fa-ellipsis-h fa-stack-1x small",
    "stackedIconStyle": "{color: \"black\", fontSize: \".65em\"}",
    "name": "More"

    }, active}

) => {
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

        <a className={`list-group-item
        ${navs.active === 'explore' ? 'active' : ''}`}>

            <div className={navs.stack} >
                <i className={navs.icon}><i className={navs.stackedIcon} ></i></i>
                <span style={textStacked}> {navs.name}</span></div></a>

    )
}
export default NavigationComponent;