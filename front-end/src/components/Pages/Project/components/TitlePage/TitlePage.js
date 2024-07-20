import React from "react";
import imgsearch from "../img/Search.png"
import "./TitlePage.css"

const TitlePageProject = ({prop}) => {

    const handleChange = () => {

    }

    const handleSearch = () => {

    }

    const handleSelect = (event) => {
        prop(event.target.value);
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
                    <option value="all">Всё</option>
                    <option value="green">Выполненые</option>
                    <option value="yellow">Не выполненые</option>
                    {/* <option value="overdue">Просроченные</option> */}
                </select>
            </div>
        </div>
    )
}

export default TitlePageProject;