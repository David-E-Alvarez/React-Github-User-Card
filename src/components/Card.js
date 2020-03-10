import React from "react";

const Card = (props) =>{
   console.log("props.meObject: ", props.meObject)
    return(
        <div>
            <img src={props.meObject.avatar_url} alt="git hub pic"/>
            <h1>{props.meObject.name}</h1>
        </div>
        
    )
}

export default Card;