import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] =useState("");
    const img = "/public";

    const handleName = (e) => {
        setUsername(e.target.value);
    }

    const handleLogin = (e) => {
        setLogin(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSing_up = () => {
        const createUser = async () =>{
            try {
                const response = await axios.post('http://localhost:3001/api/user',{login: login, password: password,username: username, img: img});
                console.log(response.data);
                if(response.data){
                  navigate("/app/",response.data);
                }
  
              } catch (error) {
                console.error('Ошибка получения данных:', error);
              }
        }

        createUser();
    }

    const handleAuth = () => {
        navigate("/");
    }

    return(
        <div className="register">
            <div className="boxRegister">
                <h4>Ваше имя:</h4>
                <input className="name" onChange={handleName}></input>
                <h4>Login:</h4>
                <input className="login" onChange={handleLogin}></input>
                <h4>Password:</h4>
                <input className="password" onChange={handlePassword}></input>
                <button className="buttonEnter" onClick={handleSing_up}>Зарегистрироваться</button>
                <button className="buttonRegister" onClick={handleAuth}>У меня есть учётная запись</button>
            </div>
        </div>
    )
}

export default Register;