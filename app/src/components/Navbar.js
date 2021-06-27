import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'
import { database, auth } from "../firebase";

function Navbar({ sidebarOpen, openSidebar }) {
  const { logout } = useAuth()
  const history = useHistory()
  const [name, setName] = useState("")

  async function handleLogout() {
    try{
      await logout()
      history.push("/index")
    }catch{
      alert("Failed to log out")
    }
  }

  const openDropDown = () => {
    const toggleMenu = document.querySelector('.menu')
    toggleMenu.classList.toggle('opened')
  }

  database
    .ref('users/' + auth.currentUser.uid)
    .once("value")
    .then(snapshot => {
        const data = snapshot.val();
        setName(data.nom + " " + data.prenom)
    });

  return (
    <nav className="navbar navbar-expand-lg" color-on-scroll="500">
      <div className="container-fluid">
        <a href="/home" className="navbar-brand"><span style={{color: "#000", opacity: ".7"}}>Welcome</span> <span style={{color: "#9368E9"}}>{ name }</span></a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation"  onClick={() => openSidebar()}>
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navigation">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a onClick={openDropDown} className="profile">
                  <i className="fas fa-settings"></i>
              </a>
              <div className="menu">
                <h3>{ name }</h3>
                <ul>
                    <a href="/profile"><li><i class="fas fa-user" />Profile</li></a>
                    <a href="/admin/editprofile"><li><i class="fas fa-ticket-alt" />Mes réservations</li></a>
                    <a onClick={handleLogout}><li><i class="fas fa-sign-out-alt" />Logout</li></a>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar