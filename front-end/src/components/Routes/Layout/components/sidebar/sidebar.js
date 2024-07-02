import React from "react";
import "./sidebar.css";
import { useData } from "../../../../store/store";
import imgSearch from "./component/img/Search.png"
import CardProject from "./component/cardProject";

const Sidebar = () => {

    const project = useData((state) => state.data)

    const handleChange = () => {

    }

    const handleSearch = () => {

    }

    return(
        <div className="sidebar">
            <h2 className="sidebarName">Проекты</h2>
            <div className="ComponentSearchSB">
                <button className="buttonSearchSB" onClick={handleSearch}><img className="imgSearchSB" src={imgSearch} alt=""></img></button>
                <input className="InputSearchSB" onChange={handleChange} placeholder="Поиск..."></input>
            </div>
            <CardProject prop={project}/>
        </div>
    )
}

export default Sidebar;