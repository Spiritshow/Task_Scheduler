import React, { useEffect, useState } from "react";
import "./TitleProject.css";
import imgSettings from "../../../img/Settings.png";
import imgDelete from "../../../img/Delete.png";
import { useNavigate } from "react-router-dom";

const TitleProject = ({prop}) => {
    const [status, setStatus] = useState("yellowStatusTask");
    const navigate = useNavigate();
    useEffect(() => {
        editStatusTask(prop.state);
    })

    const handleSettings = () => {
        
        navigate(`/app/Settings/${prop.name}`,{state: prop});
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
                    <h4 className="NameProject">{prop.name}</h4>
                </div>
                <div className="DayCreateProjectdiv">
                    <h4 className="DayCreateProject">{prop.daycreate}</h4> {/* {ShowData(prop.dayCreate)} */} 
                </div>
                <div className="CountTaskdiv">
                    <h4 className="CountTask">{prop.counttask}</h4>
                </div>
                <div className="DeadlineProjectdiv">
                    <h4 className="DeadlineProject">{prop.deadline}</h4> {/*{prop.deadlineTask}    {ShowData(prop.deadline)}*/} 
                </div>
                <div className={status}></div>
                <button className="ButtonSetting" onClick={handleSettings}><img src={imgSettings} className="ImageSetting"/></button>
                <button className="ButtonDelete" onClick={handleDelete}><img src={imgDelete} className="ImageDelete"/></button>
            </div>
        </div>
    )
}

export default TitleProject;