import React, { useEffect, useState } from "react";
import "./CardSubtask.css"
import imgDelete from "../../../img/Delete.png"

const CardSubtask = ({prop}) => {
    
    const [nameSubtask, setNameSubtask] = useState();
    const [isChecked, setIsChecked] = useState();
    const [statusSubtask,setStatusSubtask] = useState("Не выполнено");

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        prop.statusSubtask = event.target.checked;
        //смена статуса подзадачи на сервере
        //проверка если все зд выполнены то смена статуса задачи
    };

    const handleDelete = () => {
        
    }

    const getStatus = (status) => {
        return(status ? setStatusSubtask("Выполнено") : setStatusSubtask("Не выполнено"));
    };

    useEffect(() =>{
        //прописать приём данных {название подзадачи},{статус подзачи}
        //setNameSubtask({название подзадачи});
        setNameSubtask(prop.nameSubtask);
        //setIsChecked({статус подзадачи});
        setIsChecked(prop.statusSubtask);
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
            <button className="ButtonDeleteSubtask" onClick={handleDelete}><img src={imgDelete} className="ImageDeleteSubtask"/></button>
            {/* <div class="roundedTwo">
                <input type="checkbox" value="None" id="roundedTwo" name="check" checked />
            </div> */}
        </div>
    )
}

export default CardSubtask;