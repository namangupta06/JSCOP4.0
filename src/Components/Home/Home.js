import React from "react";
import "./Home.css";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import About from "../About/About";
import Speakers from "../Speaker/Speakers";
import Timeline from "../Timeline/Timeline";
import SponsorsMain from "../Sponsors/SponsorsMain";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";
import strage from "./images/strage.png";
import earth from "./images/earth.png";
import planet from "./images/p-3.png";
import Faq from "../Faq/Faq";

function Home() {
  return (
    <>
      <div className="home" id="home">
        {/* <Navbar/> */}

        <section id="main" className="grid-container grid-container--home">
          <img src={earth} alt="logo" className="p-1" />

          <img src={strage} alt="logo" className="m" />

          <div className="jscop">
            <h2 in-view="fade-right" className="landing__Heading">
              JSCOP 4.O
            </h2>
            <br /> <button className="mv1">Register Now</button>
            <br />
            <button className="mv2">Register Now</button>
          </div>

          {/* <div id="object2"></div> */}

          <img src={planet} alt="logo" className="p-3" />
        </section>

        {/* <h3 classNameName='Home__Heading'> JSCOP</h3>
            <button classNameName="mv" onclick="parent.location='http://opencon.ieeevit.org/register.html'">Register Now</button> */}
      </div>
      {/* <About /> */}

      <Speakers />
      <Timeline />

      <Faq />
      <SponsorsMain />
      <Team />
      <Footer />
    </>
  );
}

export default Home;
