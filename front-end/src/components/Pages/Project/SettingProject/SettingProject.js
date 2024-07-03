import React from "react";
import TitlePageSetting from "./components/TitlePageSetting/TitlePageSetting";
import TitleTableSetting from "./components/TItleTableSettings/TitleTableSetting";
import TaskSetting from "./components/TaskSetting/TaskSetting";
import { useData } from "../../../store/store";
import "./SettingProject.css"
import { useLocation } from "react-router-dom";

const SettingProject = () => {

    const location = useLocation();
    const project = location.state;
    // const project = useData(state => state.data);

    const handleAddTask = () => {

    }

    const ListTask = (tasks) => {
        return(tasks.map(task => (
            <TaskSetting prop={task}/>
        )))
    }

    return(
        <div className="SettingProjectdiv">
            <div className="SettingProject">
                <TitlePageSetting name={project.nameProject}/>
                <TitleTableSetting/>
                <div className="ListTask">
                    {ListTask(project.Tasks)}
                </div>
                <button className="buttonAddTask" onClick={handleAddTask}>Добавить задачу</button>
            </div>
        </div>
    )
}

export default SettingProject;
