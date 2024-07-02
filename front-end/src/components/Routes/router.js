import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Today from '../Pages/Today/Today';
import Layout from './Layout/layout';
import Project from '../Pages/Project/Project';

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route path='/' element={<MainPages/>}/>            Возможно надо вынести за пределы Layout */}
                {/* <Route path='/Sign_up' element={<Sign_up/>}/>       Возможно надо вынести за пределы Layout */}
                <Route path='/' element={<Layout/>}>        
                    <Route path='/' element={<Today/>}/>
                    <Route path='/Project' element={<Project/>}/>
                    {/* <Route path='/:nameUser/Project/:name' element={<Project/>}/> */}
                    {/* <Route path='/:nameUser/Calendar' element={<Calendar/>}/> */}

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;