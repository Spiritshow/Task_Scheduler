import React, { useEffect, useState } from "react";
import "./Today.css";
import TitlePage from "./components/TitlePage/TitlePage";
import TitleTable from "./components/TitleTable/TitleTable";
import Task from "./components/Task/Task";
import { useCrutch2, useData, useUser } from "../../store/store";
import axios from "axios";
axios.defaults.withCredentials = true;
const Today = () => {

    // let prop1 = {
    //     name: "Название подзадачи 1",
    //     status: true
    // }
    // let prop2 = {
    //     name: "Название подзадачи 2",
    //     status: true
    // }
    // let prop3 = {
    //     name: "Название подзадачи 3",
    //     status: true
    // }
    
    // let prop = {
    //     name: "Кукурузка",
    //     dayCreate: "26.06.2024",
    //     project: "Овощи",
    //     deadline: "30.06.2024",
    //     status: "yellow",
    //     subtasks: [prop1, prop2, prop3]
    // }
    
    // let prop21 = {
    //     name: "Название подзадачи 1",
    //     status: true
    // }
    // let prop22 = {
    //     name: "Название подзадачи 2",
    //     status: true
    // }
    // let prop23 = {
    //     name: "Название подзадачи 3",
    //     status: false
    // }
    
    // let _prop = {
    //     name: "Морковка фри",
    //     dayCreate: "20.05.2024",
    //     project: "Овощи",
    //     deadline: "01.06.2024",
    //     status: "yellow",
    //     subtasks: [prop21, prop22, prop23]
    // }
      
    // const props = [prop, _prop];

    const crutch2 = useCrutch2(state => state.data);

    const [tasksToday, setTasksToday] = useState();
    const showTask = async () => {
        try {
        const response = await axios.get('http://localhost:3001/api/taskAtProject');
        //console.log(response.data);
        setTasksToday(response.data);
        }catch(error) {
            console.error('Ошибка получения данных:', error);
        }
    }

    useEffect(() => {
        showTask();
    }, [crutch2])

    const listTaskToday = (tasksToday) => {
        if(!!tasksToday)
            return tasksToday.map(task => (
                <Task prop={task} />
            ));
        else{
            return (<h4>Загрузка...</h4>)
        }
    }
    // console.log("test");
    // console.log(tasksToday);

    return(
        <div className="Todaydiv">
            <div className="Today">
            <TitlePage/>
            <TitleTable/>
            {tasksToday && listTaskToday(tasksToday)}
            {/* <Task prop={prop}/> */}
            </div>
        </div>
    )
}

export default Today;