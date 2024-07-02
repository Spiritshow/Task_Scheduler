import React, { useEffect, useState } from "react";
import "./TitleProject.css";
import imgSettings from "../../../img/Settings.png";
import imgDelete from "../../../img/Delete.png";

const TitleProject = ({prop}) => {
    const [status, setStatus] = useState("yellowStatusTask");

    useEffect(() => {
        editStatusTask(prop.statusProject);
    })

    const handleSettings = () => {
        
    }

    const handleDelete = () => {

    }

    const editStatusTask = (status) => {
        switch (status) {
            case "green":
                setStatus("greenStatusProject");
                break;
            case "red":
                setStatus("redStatusProject");
                break;
            default:
                setStatus("yellowStatusProject");
                break;
        }
    }

    const ShowData = (data) => {
        return(data.getDate() + "." + data.getMonth() + "." + data.getFullYear())
    }

    return(
        <div className="ComponentProject">
            <div className="TitleProject">
                <div className="NameProjectdiv">
                    <h4 className="NameProject">{prop.nameProject}</h4>
                </div>
                <div className="DayCreateProjectdiv">
                    <h4 className="DayCreateProject">{ShowData(prop.dayCreateProject)}</h4> {/**/} 
                </div>
                <div className="CountTaskdiv">
                    <h4 className="CountTask">{prop.CountTask}</h4>
                </div>
                <div className="DeadlineProjectdiv">
                    <h4 className="DeadlineProject">{ShowData(prop.deadlineProject)}</h4> {/*{prop.deadlineTask}*/} 
                </div>
                <div className={status}></div>
                <button className="ButtonSetting" onClick={handleSettings}><img src={imgSettings} className="ImageSetting"/></button>
                <button className="ButtonDelete" onClick={handleDelete}><img src={imgDelete} className="ImageDelete"/></button>
            </div>
        </div>
    )
}

export default TitleProject;