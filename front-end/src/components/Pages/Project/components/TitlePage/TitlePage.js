import React from "react";
import imgsearch from "../img/Search.png"
import "./TitlePage.css"

const TitlePageProject = () => {

    const handleChange = () => {

    }

    const handleSearch = () => {

    }

    const handleSelect = () => {

    }

    return(
        <div className="TitlePage">
            <h2 className="TitleName">Проекты</h2>
            <div className="SearchComponent">
                <input className="InputSearch" onChange={handleChange} placeholder="Поиск..."></input>
                <button className="ButtonSearch" onClick={handleSearch}><img className="imgSearch" src={imgsearch} alt=""/></button>
            </div>
            <div className="Selectordiv">
                <select className="Selector" onChange={handleSelect}>
                    <option value="">Всё</option>
                    <option value="done">Выполненые</option>
                    <option value="not done">Не выполненые</option>
                    <option value="overdue">Просроченные</option>
                </select>
            </div>
        </div>
    )
}

export default TitlePageProject;