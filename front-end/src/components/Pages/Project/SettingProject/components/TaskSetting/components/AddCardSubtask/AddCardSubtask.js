import React, { useEffect, useState } from "react";
import "./AddCardSubtask.css";
import axios from "axios";
import { useCrutch } from "../../../../../../../store/store";

const AddCardSubtask = ({prop}) => {
    const [res, setRes] = useState(null);
    const [newName,setNewName] = useState();
    const togleCrutch = useCrutch(state => state.togleCrutch);
    const handleName = (e) => {
        setNewName(e.target.value);
    }

    const putSubtask = async () => {
        try {
            const result = await axios.post('http://localhost:3001/api/subtask',{name: newName, state: false, id_task: prop.prop.id});
            setRes(result.data);
        } catch (error) {
            console.error('Ошибка получения данных:', error);
        } 
    }

    const handleAddSub = () => {
        if (newName) {
            putSubtask();
        }
    }

    const handleRepeal = () => {
        prop.setTarg(false);
    }

    useEffect(() => {
        if(!!res){
        prop.subtasks.push({id: res.id,name: newName, state: false, id_task: prop.prop.id})
        togleCrutch();
        prop.setTarg(false);
        }
    }, [res]);

    return(
        <div className="cardSub">
            <input className="insertName" onChange={handleName}></input>
            <button className="buttonAddSub" onClick={handleAddSub}>ОК</button>
            <button className="buttonRepeal" onClick={handleRepeal}>ОТМЕНА</button>
        </div>
    )

}

export default AddCardSubtask;