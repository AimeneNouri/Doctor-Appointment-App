import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../views/Dashbord'
import UserProfile from '../views/UserProfile'

class Main extends Component {
  render() {
    return (
      <div className="main-panel">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/profile" component={UserProfile} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main