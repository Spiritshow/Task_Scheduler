import React from "react";
import TitleTask from "./components/TitleTask/Titletask";
import CardSubtask from "./components/CardSubtask/CardSabtask";
import "./TaskSetting.css";

const TaskSetting = ({prop}) => {

    const handleAddSubtask = () => {

    }

    const ListSubtask = (subtasks) => {
        return(subtasks.map(subtask => (
            <CardSubtask prop={subtask}/>
        )))
    }

    return(
        <div className="TaskSettingdiv">
            <div className="TaskSetting">
                <TitleTask prop={prop}/>
                <div className="Listdiv">
                    {ListSubtask(prop.Subtasks)}
                    <button className="buttonAddSubtask" onClick={handleAddSubtask}>Добавить подзадачу</button>
                </div>
                
            </div>
        </div>
    )
}

export default TaskSetting;