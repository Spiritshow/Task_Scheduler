import React from "react";
import { useUser } from "../../../../../../store/store";
import "./cardClient.css"

const CardClient = () => {

    const user = useUser((state) => state.data)

    return(
        <div className="cardClient">
            <img className="Avatar" src={user.image} alt="-"/>
            <h3 className="userName">{user.name}</h3>
        </div>
    );
}

export default CardClient;