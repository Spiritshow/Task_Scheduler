import React, { useEffect, useState } from "react";
import "./TaskCard.css";

const TaskCard = (prop) => {

    const [status, setStatus] = useState("yellowStatusTask");

    useEffect(() => {
        editStatusTask(prop.prop.statusTask);
    }, [])

    const editStatusTask = (status) => {
        switch (status) {
            case "green":
                setStatus("greenStatusTaskSB");
                break;
            case "red":
                setStatus("redStatusTaskSB");
                break;
            default:
                setStatus("yellowStatusTaskSB");
                break;
        }
    }

    return(
        <div className="TaskCard">
            <div className="nameTaskdiv">
                <h4 className="nameTask">{prop.prop.nameTask}</h4>
            </div>
            <div className={status}></div>
        </div>
    )
}

export default TaskCard;