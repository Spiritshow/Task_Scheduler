import React, { useEffect, useState } from "react";
import Subtask from "../Subtask/SubTask";
import "./Task.css"
import imgFold from "../img/Fold (1).png"
import { useCrutch, useCrutch2, useData } from "../../../../store/store";
import axios from "axios";
import checkAtproject from "./checkAtProject";

const Task = ({prop}) => {
    //console.log(prop);
    const crutch = useCrutch(state => state.data);
    const [status, setStatus] = useState("yellowStatusTask");
    const [targ, setTarg] = useState(false);
    const togleCrutch2 = useCrutch2(state => state.togleCrutch);

    const [subtasks, setSubtasks] = useState();
    const showSubtask = async () => {
        try {
        const response = await axios.get(`http://localhost:3001/api/subtask?search=${prop.id}`);
        setSubtasks(response.data);
        }catch(error) {
            console.error('Ошибка получения данных:', error);
        }
    }
    //showSubtask();

    const updateTask = async (state) => {
        try 
        {
            const response = await axios.put(`http://localhost:3001/api/task`,{id: prop.id, name: prop.name,daycreate: prop.daycreate, daytarget: prop.daytarget, deadline: prop.deadline,state: state, id_project: prop.id_project});
            
        }catch(error) {
                console.error('Ошибка получения данных:', error);
        }
    }

    useEffect(() => {
        showSubtask();
    }, [])

    useEffect(() => {
        if(!!subtasks)
        prop.state = DefinitionStatus(subtasks);
        updateTask(prop.state);
        checkAtproject(prop.id_project);
        editStatusTask(prop.state);
       // togleCrutch2();
        
    },[crutch])

    const handleFold = () => {
        if (targ) 
            setTarg(false);
        else 
            setTarg(true);
        // prop.state = DefinitionStatus(subtasks);
        // console.log(prop.state);
        // editStatusTask(prop.state);
    }

    useEffect(() => {
        editStatusTask(prop.state);
    }, [prop])

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
        if (subtasks){
        const allTrue = subtasks.every(subtask => subtask.state === true);
        return allTrue ? "green" : "yellow";}
    }

    const listSubtask = (subtasks) => {

        if(!!subtasks)
        return(subtasks.map(subtask =>(
            <Subtask prop={subtask}/>)))
        else 
        return(<h4>Загрузка...</h4>)
    }

    const ShowData = (data) => {
        console.log(typeof data);
        return(data.getDate() + "." + data.getMonth() + "." + data.getFullYear())
    }

    return(
        <div className="ComponentTask">
            <div className="TitleTask">
                <button className="ButtonFold" onClick={handleFold}><img src={imgFold} className="ImageFold"/></button>
                <div className="NameTaskdiv">
                    <h4 className="NameTask">{prop.name}</h4>
                </div>
                <div className="DayCreateTaskdiv">
                    <h4 className="DayCreateTask">{ShowData(new Date(prop.daycreate))}</h4> {/**/} 
                </div>
                <div className="Projectdiv">
                    <h4 className="Project">{prop.project_name}</h4>
                </div>
                <div className="Deadlinediv">
                    <h4 className="Deadline">{ShowData(new Date(prop.deadline))}</h4> {/*{prop.deadlineTask}*/}  {/*ShowData(prop.deadline)*/}
                </div>
                <div className={status}></div>
            </div>
            {targ && <div className="SubtaskLisk">
                {listSubtask(subtasks)}
            </div>}
        </div>
    )
}

export default Task;