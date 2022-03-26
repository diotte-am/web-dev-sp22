import React from "react";
import tuits from "./tuits.json";
import TuitListItem from "./TuitListItem";


const TuitList = () => {
    return(
        <ul className="list-group">
            <li className="list-group-item pt-2 pb-2">
                <span className="wd-c-white-bd-text">Home</span>
            </li>
            {
                tuits.map(tuit => {
                    return(<TuitListItem key={tuit._id} tuits={tuit}/>
                    );
                })
            }
        </ul>
    );
}

export default TuitList;
