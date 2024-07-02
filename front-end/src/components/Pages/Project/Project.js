import React from "react";
import { useData } from "../../store/store";
import TitlePageProject from "./components/TitlePage/TitlePage";
import TitleTableProject from "./components/TitleTable/TitleTable";
import TitleProject from "./components/CardProject/component/TitleProject/TitleProject";
import "./Project.css";

const Project = () => {
    const projects = useData((state) => state.data);

    const ListProject = (projects) => {
        return (projects.map(project => (
            <TitleProject prop={project}/>
        )))
    }

    return(
        <div className="ProjectPagediv">
            <div className="ProjectPage">
            <TitlePageProject/>
            <TitleTableProject/>
            {ListProject(projects)}
            </div>
        </div>
    )
}

export default Project;