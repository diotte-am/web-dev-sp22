import React from "react";
import HomeItem from "./HomeItem";
import posts from "./posts.json";


const HomeItemList = () => {
    return(
        <>
             {
        posts.map(posts => {
            if (posts.subhead === ""){
                return (HomeItem(posts));
            } else{
                return(HomeItem(posts));
            }

        })
    }
        </>
    );
}
export default HomeItemList;