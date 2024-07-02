import React from "react";
import "./TitleTable.css"

const TitleTableProject = () => {
    return(
        <div className="componentTitleTable">
            <h3 className="NameTable">Название</h3>
            <h3 className="DayCreateTable">День создания</h3>
            <h3 className="ProjectTable">Кол-во задач</h3>
            <h3 className="DeadlineTable">День сдачи</h3>
            <h3 className="StatusTable">Статус</h3>
        </div>
    )
}

export default TitleTableProject;