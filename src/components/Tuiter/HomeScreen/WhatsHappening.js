import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit}
    from "../actions/tuits-actions";


const WhatsHappening = () => {
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});
    const dispatch = useDispatch();

    return (
        <>
        <div className="flex-container pt-1 col-12 row">
            <div className="col-2">
                <button onClick={() =>
                    createTuit(dispatch, newTuit)}
                        className="btn btn-primary float-end">
                    Tuit
                </button>
                <textarea className="form-control w-75"
                          onChange={(e) =>
                              setNewTuit({...newTuit,
                                  tuit: e.target.value})}></textarea>
                <img alt="profilepic" src="/tuiter/image/amare.png" className="wd-rnd-icon-50"/>
            </div>
        </div>

        </>
    );
}
export default WhatsHappening;