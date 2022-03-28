import React, {useState} from "react";
import {useDispatch} from "react-redux";



const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <>
        <div className="flex-container pt-1 col-12 row">
            <div className="col-2">

                <img src="/tuiter/image/amare.png" className="wd-rnd-icon-50"/>
            </div>
            <div className="col-10">
              <textarea className="form-control text-body wd-grey-border" rows="2" placeholder="What's Happening" style={{backgroundColor: "#070807", resize: "none"}} value={whatsHappening}
                        onChange={(event) =>
                            setWhatsHappening(event.target.value)}>
              </textarea>
            </div>
        </div>
        <div className="flex-container row pb-2">
            <div className="col-9">
            </div>
                <button className="btn btn-primary col-2" style={{borderRadius: "25px", border: "none", fontWeight: "bold"}}  onClick={tuitClickHandler} >
                    Tuit
                </button>

        </div>
        </>
    );
}
export default WhatsHappening;