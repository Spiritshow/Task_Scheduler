import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Today from '../Pages/Today/Today';
import Layout from './Layout/layout';
import Project from '../Pages/Project/Project';
import SettingProject from '../Pages/Project/SettingProject/SettingProject';
import Authorization from '../Pages/authorization/authorization';
import Register from '../Pages/Register/Register';

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Authorization/>}/>          {/*Возможно надо вынести за пределы Layout*/}
                <Route path='/Register' element={<Register/>}/>       {/*Возможно надо вынести за пределы Layout */}
                <Route path='/app/' element={<Layout/>}>        
                    <Route path='/app/' element={<Today/>}/>
                    <Route path='/app/Project' element={<Project/>}/>
                    <Route path='/app/Settings/:nameProject' element={<SettingProject/>}/>
                    {/* <Route path='/:nameUser/Calendar' element={<Calendar/>}/> */}

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;