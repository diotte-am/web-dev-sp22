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
        <div className="container pt-1 col-12">
        <div className="input-group mb-3 justify-content-evenly align-items-center">
      <textarea className="col-10" value={whatsHappening}
                onChange={(event) =>
                    setWhatsHappening(event.target.value)}>
      </textarea>
            <button className="col-1 m-1" onClick={tuitClickHandler}>
                Tuit
            </button>
        </div>
        </div>
    );
}
export default WhatsHappening;