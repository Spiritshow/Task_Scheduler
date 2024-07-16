import React, { useEffect, useState } from "react";
import TitlePageSetting from "./components/TitlePageSetting/TitlePageSetting";
import TitleTableSetting from "./components/TItleTableSettings/TitleTableSetting";
import TaskSetting from "./components/TaskSetting/TaskSetting";
import { useCrutch2, useData, useUser } from "../../../store/store";
import "./SettingProject.css"
import { useLocation } from "react-router-dom";
import axios from "axios";
import AddCardtask from "./components/AddCardTask/AddCardTask";
axios.defaults.withCredentials = true;

const SettingProject = () => {

    const location = useLocation();
    const project = location.state;
    
    const [targ, setTarg] = useState(false);
    const crutch2 = useCrutch2(state => state.data);
    const [tasks, setTasks] = useState();
    const showTask = async () => {
        try {
        const response = await axios.get(`http://localhost:3001/api/task?search=${project.id}`);
        //console.log(response.data);
        setTasks(response.data);
        }catch(error) {
            console.error('Ошибка получения данных:', error);
        }
    }

    const updateProject = async(state) => {
        try {
            await axios.put(`http://localhost:3001/api/project`,{id: project.id, name: project.name, daycreate: project.daycreate, deadline: project.deadline, state: state})
        } catch (error) {
            console.error('Ошибка получения данных:', error);
        }
    }

    useEffect(() => {
        showTask();
    }, [crutch2])

    useEffect(() => {
        if (tasks) {
            const state = DefinitionStatus(tasks);
            updateProject(state); 
        }
    },[crutch2])

    const DefinitionStatus = (tasks) => {
        if (tasks){
        const allTrue = tasks.every(task => task.state === "green");
        return allTrue ? "green" : "yellow";}
    }

    const handleAddTask = () => {
        setTarg(true);
    }

    const ListTask = (tasks) => {
        if(tasks){
        return(tasks.map(task => (
            <TaskSetting prop={task}/>
        )))
        }else{
            return(<h4>Загрузка...</h4>)
        }
    }

    return(
        <div className="SettingProjectdiv">
            <div className="SettingProject">
                <TitlePageSetting name={project.name}/>
                <TitleTableSetting/>
                <div className="ListTask">
                    {tasks && ListTask(tasks)}
                </div>
                {!targ && <button className="buttonAddTask" onClick={handleAddTask}>Добавить задачу</button>}
                {targ && <AddCardtask prop={{project,tasks,setTarg}}/>}
            </div>
        </div>
    )
}

export default SettingProject;
