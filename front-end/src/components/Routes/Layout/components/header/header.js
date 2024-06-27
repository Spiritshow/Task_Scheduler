import React from "react";
import "./header.css";
import CardClient from "./components/cardClient/cardClient";
import MovePlace from "./components/movePlace/movePlace";
import ButtonCreateProject from "./components/CreateProgect/createProject";

const Header = () => {
    return(
        <dir className="header">
            <CardClient/>
            <MovePlace/>
            <ButtonCreateProject/>
        </dir>
    );
}

export default Header;