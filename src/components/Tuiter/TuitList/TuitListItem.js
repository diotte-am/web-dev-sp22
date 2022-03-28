import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "../TuitStats";
import TuitListConditional from "./TuitListConditional";

const TuitListItem = ({tuits}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };
    return(
    <li  className="list-group-item pt-2 pb-2 pe-0">

                <div className="row col-12 pt-2 pb-2 pe-0">


                    <div className="row">
                        <div className="col-2 ps-0">
                            <img alt="logo" src={tuits.logoImage} className="wd-rnd-icon-50"/>
                        </div>


                        <div className="col-9 ps-0" >
                            <span className="wd-c-white-bd-text">{tuits.postedBy.username} <i class="fas fa-check-circle"></i></span>

                            <span className="wd-c-grey-reg-text"> @{tuits.handle} </span>
                            <div className="wd-white-text" style={{lineHeight: "1.5em"}}>
                                <div dangerouslySetInnerHTML={{__html:tuits["title"]}}></div>

                            </div>
                            <div>
                                {tuits.tuit}
                            </div>
                            <div>
                                <TuitListConditional tuits={tuits} />
                            </div>


                        </div>
                        <div className="col-1 ps-0 pe-0">
                            <i onClick={() =>
                                deleteTuit(tuits)}
                               className='fas fa-times pe-0'></i>
                        </div>

                    </div>
                </div>


                <div className="row">
                    <div className="col-1 ms-3 pt-3">

                    </div>
                    <div className="col-9 row ms-1" >

                        <div className="col" >
                            <a href="#"><i className="far fa-comment pe-2 wd-grey-reg-text"  aria-hidden="true">
                                <span className="wd-text-regular wd-grey-reg-text"> {tuits.stats.comments}</span></i></a>
                        </div>

                        <div className="col">
                            <a href="#"><i className="fa fa-retweet wd-grey-reg-text" aria-hidden="true">
                                <span className="wd-text-regular wd-grey-reg-text"> {tuits.stats.retuits}</span></i></a>
                        </div>

                        <div className="col">
                            <TuitStats tuit={tuits}/>
                                <span className="wd-text-regular wd-grey-reg-text"></span>

                        </div>


                        <div className="col">
                            <a href="#"><i className="fa fa-upload wd-grey-reg-text" aria-hidden="true">
                                <span className="wd-text-regular wd-grey-reg-text"> </span></i></a>
                        </div>

                    </div>
                </div>

            </li>

    )
}

export default TuitListItem;