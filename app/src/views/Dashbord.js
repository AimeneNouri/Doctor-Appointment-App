import React, { Component } from "react";
import FullCalendar, { sliceEvents } from '@fullcalendar/react'
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { database, auth } from "../firebase";

class Dashbord extends Component{

  handleDateClick = (arg) => {
    alert(arg.dateStr)
  }

  render(){
    return (
      <div className="content">
        <div className="col">
          <div className="row">
            <div className="col mb-3">
              <div className="card">
                  <div className="card-body">
                    <div className="e-profile">
                        <FullCalendar
                          plugins={[ timeGridPlugin, interactionPlugin ]}
                          initialView="timeGridWeek"
                          allDaySlot={false}
                          weekends={false}
                          slotMinTime="08:00:00"
                          slotMaxTime="16:00:00"
                          height="auto"
                          dateClick={this.handleDateClick}
                        />
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
