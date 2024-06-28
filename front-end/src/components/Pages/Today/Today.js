import React from "react";
import "./Today.css";
import TitlePage from "./components/TitlePage/TitlePage";
import TitleTable from "./components/TitleTable/TitleTable";
import Task from "./components/Task/Task";

const Today = () => {

    let prop1 = {
        name: "Название подзадачи 1",
        status: true
    }
    let prop2 = {
        name: "Название подзадачи 2",
        status: true
    }
    let prop3 = {
        name: "Название подзадачи 3",
        status: true
    }
    
    let prop = {
        name: "Кукурузка",
        dayCreate: "26.06.2024",
        project: "Овощи",
        deadline: "30.06.2024",
        status: "yellow",
        subtasks: [prop1, prop2, prop3]
    }
    
    let prop21 = {
        name: "Название подзадачи 1",
        status: true
    }
    let prop22 = {
        name: "Название подзадачи 2",
        status: true
    }
    let prop23 = {
        name: "Название подзадачи 3",
        status: false
    }
    
    let _prop = {
        name: "Морковка фри",
        dayCreate: "20.05.2024",
        project: "Овощи",
        deadline: "01.06.2024",
        status: "yellow",
        subtasks: [prop21, prop22, prop23]
    }
      
    const props = [prop, _prop];

    return(
        <div className="Todaydiv">
            <div className="Today">
            <TitlePage/>
            <TitleTable/>
            {props.map(prop => (
                <Task prop={prop}/>
            ))}
            </div>
        </div>
    )
}

export default Today;