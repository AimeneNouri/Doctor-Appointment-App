import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'
import { database, auth } from "../firebase";

function Navbar() {
  const { logout } = useAuth()
  const history = useHistory()
  const [name, setName] = useState("")

  async function handleLogout() {
    try{
      await logout()
      history.push("/login")
    }catch{
      alert("Failed to log out")
    }
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
        <a className="navbar-brand"><span style={{color: "#000", opacity: ".7"}}>Welcome</span> <span style={{color: "#9368E9"}}>{ name }</span></a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navigation">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" onClick={handleLogout} style={{color: "#5e656d", cursor: "pointer"}}>
                <span className="no-icon">Log out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar