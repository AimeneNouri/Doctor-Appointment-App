import React from "react";
import mainbg from "../assets/img/mainbg.png"
import { Link } from 'react-router-dom'

function Firstpage() {
  return (
    <header className="headerFirst">
      <div className="mainheader">
        <div className="logo">
          <a href="/index">DOCTOR APPOINTMENT</a>
        </div>

        <div className="menubtn">
          <Link to="/login"><button style={{marginRight: "10px"}}> Login </button></Link>
          <Link to="/register"><button> Register </button></Link>
        </div>
      </div>

      <main className="mainFisrt">
        <section className="left">
          <h3> We Are Here For Your Care</h3>
          <h1> We The Best Doctors</h1>
          <p>We are here for your care 24/7. Any help just call us.</p>
          <Link to="/login"><button>Make an appointment</button></Link>
        </section>

        <section className="right">
          <figure>
            <img src={mainbg} />
          </figure>
        </section>
      </main>
    </header>
  );
}

export default Firstpage;
