import React, { Component } from 'react'
import FullCalendar, { sliceEvents } from '@fullcalendar/react'
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { database, auth } from "../firebase";
import { Modal, Button,  } from 'react-bootstrap'

class CalendarComponent extends Component {

    state = {
        name:"",
        startDate: "",
        endDate: ""
    }

    handleEventClick = (event) => {
        this.setState({
            startDate: event.startStr,
            endDate: event.endStr
        })
    };

    componentDidMount(){
        database
        .ref('users/' + auth.currentUser.uid)
        .once("value")
        .then(snapshot => {
            const name = snapshot.val().nom +" " + snapshot.val().prenom;
            this.setState({
                name: name
            })
        });
    }

    render() {
        function renderEventContent(eventInfo) {
            return (
              <div>
                <b>{eventInfo.timeText}</b> {eventInfo.event.title}
              </div>
            )
        }

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
                    eventContent={renderEventContent}
                    events={[
                        { title: this.state.name, date: this.state.startDate }
                    ]}
                />
            </div>
        )
    }
}

export default CalendarComponent
