import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { database, auth } from "../firebase";
import { Modal, Button, Form } from "react-bootstrap";
import emailjs from 'emailjs-com';
import "../index.css";

class CalendarComponent extends Component {
  
  state = {
    name: "",
    day: "",
    startDate: "T08:00:00+01:00",
    show: false,
    events: [],
    times: [
      {
        id: "1",
        start: "08:00:00",
        end: "08:30:00",
      },
      {
        id: "2",
        start: "08:30:00",
        end: "09:00:00",
      },
      {
        id: "3",
        start: "09:00:00",
        end: "09:30:00",
      },
      {
        id: "4",
        start: "09:30:00",
        end: "10:00:00",
      },
      {
        id: "5",
        start: "10:00:00",
        end: "10:30:00",
      },
      {
        id: "6",
        start: "10:30:00",
        end: "11:00:00",
      },
      {
        id: "7",
        start: "11:00:00",
        end: "11:30:00",
      },
      {
        id: "8",
        start: "11:30:00",
        end: "12:00:00",
      },
      {
        id: "9",
        start: "12:00:00",
        end: "12:30:00",
      },
      {
        id: "10",
        start: "12:30:00",
        end: "13:00:00",
      },
      {
        id: "11",
        start: "13:00:00",
        end: "13:30:00",
      },
      {
        id: "12",
        start: "13:30:00",
        end: "14:00:00",
      },
      {
        id: "13",
        start: "14:00:00",
        end: "14:30:00",
      },
      {
        id: "14",
        start: "14:30:00",
        end: "15:00:00",
      },
      {
        id: "15",
        start: "15:00:00",
        end: "15:30:00",
      },
      {
        id: "16",
        start: "15:30:00",
        end: "16:00:00",
      },
    ],
  };

  componentDidMount() {
    const dbRef = database.ref('appointments/');
    const post = dbRef.orderByKey();
    const events = [];
    post.once("value", snap => {
        snap.forEach(child => {
            events.push(child.val());
        })
        this.setState({events:events});
        console.log(this.state.events)
    })
    //this.renderEventContent();
  }

  handleEventRemove = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete this appointment`)) {
      clickInfo.event.remove();
    }
  };

  handleEventInfo = (e) => {
    alert("Name of Client: " + e.event.title);
  };

  renderEventContent = (e) => {
    return (
      <div>
       
          <b> { e.event.title } </b>
        
      </div>
    );
  };

  addAppointment = () => {
    this.setState({
        show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  submitEvent = (e) => {
    //stock appointement
    const isExist = this.state.events.find((event)=>event.start === this.state.day+""+this.state.startDate);
    if(isExist){
      //Show alert message
      alert("Already taken");

    }else{
      database
      .ref("appointments/")
      .push({
        "title": this.state.name,
        "start": this.state.day+""+this.state.startDate,
        "uid": auth.currentUser.uid,
      }).then(()=>{
        const events=[];
         Object.assign(events,this.state.events);
         events.push({start:this.state.day+""+this.state.startDate,title:this.state.name,uid:auth.currentUser.uid});
         this.setState({events:events});
         alert("Appointment saved")
      })
      .catch(function (error) {
        console.log(error.message);
        console.log(error.code);
      });

      //stock history appointement
      database
      .ref("appointments-lists/" + auth.currentUser.uid)
      .push({
        "name": this.state.name,
        "start_Date": this.state.startDate,
        "day": this.state.day,
      })
      .catch(function (error) {
        console.log(error.message);
        console.log(error.code);
      });

      //send mail to doctor
      emailjs
        .sendForm('gmail', 'template', e.target, 'user_ZfMOqTgjCdALX7916gbj2')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    this.handleClose();
    return false;
  };

  render() {
    return (
      <div className="col">
        <div className="row">
          <div className="col mb-3">
            <div className="card">
              <div className="card-body">
                <Button
                  onClick={this.addAppointment}
                  style={{ float: "right", marginLeft: "10px" }}
                >
                  Make Appointment
                </Button>
                <div className="e-profile">
                  <FullCalendar
                    headerToolbar={{
                      left: "prev,next today",
                      center: "title",
                      right: "",
                    }}
                    plugins={[timeGridPlugin, interactionPlugin]}
                    initialView="timeGridWeek"
                    themeSystem="bootstrap"
                    allDaySlot={false}
                    weekends={false}
                    slotMinTime="08:00:00"
                    slotMaxTime="16:00:00"
                    height="auto"
                    eventContent={this.renderEventContent}
                    eventBackgroundColor="#9368E9"
                    eventClick={this.handleEventInfo}
                    events={this.state.events}
                  />

                  <Modal
                    className="modal"
                    show={this.state.show}
                    onHide={this.handleClose}
                    animation={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title className="font-weight-bold">
                        Make Appointment
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="col mb-4">
                        <div className="card">
                          <div className="card-body">
                            <Form onSubmit={this.submitEvent}>
                              <Form.Group>
                                <Form.Label>full name</Form.Label>
                                <Form.Control
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter your name"
                                  onChange={(e) => {
                                    const nom = e.target.value;
                                    this.setState({
                                      name: nom,
                                    });
                                  }}
                                  name="name"
                                  required
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Label>date</Form.Label>
                                <Form.Control
                                  type="date"
                                  name="SelectedDate"
                                  placeholder="Choose a date"
                                  onChange={(e) => {
                                    const dayS = e.target.value;
                                    this.setState({
                                      day: dayS,
                                    });
                                  }}
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Label>available time</Form.Label>
                                <Form.Control
                                  as="select"
                                  name="time"
                                  onChange={(e) => {
                                    const startD = "T" + e.target.value + "+01:00";
                                    const sDate =  startD;
                                    this.setState({
                                      startDate: sDate,
                                    });
                                  }}
                                >
                                  <option value disabled>
                                    Choose an available time
                                  </option>
                                  {this.state.times.map((time) => (
                                    <option key={time.id} value={time.start}>
                                      from {time.start}
                                    </option>
                                  ))}
                                </Form.Control>
                              </Form.Group>
                              <Button variant="primary" type="submit" block>
                                Save
                              </Button>
                            </Form>
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalendarComponent;
