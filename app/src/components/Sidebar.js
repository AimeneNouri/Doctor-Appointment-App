import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : "sidebar"} id="sidebar">
      <div className="sidebar-wrapper">
        <div className="logo">
          <Link to='/' className="simple-text">
            Doctor &nbsp; Appointment
          </Link>
        </div>
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link" to='/home'>
              <i class="fas fa-chart-pie"></i>
              <p>Acceuil</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/profile'>
              <i className="fas fa-user-alt"></i>
              <p>Profil Utilisateur</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/appointment-lists'>
              <i className="fas fa-ticket-alt"></i>
              <p>Mes réservations</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar