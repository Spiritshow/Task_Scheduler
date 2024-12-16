import React from "react";
import TitleCard from "./TitleCard/TitleCard";

const CardProject = (prop) => {

    const listProject = (projects) => {
        console.log(projects);
        if(!!projects)
        return(projects.map(project =>(
            <TitleCard prop={project}/>)))
        else 
        return(<h4>Загрузка...</h4>)
    }

    return(
        <div className="listProject">
            {listProject(prop.prop)}
        </div>
    )
}

export default CardProject;