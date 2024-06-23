import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPages/>}/>            {/*Возможно надо вынести за пределы Layout*/}
                <Route path='/Sign_up' element={<Sign_up/>}/>       {/*Возможно надо вынести за пределы Layout*/}
                <Route path='/:nameUser' element={<Layout/>}>        
                    <Route path='/:nameUser/Today' element={<Today/>}/>
                    <Route path='/:nameUser/Project' element={<Project/>}/>
                    <Route path='/:nameUser/Project/:name' element={<Project/>}/>
                    <Route path='/:nameUser/Calendar' element={<Calendar/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;