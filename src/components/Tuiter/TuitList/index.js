import React from "react";
import tuits from "./tuits.json";
import TuitListItem from "./TuitListItem";


const TuitList = () => {
    return(
        <ul>
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
