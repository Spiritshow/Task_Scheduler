import React, { useEffect, useState } from "react";
import { useCrutch, useCrutch2, useData } from "../../store/store";
import TitlePageProject from "./components/TitlePage/TitlePage";
import TitleTableProject from "./components/TitleTable/TitleTable";
import TitleProject from "./components/CardProject/component/TitleProject/TitleProject";
import "./Project.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import AddCardProject from "./AddCardProject/AddCardProject";
axios.defaults.withCredentials = true;

const Project = () => {
    // const projects = useData((state) => state.data);

    const location = useLocation();
    const target = location.state;
    const [targ, setTarg] = useState(false);

    const [filter, setFilter] = useState('all');
    const [projects, setProject] = useState([]);
    const crutch2 = useCrutch2(state => state.data);
    const showProject = async () => {
        try {
        const response = await axios.get(`http://localhost:3001/api/project?search=${filter}`);
        //console.log(response.data);
        setProject(response.data);
        }catch(error) {
            console.error('Ошибка получения данных:', error);
        }
    }

    useEffect(() => {
        showProject();
        setTarg(target);
    }, [crutch2,target,filter])

    const ListProject = (projects) => {
        if(projects){
        return (projects.map(project => (
            <TitleProject prop={project}/>
        )))
        }else{
            return(<h4>Загрузка...</h4>)
        }
    }

    return(
        <div className="ProjectPagediv">
            <div className="ProjectPage">
            <TitlePageProject prop={setFilter}/>
            <TitleTableProject/>
            {projects && ListProject(projects)}
            {targ && <AddCardProject prop={{projects,setTarg}}/>}
            </div>
        </div>
    )
}

export default Project;