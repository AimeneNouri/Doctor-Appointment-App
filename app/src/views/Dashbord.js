import React, { Component } from "react";
import CalendarComponent from '../components/Calendar'

class Dashbord extends Component{

  state = {
    modal: false,
    event: {
      title: "",
      start: new Date()
    }
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleEventClick = ({ event, el }) => {
    this.toggle();
    this.setState({ event });
  };

  render(){
    return (
      <div className="content">
        <div className="col">
          <div className="row">
            <div className="col mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="e-profile">
                      <CalendarComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashbord;
