import React, { useEffect, useState } from "react";
import Subtask from "../Subtask/SubTask";
import "./Task.css"
import imgFold from "../img/Fold (1).png"

const Task = ({prop}) => {

    const [status, setStatus] = useState("yellowStatusTask");
    const [targ, setTarg] = useState(false);

    const handleFold = () => {
        if (targ) 
            setTarg(false);
        else 
            setTarg(true);

        prop.status = DefinitionStatus(prop.subtasks);
        editStatusTask(prop.status);
    }
    
    let sb = prop.subtasks[0];

    useEffect(() => {
        prop.status = DefinitionStatus(prop.subtasks);
        editStatusTask(prop.status);
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
        const allTrue = subtasks.every(subtask => subtask.status === true);
        console.log(subtasks);
        console.log(allTrue);
        return allTrue ? "green" : "yellow";
    }

    const listSubtask = (subtasks) => {
        if(!!subtasks)
        return(subtasks.map(subtask =>(
            <Subtask prop={subtask}/>)))
        else 
        return(<h4>Загрузка...</h4>)
    }

    return(
        <div className="ComponentTask">
            <div className="TitleTask">
                <button className="ButtonFold" onClick={handleFold}><img src={imgFold} className="ImageFold"/></button>
                <div className="NameTaskdiv">
                    <h4 className="NameTask">{prop.name}</h4>
                </div>
                <div className="DayCreateTaskdiv">
                    <h4 className="DayCreateTask">{prop.dayCreate}</h4>
                </div>
                <div className="Projectdiv">
                    <h4 className="Project">{prop.project}</h4>
                </div>
                <div className="Deadlinediv">
                    <h4 className="Deadline">{prop.deadline}</h4>
                </div>
                <div className={status}></div>
            </div>
            {targ && <div className="SubtaskLisk">
                {listSubtask(prop.subtasks)}
            </div>}
        </div>
    )
}

export default Task;