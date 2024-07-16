import React, { useEffect, useState } from "react";
import { useCrutch, useCrutch2, useData } from "../../store/store";
import TitlePageProject from "./components/TitlePage/TitlePage";
import TitleTableProject from "./components/TitleTable/TitleTable";
import TitleProject from "./components/CardProject/component/TitleProject/TitleProject";
import "./Project.css";
import axios from "axios";
axios.defaults.withCredentials = true;

const Project = () => {
    // const projects = useData((state) => state.data);

    const [projects, setProject] = useState();
    const crutch2 = useCrutch2(state => state.data);
    const showProject = async () => {
        try {
        const response = await axios.get('http://localhost:3001/api/project');
        //console.log(response.data);
        setProject(response.data);
        }catch(error) {
            console.error('Ошибка получения данных:', error);
        }
    }

    useEffect(() => {
        showProject();
    }, [crutch2])

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
            <TitlePageProject/>
            <TitleTableProject/>
            {projects && ListProject(projects)}
            </div>
        </div>
    )
}

export default Project;