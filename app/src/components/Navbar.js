import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'

function Navbar() {
  const { logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    try{
      await logout()
      history.push("/login")
    }catch{
      alert("Failed to log out")
    }
  }

  function handleToggleNav(){
    
  }

  return (
    <nav className="navbar navbar-expand-lg " color-on-scroll="500">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Home</a>
        <button onClick={handleToggleNav} class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-bar burger-lines"></span>
            <span class="navbar-toggler-bar burger-lines"></span>
            <span class="navbar-toggler-bar burger-lines"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navigation">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" onClick={handleLogout}>
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