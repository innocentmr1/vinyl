import React from "react";
import "./Contact.css";
import mssg from "../../assets/msg-icon.png";
import arrow from "../../assets/white-arrow.png";
import { Link } from "react-scroll";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cbd06004-1827-49b0-af4d-fe2a25a2126f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Details Received, We will respond to you shortly!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={mssg} alt="" />
        </h3>
        <p>Kindly reach out to us if you have any other enquiries</p>
        <ul>
          <li>
            <i class="bx bx-envelope"></i>
            info@vinylintegrated.com
          </li>
          <li>
            <i class="bx bxs-phone-call"></i>+234 913 323 7766
          </li>
          <li>
            <i class="bx bxs-location-plus"></i>
            2,Faneye Street, Yaba,Lagos Nigeria.
          </li>
        </ul>

        {/* <ul className="socials">
          <li>
            <a href="https://instagram.com" className="contact_button">
              <i class="bx bxl-instagram-alt"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" className="contact_button">
              <i class="bx bxl-twitter"></i>
            </a>
          </li>{" "}
          <li>
            <a href="https://whatsapp.com" className="contact_button">
              <i class="bx bxl-whatsapp"></i>
            </a>
          </li>{" "}
          <li>
            <a href="https://facebook.com" className="contact_button">
              <i class="bx bxl-facebook"></i>
            </a>
          </li>{" "}
          <li>
            <a href="https://Linkedin.com" className="contact_button">
              <i class="bx bxl-linkedin"></i>
            </a>
          </li>
        </ul> */}
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>NAME</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name "
            required
          />
          <label>PHONE</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Phone Number "
            required
          />
          <label>MESSAGE</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now
            <img src={arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
      <Link></Link>
    </div>
  );
};

export default Contact;
