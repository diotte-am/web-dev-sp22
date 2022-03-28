import React from "react";
const TuitListConditional = ({tuits}) => {


            if (tuits.attachments) {
                if(tuits.attachments.image){
                    return(
                        <img alt="attachments" src={tuits.attachments.image} className="col-12"/>
                    )
                }
                if(tuits.attachments.video){
                    return(
                        <iframe
                            width="853"
                            height="360"
                            src={`https://www.youtube.com/embed/${tuits.attachments.video}`}
                            frameBorder="0"
                            title="Embedded youtube"
                            className="col-12"
                        />

                    )
                }


        }
            return ("");


};
export default TuitListConditional;