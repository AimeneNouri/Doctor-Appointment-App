import React, { Component } from "react";
import CalendarComponent from '../components/Calendar'

class Dashbord extends Component{
  render(){
    return (
      <div className="content">
        <CalendarComponent  />
      </div>
    );
  }
}

export default Dashbord;
