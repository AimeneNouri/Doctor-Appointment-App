import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import Main from "./Main";
import '../assets/css/bootstrap.min.css';
import '../assets/css/light-bootstrap-dashboard.css';
import '../assets/css/dashboard.css';

export class index extends Component {
    render() {
        return (
            <div className="wrapper">
                <Sidebar />
                <Main/>
            </div>
        )
    }
}

export default index
