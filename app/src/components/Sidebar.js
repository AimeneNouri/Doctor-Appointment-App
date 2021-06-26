import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : "sidebar"} id="sidebar">
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
            <NavLink className="nav-link" to='/appointment-lists'>
              <i className="nc-icon nc-circle-09"></i>
              <p>Mes réservations</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar