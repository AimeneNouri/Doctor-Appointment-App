import React, { Component } from 'react'
import FullCalendar, { sliceEvents } from '@fullcalendar/react'
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { database, auth } from "../firebase";
import { Modal, Button,  } from 'react-bootstrap'

class CalendarComponent extends Component {

    state = {
        startDate: "",
        endDate: ""
    }

    handleEventClick = (event) => {
        alert('selected ' + event.startStr + ' to ' + event.endStr);
        
    };

    render() {
        return (
            <div>
                <FullCalendar
                    plugins={[ timeGridPlugin, interactionPlugin ]}
                    initialView="timeGridWeek"
                    themeSystem="bootstrap"
                    allDaySlot={false}
                    weekends={false}
                    slotMinTime="08:00:00"
                    slotMaxTime="16:00:00"
                    height="auto"
                    select={this.handleEventClick}
                    selectable={true}
                    header={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                />
            </div>
        )
    }
}

export default CalendarComponent
