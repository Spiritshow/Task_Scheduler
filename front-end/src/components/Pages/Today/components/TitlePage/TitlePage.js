import React from "react";
import imgsearch from "../img/Search.png"
import "./TitlePage.css"

const TitlePage = () => {

    const handleSearch = () => {

    }

    const handleSelect = () => {

    }

    return(
        <div className="TitlePage">
            <h2 className="TitleName">Задачи</h2>
            <div className="SearchComponent">
                <input className="InputSearch" placeholder="Поиск..."></input>
                <button className="ButtonSearch" onClick={handleSearch}><img className="imgSearch" src={imgsearch}/></button>
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

export default TitlePage;