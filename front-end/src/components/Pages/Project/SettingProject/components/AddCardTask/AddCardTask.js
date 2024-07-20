import React, { useEffect, useState } from "react";
import "./AddCardTask.css";
import axios from "axios";

const AddCardtask = ({prop}) => {

    const [res, setRes] = useState(null);
    const [name,setName] = useState("");
    const [newDayCreate,setNewDayCreate] = useState("");
    const [newDayTarget,setNewDayTarget] = useState("");
    const [newDeadline,setNewDeadline] = useState("");
    const handleInputTask = (e) => {
        setName(e.target.value);
    }

    const handleDayCreate = (e) => {
        setNewDayCreate(e.target.value);
    }

    const handleDayTarget = (e) => {
        setNewDayTarget(e.target.value);
    }

    const handleDeadline = (e) => {
        setNewDeadline(e.target.value);
    }

    const putTask = async () => {
        try {
            const result = await axios.post('http://localhost:3001/api/task',{name: name, daycreate: newDayCreate, daytarget: newDayTarget, deadline: newDeadline, state: "green", id_project: prop.project.id});
            setRes(result.data);
        } catch (error) {
            console.error('Ошибка получения данных:', error);
        } 
    }

    const handleInsertTask = () => {
        if(name){
            putTask();
        }
    }

    const handleRepeal = () => {
        prop.setTarg(false);
    }

    useEffect(() => {
        if(!!res){
        console.log(res.id);
        prop.tasks.push({id: res.id, name: name,daytarget: newDayTarget, deadline: newDeadline, state: "green", id_project: prop.project.id})
        prop.setTarg(false);
        }
    }, [res]);

    const ShowData = (data) => {
        return(data.getDate() + "." + data.getMonth() + "." + data.getFullYear())
    }

    return (
        <div className="AddCardTask">
            <input className="inputNewTask" onChange={handleInputTask}></input>
            {/* <input className="inputNewDayCreate" onChange={handleDayCreate}></input> */}
            <h4 className="NewDayCreate">{ShowData(new Date())}</h4>
            <input type="date" className="inputNewDayTarget" onChange={handleDayTarget}></input>
            <input type="date" className="inputNewDeadline" onChange={handleDeadline}></input>
            <button className="buttonInsertTask" onClick={handleInsertTask}>ОК</button>
            <button className="buttonRepealTask" onClick={handleRepeal}>ОТМЕНА</button>
        </div>
    )
}

export default AddCardtask;