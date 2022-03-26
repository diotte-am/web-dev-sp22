import React from "react";

const TuitListItem = ({tuits}) => {
    return(


            <li  className="list-group-item pt-2 pb-2">
                <div className="row col-12 pt-2 pb-2">
                    <div className="row">
                        <div className="col-2">
                            <img src={tuits.logoImage} className="wd-rnd-icon-80"/>
                        </div>


                        <div className="col-10 ps-4" >
                            <span className="wd-c-white-bd-text">{tuits.topic} <i class="fas fa-check-circle"></i></span>

                            <span className="wd-c-grey-reg-text">{tuits.userName} </span> <span class="wd-c-grey-reg-text"> &bull; {tuits.time}</span>
                            <div className="wd-white-text" style={{lineHeight: "1.5em"}}>
                                <div dangerouslySetInnerHTML={{__html:tuits["title"]}}></div>

                            </div>
                            {tuits.tuit}
                            <div className="row p-3 wd-grey-border" style={{borderRadius: "15px"}}>
                                <img width="auto" src={tuits.image}/>
                                <div className="wd-white-text" >{tuits.subhead}</div>
                                <div className="wd-grey-normal-text">{tuits.details}</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-2 ps-4 pt-3">

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
                            <a href="#"><i className="far fa-heart wd-grey-reg-text" aria-hidden="true">
                                <span className="wd-text-regular wd-grey-reg-text"> {tuits.stats.likes}</span></i></a>
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