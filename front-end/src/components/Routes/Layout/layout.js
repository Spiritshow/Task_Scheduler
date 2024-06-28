import React from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <div>
            <Header/>
            <Sidebar/>
            <Outlet/>
        </div>
    )
}

export default Layout;