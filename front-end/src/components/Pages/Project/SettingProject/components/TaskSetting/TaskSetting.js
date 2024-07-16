import React, { useEffect, useState } from "react";
import TitleTask from "./components/TitleTask/Titletask";
import CardSubtask from "./components/CardSubtask/CardSabtask";
import "./TaskSetting.css";
import axios from "axios";
import { useCrutch, useCrutch2 } from "../../../../../store/store";
import AddCardSubtask from "./components/AddCardSubtask/AddCardSubtask";
axios.defaults.withCredentials = true;

const TaskSetting = ({prop}) => {
    const [targ, setTarg] = useState(false);
    const crutch = useCrutch(state => state.data);
    const togleCrutch2 = useCrutch2(state => state.togleCrutch);
    const [subtasks, setSubtasks] = useState();
    const showSubtask = async () => {
        try {
        const response = await axios.get(`http://localhost:3001/api/subtask?search=${prop.id}`);
        //console.log(response.data);
        setSubtasks(response.data);
        }catch(error) {
            console.error('Ошибка получения данных:', error);
        }
        togleCrutch2();
    }

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
    },[crutch])

    useEffect(() => {
        if(!!subtasks)
        prop.state = DefinitionStatus(subtasks);
        updateTask(prop.state);
        togleCrutch2();
    },[crutch])

    const DefinitionStatus = (subtasks) => {
        if (subtasks){
        const allTrue = subtasks.every(subtask => subtask.state === true);
        return allTrue ? "green" : "yellow";}
    }

    const handleAddSubtask = () => {
        setTarg(true);
    }

    const ListSubtask = (subtasks) => {
        if(!!subtasks){
            return(subtasks.map(subtask => (
                <CardSubtask prop={subtask}/>
        )))
        }else{
            return(<h4>Загрузка...</h4>)
        }
    }

    return(
        <div className="TaskSettingdiv">
            <div className="TaskSetting">
                <TitleTask prop={prop}/>
                <div className="Listdiv">
                    {ListSubtask(subtasks)}
                    {!targ && <button className="buttonAddSubtask" onClick={handleAddSubtask}>Добавить подзадачу</button>}
                    {targ && <AddCardSubtask prop={{prop,setTarg,subtasks}}/>}
                </div>
                
            </div>
        </div>
    )
}

export default TaskSetting;