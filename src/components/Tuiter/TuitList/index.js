import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllTuits}
    from "../actions/tuits-actions";
import TuitListItem from "./TuitListItem";


const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);

    const dispatch = useDispatch();
    useEffect(() => {
            return findAllTuits(dispatch);
        },
        []);
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
