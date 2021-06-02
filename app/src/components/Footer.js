import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <nav>
                        <ul className="footer-menu">
                            <li>
                                <Link to="/">
                                    Acceuil
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile">
                                    Profil
                                </Link>
                            </li>
                            <li>
                                <Link to="/appointment-lists">
                                    Mes réservations
                                </Link>
                            </li>
                        </ul>
                        <p className="copyright text-center">
                            © 2021
                        </p>
                    </nav>
                </div>
          </footer>
        )
    }
}

export default Footer
