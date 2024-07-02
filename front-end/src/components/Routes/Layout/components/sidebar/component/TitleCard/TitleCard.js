import React, { useState } from "react";
import "./TitleCard.css";
import imgFold from "../img/Fold (1).png"
import TaskCard from "../TaskCard/TaskCard";

const TitleCard = (prop) => {

    const [targ, setTarg] = useState(false);

    const handleFold = () => {
        if (targ) 
            setTarg(false);
        else 
            setTarg(true);
    }

    const listSubtask = (tasks) => {
        if(!!tasks)
        return(tasks.map(task =>(
            <TaskCard prop={task}/>)))
        else 
        return(<h4>Загрузка...</h4>)
    }

    return(
        <div className="ComponentCardSB">
            <div className="TitleProgectCardSB">
                <div className="NameProjectCardSBdiv">
                    <h3 className="NameProjectCardSB">{prop.prop.nameProject}</h3>
                </div>
                <div className="ComponentButtonCardSB">
                    <button className="ButtonFoldCardSB" onClick={handleFold}><img className="ImgFoldCardSB" src={imgFold} alt=""/></button>
                </div>
            </div>

            {targ && <div className="listTaskCardSB">
                    {listSubtask(prop.prop.Tasks)}
                </div>
            }
        </div>
    )
}

export default TitleCard;