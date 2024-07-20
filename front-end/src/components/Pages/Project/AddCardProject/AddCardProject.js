import React, { useEffect, useState } from "react";
import "./AddCardProject.css"
import axios from "axios";

const AddCardProject = ({prop}) => {

    const [res, setRes] = useState(null);
    const [name,setName] = useState("");
    const [newDeadline,setNewDeadline] = useState("");
    const handleInputProject = (e) => {
        setName(e.target.value);
    }

    const handleDeadline = (e) => {
        setNewDeadline(e.target.value);
    }

    const insertProject = async () => {
        try {
            const result = await axios.post('http://localhost:3001/api/project',{name: name, deadline: newDeadline, state: "green"});
            setRes(result.data);
        } catch (error) {
            console.error('Ошибка получения данных:', error);
        } 
    }

    const handleInsertTask = () => {
        if(name){
            insertProject();
        }
    }

    const handleRepeal = () => {
        prop.setTarg(false);
    }

    useEffect(() => {
        if(!!res){
        console.log(res.id);
        prop.projects.push({id: res.id, name: name, daycreate: res.daycreate, deadline: newDeadline, state: "green"})
        prop.setTarg(false);
        }
    }, [res]);

    const ShowData = (data) => {
        return(data.getDate() + "." + data.getMonth() + "." + data.getFullYear())
    }

    return (
        <div className="AddCardProject">
            <input className="inputNewProject" onChange={handleInputProject}></input>
            <h4 className="NewDayCreate">{ShowData(new Date())}</h4>
            <input type="date" className="inputNewDeadline" onChange={handleDeadline}></input>
            <button className="buttonInsertProject" onClick={handleInsertTask}>ОК</button>
            <button className="buttonRepeal" onClick={handleRepeal}>ОТМЕНА</button>
        </div>
    )
}

export default AddCardProject;