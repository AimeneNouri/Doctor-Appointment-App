import React, { Component } from 'react'
import FullCalendar, { sliceEvents } from '@fullcalendar/react'
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { database, auth } from "../firebase";
import { Modal, Button,  } from 'react-bootstrap'

class CalendarComponent extends Component {

    handleEventClick = ({ event, el }) => {
    this.toggle();
    this.setState({ event });
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
                    eventClick={this.handleEventClick}
                    editable={true}
                    selectable={true}
                    events={[
                    { title: "event 1", date: "2021-06-01" },
                    { title: "event 2", date: "2021-06-02" }
                    ]}
                />
            </div>
        )
    }
}

export default CalendarComponent
