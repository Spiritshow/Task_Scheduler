import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../../store/store";
import "./authorization.css";
axios.defaults.withCredentials = true
const Authorization = () => {
    const setData = useUser(state => state.addData);
    const data = useUser(state => state.data);
    const navigate = useNavigate();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        setLogin(e.target.value);
    }

    const recordUser = async () => {
        const result = await axios.get("http://localhost:3001/api/user").then(res => {
            return setData({name: res.data[0].username, image: res.data[0].img})});

    }

    useEffect(() => {
        console.log(document.cookie.indexOf("id_user") === 0);
        if (document.cookie.indexOf("id_user") === 0) {
            recordUser();
            navigate("/app/");    
        }
    },[])

    const handleEnter = () => {
        const fetchData = async () => {
            try {
              const response = await axios.post('http://localhost:3001/api/authentication',{login: login, password: password});
              console.log(response.data);
              if(response.data){
                navigate("/app/",response.data);
              }

            } catch (error) {
              console.error('Ошибка получения данных:', error);
            }
          };
      
          fetchData();
    }

    const handleRegister = () => {
        navigate("/Register");
    }

    return(
        <div className="auth">
            <div className="boxAuth">
                <h4>Login:</h4>
                <input className="login" onChange={handleLogin}></input>
                <h4>Password:</h4>
                <input className="password" onChange={handlePassword}></input>
                <button className="buttonEnter" onClick={handleEnter}>Войти</button>
                <button className="buttonRegister" onClick={handleRegister}>Зарегистрироваться</button>
            </div>
        </div>
    )
}

export default Authorization;