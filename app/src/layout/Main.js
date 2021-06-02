import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../views/Dashbord'
import UserProfile from '../views/UserProfile'
import AppointmentLists from '../views/AppointmentLists'

class Main extends Component {
  render() {
    return (
      <div className="main-panel">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/appointment-lists" component={AppointmentLists} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main