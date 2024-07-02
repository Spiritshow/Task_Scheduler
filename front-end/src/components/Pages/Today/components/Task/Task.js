import React, { useEffect, useState } from "react";
import Subtask from "../Subtask/SubTask";
import "./Task.css"
import imgFold from "../img/Fold (1).png"
import { useData } from "../../../../store/store";

const Task = ({prop}) => {

    const project = useData((state) => state.data)
    const [status, setStatus] = useState("yellowStatusTask");
    const [targ, setTarg] = useState(false);

    const handleFold = () => {
        if (targ) 
            setTarg(false);
        else 
            setTarg(true);
        prop.statusTask = DefinitionStatus(prop.Subtasks);
        editStatusTask(prop.statusTask);
    }
    
    let sb = prop.Subtasks[0];

    useEffect(() => {
        prop.statusTask = DefinitionStatus(prop.Subtasks);
        editStatusTask(prop.statusTask);
    }, [prop, sb])

    const editStatusTask = (status) => {
        switch (status) {
            case "green":
                setStatus("greenStatusTask");
                break;
            case "red":
                setStatus("redStatusTask");
                break;
            default:
                setStatus("yellowStatusTask");
                break;
        }
    }

    const DefinitionStatus = (subtasks) => {
        const allTrue = subtasks.every(subtask => subtask.statusSubtask === true);
        return allTrue ? "green" : "yellow";
    }

    const listSubtask = (subtasks) => {

        if(!!subtasks)
        return(subtasks.map(subtask =>(
            <Subtask prop={subtask}/>)))
        else 
        return(<h4>Загрузка...</h4>)
    }

    const ShowData = (data) => {
        return(data.getDate() + "." + data.getMonth() + "." + data.getFullYear())
    }

    return(
        <div className="ComponentTask">
            <div className="TitleTask">
                <button className="ButtonFold" onClick={handleFold}><img src={imgFold} className="ImageFold"/></button>
                <div className="NameTaskdiv">
                    <h4 className="NameTask">{prop.nameTask}</h4>
                </div>
                <div className="DayCreateTaskdiv">
                    <h4 className="DayCreateTask">{ShowData(prop.dayCreateTask)}</h4> {/**/} 
                </div>
                <div className="Projectdiv">
                    <h4 className="Project">{project[0].nameProject}</h4>
                </div>
                <div className="Deadlinediv">
                    <h4 className="Deadline">{ShowData(prop.deadlineTask)}</h4> {/*{prop.deadlineTask}*/} 
                </div>
                <div className={status}></div>
            </div>
            {targ && <div className="SubtaskLisk">
                {listSubtask(prop.Subtasks)}
            </div>}
        </div>
    )
}

export default Task;