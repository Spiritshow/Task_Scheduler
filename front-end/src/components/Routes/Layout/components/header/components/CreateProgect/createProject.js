import React, { useEffect, useRef, useState } from "react";
import "./createProject.css"

const ButtonCreateProject = () => {

    const [targ, setTarg] = useState(false)
    const [sInput, setSInput] = useState(false);
    const inputRef = useRef(null);

    const createProject = () => {
        // нужено сделать обработчик данной функции
    }

    const handleClick = () => {
        setTarg(true);
    }

    const handleBlur = () => {
        setTarg(false);
        setSInput(false);
    }

    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            handleBlur();
            createProject();
        }
    }

    useEffect(() => {
        if(targ && inputRef.current) {
            inputRef.current.focus();
            setTimeout(() => {
                setSInput(true);
              }, 100)
        }
    }, [targ])

    return (
        <dir className="buttonCreateComponent">
            {targ && <input className={sInput ? 'inputNameProject-visible' : 'inputNameProject-hidden'} ref={inputRef} onBlur={handleBlur} onKeyDown={handleKeyDown}></input>}
            {!targ && <button className="createProject" onClick={handleClick}>Создать проект</button>}
        </dir>
    )
} 
export default ButtonCreateProject;