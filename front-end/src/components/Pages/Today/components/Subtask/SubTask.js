import React, { useEffect, useState } from "react";
import "./SubTask.css"
import axios from "axios";
import { useCrutch } from "../../../../store/store";

const Subtask = ({prop}) => {
    
    const [nameSubtask, setNameSubtask] = useState();
    const [isChecked, setIsChecked] = useState();
    const [statusSubtask,setStatusSubtask] = useState("Не выполнено");
    const togleCrutch = useCrutch(state => state.togleCrutch);

    const updateSubtask = async (state) => {
        try 
        {
            const response = await axios.put(`http://localhost:3001/api/subtask`,{id: prop.id, name: prop.name,state: state, id_task: prop.id_task});
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

    const getStatus = (status) => {
        return(status ? setStatusSubtask("Выполнено") : setStatusSubtask("Не выполнено"));
    };

    useEffect(() =>{
        //прописать приём данных {название подзадачи},{статус подзачи}
        //setNameSubtask({название подзадачи});
        setNameSubtask(prop.name);
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
                <h4 className="nameSubtask">{nameSubtask}</h4>
            </div>
            <div className="statusSubtaskdiv">
                <h5 className="statusSubtask">{statusSubtask}</h5>
            </div>
            <input type="checkbox" className="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
            {/* <div class="roundedTwo">
                <input type="checkbox" value="None" id="roundedTwo" name="check" checked />
            </div> */}
        </div>
    )
}

export default Subtask;