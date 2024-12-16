import React, { useEffect, useState } from "react";
import "./CardSubtask.css"
import imgDelete from "../../../img/Delete.png"
import axios from "axios";
import { useCrutch } from "../../../../../../../store/store";

const CardSubtask = ({prop}) => {
    
    const [name, setName] = useState();
    const [isChecked, setIsChecked] = useState();
    const [state,setState] = useState("Не выполнено");
    const togleCrutch = useCrutch(state => state.togleCrutch);

    const updateSubtask = async (state) => {
        try 
        {
            const response = await axios.put(`http://localhost:3001/api/subtask`,{id: prop.id, name: prop.name,state: state, id_task: prop.id_task});
            console.log(response.data);
        }catch(error) {
            console.error('Ошибка получения данных:', error);
        }
    }

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        prop.state = event.target.checked;
        updateSubtask(event.target.checked);
        togleCrutch();
    };
    const handleDelete = async () => {
        if(prop.id){
            try {
                await axios.delete(`http://localhost:3001/api/subtask?search=${prop.id}`)
            } catch (error) {
                console.error('Ошибка получения данных:', error);
            }
            togleCrutch();
        }
    }

    const getStatus = (status) => {
        return(status ? setState("Выполнено") : setState("Не выполнено"));
    };

    useEffect(() =>{
        //прописать приём данных {название подзадачи},{статус подзачи}
        //setNameSubtask({название подзадачи});
        setName(prop.name);
        //setIsChecked({статус подзадачи});
        setIsChecked(prop.state);
        //getStatus({статус подзадачи});

    },[])

    useEffect(() => {
        getStatus(isChecked);
    },[isChecked])

    return(
        <div className="ComponentSubtask">
            <div className="nameSubtaskdiv">
                <h4 className="nameSubtask">{name}</h4>
            </div>
            <div className="statusSubtaskdiv">
                <h5 className="statusSubtask">{state}</h5>
            </div>
            <input type="checkbox" className="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
            <button className="ButtonDeleteSubtask" onClick={handleDelete}><img src={imgDelete} className="ImageDeleteSubtask"/></button>
            {/* <div class="roundedTwo">
                <input type="checkbox" value="None" id="roundedTwo" name="check" checked />
            </div> */}
        </div>
    )
}

export default CardSubtask;