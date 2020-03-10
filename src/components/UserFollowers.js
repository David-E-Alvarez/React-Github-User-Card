import React from "react";

const UserFollowers = (props) => {
    console.log("props in UserFollowers", props.followerArray);
    return(
        <div>
            {props.followerArray.map(user =>{
                //    return <h1>{tasks.task}</h1>
                        return <h1>{user.login}</h1>
                })}

        </div>

    )
}

export default UserFollowers;