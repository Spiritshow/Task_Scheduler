import React, { useEffect, useState } from "react";
import "./TitleProject.css";
import imgSettings from "../../../img/Settings.png";
import imgDelete from "../../../img/Delete.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCrutch2 } from "../../../../../../store/store";

const TitleProject = ({prop}) => {
    const [status, setStatus] = useState("yellowStatusTask");
    const togleCrutch2 = useCrutch2(state => state.togleCrutch);
    const navigate = useNavigate();
    useEffect(() => {
        editStatusTask(prop.state);
    })

    const handleSettings = () => {
        
        navigate(`/app/Settings/${prop.name}`,{state: prop});
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3001/api/project?search=${prop.id}`)
        } catch (error) {
            console.error('Ошибка получения данных:', error);
        }

        

        togleCrutch2();
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
                    <h4 className="DayCreateProject">{ShowData(new Date(prop.daycreate))}</h4> {/* {ShowData(prop.dayCreate)} */} 
                </div>
                <div className="CountTaskdiv">
                    <h4 className="CountTask">{prop.counttask}</h4>
                </div>
                <div className="DeadlineProjectdiv">
                    <h4 className="DeadlineProject">{ShowData(new Date(prop.deadline))}</h4> {/*{prop.deadlineTask}    {ShowData(prop.deadline)}*/} 
                </div>
                <div className={status}></div>
                <button className="ButtonSetting" onClick={handleSettings}><img src={imgSettings} className="ImageSetting"/></button>
                <button className="ButtonDelete" onClick={handleDelete}><img src={imgDelete} className="ImageDelete"/></button>
            </div>
        </div>
    )
}

export default TitleProject;