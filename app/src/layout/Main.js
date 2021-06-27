import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../views/Dashbord'
import UserProfile from '../views/UserProfile'
import AppointmentLists from '../views/AppointmentLists'

const Main = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
      setSidebarOpen(!sidebarOpen);
  }

  return (
    <div className="main-panel">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <Switch>
        <Route exact path="/home" component={Dashboard} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/appointment-lists" component={AppointmentLists} />
      </Switch>
      <Footer />
    </div>
  )
}

export default Main