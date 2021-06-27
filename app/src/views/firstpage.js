import React from "react";

function Firstpage() {
  return (
    <header>
      <div className="mainheader">
        <div className="logo">
          <a href="/index">DOCTOR APPOINTMENT</a>
        </div>

        <nav>
          <a href="#">home</a>
          <a href="#">services</a>
          <a href="#">about</a>
        </nav>

        <div className="menubtn">
          <button style={{marginRight: "10px"}}> Login </button>
          <button> Register </button>
        </div>
      </div>

      <main>
        <section className="left-sec">
          <h2> We Are Here For Your Care</h2>
          <h1> We The Best Doctors</h1>
          <p>We are here for your care 24/7. Any help just call us.</p>
          <button>Make an appointment</button>
        </section>

        <section className="right-sec">
          <figure>
            <img src="images/mainbg.png" />
          </figure>
        </section>
      </main>
    </header>
  );
}

export default Firstpage;
