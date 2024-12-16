import React from "react";
import "./TitleTable.css"

const TitleTable = () => {
    return(
        <div className="componentTitleTable">
            <h3 className="NameTable">Название</h3>
            <h3 className="DayCreateTable">День создания</h3>
            <h3 className="ProjectTable">Проект</h3>
            <h3 className="DeadlineTable">День сдачи</h3>
            <h3 className="StatusTable">Статус</h3>
        </div>
    )
}

export default TitleTable;