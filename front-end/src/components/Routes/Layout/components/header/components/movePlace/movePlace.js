import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./movePlace.css";

const MovePlace = () => {

    const navigate = useNavigate();
    const [classToday,setClassToday] = useState('buttonTodayClick')
    const [classProject,setClassProject] = useState('buttonProject')
    const [classCalendar,setClassCalendar] = useState('buttonCalendar')

    const nameUser = window.location.pathname.split("/")[1];

    const LinkToday = () => {
        navigate(`/`);
        setClassToday("buttonTodayClick");
        setClassProject("buttonProject");
        setClassCalendar("buttonCalendar");
    };

    const LinkProject = () => {
        navigate(`/Project`);
        setClassToday("buttonToday");
        setClassProject("buttonProjectClick");
        setClassCalendar("buttonCalendar");
    };

    const LincCalendar = () => {
        navigate(`/Calendar`);
        setClassToday("buttonToday");
        setClassProject("buttonProject");
        setClassCalendar("buttonCalendarClick");
    };



    return (
    <dir className="movePlace">
        <button className={classToday} onClick={LinkToday}>Сегодня</button>
        <button className={classProject} onClick={LinkProject}>Проекты</button>
        <button className={classCalendar} onClick={LincCalendar}>Календарь</button>
    </dir>
    );
}

export default MovePlace;