import React from "react";
import HomeItem from "./HomeItem";
import posts from "./posts.json";
import HomeItemNoText from "./HomeItemNoText";


const HomeItemList = () => {
    return(
        <>
             {
        posts.map(posts => {
            if (posts.subhead === ""){
                return (HomeItemNoText(posts));
            } else{
                return(HomeItem(posts));
            }

        })
    }
        </>
    );
}
export default HomeItemList;