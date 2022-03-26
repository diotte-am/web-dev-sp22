import React from "react";
import tuits from "./tuits.json";
import TuitListItem from "./TuitListItem";


const TuitList = () => {
    return(
        <ul>
            {
                tuits.map(tuit => {
                    return(<TuitListItem tuits={tuit}/>
                    );
                })
            }
        </ul>
    );
}

export default TuitList;
