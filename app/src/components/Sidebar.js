import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="logo">
            <Link to='/' className="simple-text">
              Doctor &nbsp; Appoinment
            </Link>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to='/'>
                <i className="nc-icon nc-chart-pie-35"></i>
                <p>Acceuil</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/profile'>
                <i className="nc-icon nc-circle-09"></i>
                <p>Profil Utilisateur</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/historique'>
                <i className="nc-icon nc-circle-09"></i>
                <p>Mes réservations</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar