import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Premium Quality Construction Wire and Cables</h1>
        <p>
          Your trusted and reliable source for high-quality construction
          wires and cables, offering a wide range of products to meet all your building
          needs with exceptional service and competitive prices.
        </p>

        <Link
          to="contact"
          smooth={true}
          offset={0}
          duration={500}
          className="btn"
        >
          Request a Quote <img src={dark_arrow} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
