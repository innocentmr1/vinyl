import React from "react";
import "./About.css";
import about_img from "../../assets/h2.jpg";
import profile from "../../assets/play-icon.png";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        {/* <img src={play_img} alt="" className="play-img" /> */}
      </div>
      <div className="about-right">
        <h3>About Company</h3>
        <h2>Commitment to Sustainability </h2>
        <p>
          We are Vinyl Integrated Company Nigeria LTD, a credible MADE IN
          NIGERIA wire and cable distribution company, whose supply solutions
          are based on passion, an industrial scale practice of going the extra
          mile, a culture of attention to detail and an uncompromising approach
          to quality, customer service and satisfaction. We supply mostly
          Coleman, Berliac, Lagostar and Nigerchin Cable and Wire as well as
          armoured and non armoured cables. Our Wire and cable distribution
          include but not limited to the following:
          <br />
          <br />
          <ul>
            <li>
              Conduit wiring cables. Single core (PVC Insulated cables with
              solid/stranded copper conductor, from 1mm to 35mm)
            </li>
            <li>
              Surface wiring cables (Multicore flat with/without and with earth
              continuity conductor, from 1mm to 4mm).
            </li>
            <li>
              Flexible cords and cables. Multicore (PVC Insulated; PVC Sheathed
              Cable with Flexible Copper Conductor, from 0.5mm to 6mm).
            </li>
            <li>
              Armoured and non armoured cables of various sizes for under and
              over ground usage.
            </li>
          </ul>
        </p>
        <a download="" href={profile} className="btn">
          Download Company Profile
        </a>
      </div>
    </div>
  );
};

export default About;
