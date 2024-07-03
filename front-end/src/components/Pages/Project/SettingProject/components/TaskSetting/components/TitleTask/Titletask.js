import React, { useEffect, useState } from "react";
import "./TitleTask.css";
import imgSettings from "../../../img/Settings.png";
import imgDelete from "../../../img/Delete.png";

const TitleTask = ({prop}) => {
    const [status, setStatus] = useState("yellowStatusTask");

    useEffect(() => {
        editStatusTask(prop.statusTask);
    })

    const handleSettings = () => {
        
    }

    const handleDelete = () => {

    }

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

    const ShowData = (data) => {
        return(data.getDate() + "." + data.getMonth() + "." + data.getFullYear())
    }

    return(
        <div className="ComponentTask">
            <div className="TitleTask">
                <div className="NameTaskdiv">
                    <h4 className="NameTask">{prop.nameTask}</h4>
                </div>
                <div className="DayCreateTaskdiv">
                    <h4 className="DayCreateTask">{ShowData(prop.dayCreateTask)}</h4> 
                </div>
                <div className="DeadlineTaskdiv">
                    <h4 className="DeadlineTask">{ShowData(prop.deadlineTask)}</h4> 
                </div>
                <div className={status}></div>
                <div className="DayTargetTaskdiv">
                    <h4 className="DayTargetTask">{ShowData(prop.dayTargetTask)}</h4>
                </div>
                <button className="ButtonSetting" onClick={handleSettings}><img src={imgSettings} className="ImageSetting"/></button>
                <button className="ButtonDelete" onClick={handleDelete}><img src={imgDelete} className="ImageDelete"/></button>
            </div>
        </div>
    )
}

export default TitleTask;