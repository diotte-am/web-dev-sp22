import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit}
    from "../actions/tuits-actions";


const WhatsHappening = () => {
    const [newTuit, setNewTuit] =
        useState('');
    const dispatch = useDispatch();

    return (
        <>
        <div className="flex-container pt-1 col-12 row">
            <div className="col-2">
                <img alt="profilepic" src="/tuiter/image/amare.png" className="wd-rnd-icon-50"/>
            </div>
            <div className="col-10">
                 <textarea className="form-control text-body wd-grey-border" rows="2" placeholder="What's Happening" style={{backgroundColor: "#070807", resize: "none"}}
                           onChange={(e) =>
                               setNewTuit({...newTuit,
                                   tuit: e.target.value})}></textarea>
            </div>
            <div className="flex-container row pb-2">
                <div className="col-10">
                </div>
                <button onClick={() =>
                    createTuit(dispatch, newTuit)}
                        className="btn btn-primary col-2" style={{borderRadius: "25px", border: "none", fontWeight: "bold"}}>
                    Tuit
                </button>
            </div>

        </div>

        </>
    );
}
export default WhatsHappening;