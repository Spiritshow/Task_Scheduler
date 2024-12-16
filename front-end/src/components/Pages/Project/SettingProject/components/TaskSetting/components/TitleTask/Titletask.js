import React, { useEffect, useState } from "react";
import "./TitleTask.css";
import imgSettings from "../../../img/Settings.png";
import imgDelete from "../../../img/Delete.png";
import axios from "axios";
import { useCrutch2 } from "../../../../../../../store/store";

const TitleTask = ({prop}) => {
    const togleCrutch2 = useCrutch2(state => state.togleCrutch);
    const [status, setStatus] = useState("yellowStatusTask");
    const [update,setUpdate] = useState(false);
    const [newName,setNewName] = useState(prop.name);
    const [newDayCreate, setNewDayCreate] = useState(prop.daycreate);
    const [newdeadline, setNewDeadline] = useState(prop.deadline);
    const [newDayTarget, setNewDayTarget] = useState(prop.daytarget);


    useEffect(() => {
        editStatusTask(prop.state);
    })

    const handleSettings = () => {
        setUpdate(true);
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3001/api/task?search=${prop.id}`)
        } catch (error) {
            console.error('Ошибка получения данных:', error);
        }
        togleCrutch2();
    }

    const handleChangeName = (e) => {
        setNewName(e.target.value); //проверить
    }

    const handleDayCreateTask = (e) => {
        setNewDayCreate(e.target.value);
    }

    const handleChangeDeadline = (e) => {
        setNewDeadline(e.target.value);
    }

    const handleDayTarget = (e) => {
        setNewDayTarget(e.target.value);
    }

    const updateTask = async () => { 
        try {
            await axios.put(`http://localhost:3001/api/task`,{id: prop.id, name: newName, daycreate: prop.daycreate, daytarget: newDayTarget, deadline: newdeadline,state: prop.state, id_project: prop.id_project})
        } catch (error) {
            console.error('Ошибка получения данных:', error);
        }
    }

    const handleAdd = () => {
        updateTask();
        togleCrutch2();
        setUpdate(false);
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
                    {!update && <h4 className="NameTask">{newName}</h4>}
                    {update && <input onChange={handleChangeName} className="InputNameTask"></input>}
                </div>
                <div className="DayCreateTaskdiv">
                     <h4 className="DayCreateTask">{ShowData(new Date(prop.daycreate))}</h4>  {/*ShowData(prop.daycreate) */}
                    {/* {update && <input type="date" onChange={handleDayCreateTask} className="InputDayCreateTask"></input>}  */}
                </div>
                <div className="DeadlineTaskdiv">
                    {!update && <h4 className="DeadlineTask">{ShowData(new Date(newdeadline))}</h4>}  {/*ShowData(prop.deadline)*/}
                    {update && <input type="date" onChange={handleChangeDeadline} className="InputDeadline"></input>} 
                </div>
                <div className={status}></div>
                <div className="DayTargetTaskdiv">
                    {!update && <h4 className="DayTargetTask">{ShowData(new Date(newDayTarget))}</h4>} {/*ShowData(prop.daytarget)*/}
                    {update && <input type="date" onChange={handleDayTarget} className="InputDayTarget"></input>}
                </div>
                {!update && <button className="ButtonSetting" onClick={handleSettings}><img src={imgSettings} className="ImageSetting"/></button>}
                {update && <button className="ButtonSuccess" onClick={handleAdd}>ОК</button>}
                <button className="ButtonDelete" onClick={handleDelete}><img src={imgDelete} className="ImageDelete"/></button>
            </div>
        </div>
    )
}

export default TitleTask;