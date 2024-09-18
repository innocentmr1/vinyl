import React from "react";
import "./Services.css";
import { Link } from "react-scroll";
import colman from "../../assets/colman.pdf";
import lagostar from "../../assets/lagostar.pdf";
import berliac from "../../assets/colman.pdf";
import nigerchin from "../../assets/colman.pdf";

const Services = () => {
  return (
    <section>
      <h4>
        We supply mostly Coleman, Berliac, Lagostar and Nigerchin Cable and Wire
        as well as armoured and non armoured cables.
      </h4>
      <div className="services">
        <div className="service">
          <h4 className="name"> Berliac</h4>

          {/* <img src={service1} alt="" /> */}
          <div className="caption">
            {/* <img src={icon1} alt="" /> */}
            <p>
              Berliac Cables and Wires is one of Nigeria's leading manufacturer
              of Copper and Aluminium electrical conductors. <br /> At Berliac,
              we believe in quality and reliability and have meticulously built
              a powerful connect that helps touch thousands of hearts and lights
              up thousands of homes and industries across Nigeria. <br />
              All our products are produced and tested according to IEC-60502-1
              and BS63461987 standards.
            </p>{" "}
            <br />
            <a download="" href={berliac} className="btn">
              Download Price List
            </a>
          </div>
        </div>
        <div className="service">
          <h4 className="name">Lagostar</h4>
          {/* <img src={service2} alt="" /> */}

          <div className="caption">
            {/* <img src={icon2} alt="" /> */}
            <p>
              Lagostar, An industry regulator certified MADE IN NIGERIA wire and
              cable company, whose cable solutions are based on passion, a
              culture of the minutest details, and an uncompromising approach to
              quality and customer services and satisfactions. <br />
              The core of our inspiration, aspiration and success lies in the
              provision of perfect cable for you, placing a premium on the same
              highest standards that have set MADE IN NIGERIA wire and cable
              products apart.
            </p>{" "}
            <br />
            <a download="" href={lagostar} className="btn">
              Download Price List
            </a>
          </div>
        </div>
        <div className="service">
          <h4 className="name">Colman </h4>

          {/* <img src={service3} alt="" /> */}
          <div className="caption">
            {/* <img src={icon3} alt="" /> */}
            <p>
              Colman, The largest cable manufacturer in west Africa. <br />
              Coleman Technical Industries Limited is commited to manufacturing
              consistent quality wires and cables that meet and exceed our
              customers. <br />
              COLEMAN Technical industries limited in line with its context and
              strategic direction is commited to manufacturing quality
              electrical & telecommunications wires and cables that meet and
              exceed our customers' expectation consistent with relevant
              stakeholders and ISO 9001:2015 requirements.
            </p>{" "}
            <br />
            <a download="" href={colman} className="btn">
              Download Price List
            </a>
          </div>
        </div>
        <div className="service">
          <h4 className="name">Nigerchin </h4>

          {/* <img src={service3} alt="" /> */}
          <div className="caption">
            {/* <img src={icon3} alt="" /> */}
            <p>
              Nigerchin are committed to the design, manufacture and supply of
              quality cable and conductor products that meet National and
              International Standards, and Customers’ Specification consistent
              with NIS ISO 9001:2015 standard, our interested parties
              requirements including statutory and regulatory requirements.{" "}
              <br />
              The products are essentially electric cable and conductors of
              aluminium and copper made specifically to British Standard (BS)
              International Electrotechnical Commission (IEC) and Nigeria
              Industrial Standard (NIS).
            </p>{" "}
            <br />
            <a download="" href={nigerchin} className="btn">
              Download Price List
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
