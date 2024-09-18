import React, { useRef } from "react";
import "./Testimonial.css";
import next_btn from "../../assets/next-icon.png";
import back_btn from "../../assets/back-icon.png";
import user_1 from "../../assets/user1.png";
import user_2 from "../../assets/user1.png";
import user_3 from "../../assets/user1.png";
import user_4 from "../../assets/user-4.png";

const Testimonial = () => {
  const slider = useRef();

  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonial">
      <img src={next_btn} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_btn} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>David Adebisi</h3>
                  <span>Ibadan,Nigeria</span>
                </div>
              </div>
              <p>
                The durability of these wires is remarkable. Even in challenging
                environments, they hold up without any signs of wear or
                degradation. This reliability makes them a go-to for our
                projects.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Blessing Azuka</h3>
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
              <p>
                As a contractor, safety and efficiency are non-negotiable for
                us. Vinyl Integrated delivered exactly that. The cables are not
                only robust but also designed with safety in mind. Our projects
                have never been more secure
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Mariam Nafiu</h3>
                  <span>Abuja,Nigeria</span>
                </div>
              </div>
              <p>
                We’ve used these cables in multiple large-scale projects, and
                they’ve never let us down. Vinyl Integrated are a trusted part
                of our inventory. Great quality and always delivered on time.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Ore Ade-Ajayi</h3>
                  <span>Lagos,Nigeria</span>
                </div>
              </div>
              <p>
                The quality of the construction cables we received was
                top-notch, and the customer support was just as impressive.
                We've had zero issues with wiring, and installation has been
                smooth on all fronts. We won't use any other brand!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Mensah Essien </h3>
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
              <p>
                We’ve been using these quality Wire and Cables from vinyl
                integrated for our major projects, and they’ve consistently
                exceeded our expectations. The durability and performance are
                unmatched, providing a reliable solution for all our electrical
                installations. Highly recommended!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
