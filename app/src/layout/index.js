import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Main from "./Main";
import '../assets/css/bootstrap.min.css';
import '../assets/css/light-bootstrap-dashboard.css';
import '../assets/css/dashboard.css';

const Index = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    const closeSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <div className="wrapper">
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
            <Main/>
        </div>
    )
}

export default Index
