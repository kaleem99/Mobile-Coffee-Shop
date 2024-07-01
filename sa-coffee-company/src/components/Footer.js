import React from "react";
import "./Footer.css";
import { BsEnvelopeFill } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import logo from "../assets/images/logo.jpg";
const FooterData = [
  {
    name: "coffee20@gmail.com",
    icon: <BsEnvelopeFill className="lod" />,
    url: "mailto::anthony@aands.co.za",
  },
  {
    name: "facebook",
    icon: <AiFillFacebook className="lod" />,
    url: "https://web.facebook.com/sacoffeeco0205",
  },
  {
    name: "instagram",
    icon: <FaInstagramSquare className="lod" />,
    url: "#",
  },
];
const Footer = () => {
  return (
    <footer id="Contact" className="footer">
      <div className="footer-content">
        <div className="footer-section logo">
          <img
            src={logo}
            alt="SA Coffee Company Image"
            className="footer-logo"
          />
          <div className="social-icons">
            {FooterData.map((obj) => (
              <a rel="noreferrer" target="_blank" href={obj.url}>
                <div className="box-A-Icon">{obj.icon}</div>
                {/* &nbsp;{obj.name} */}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-section">
          <h2>Company</h2>
          <ul>
            <li>OUR COMPANY</li>
            <li>OUR COFFEE</li>
            <li>OUR COFFEE STORES</li>
            <li>STORIES & NEWS</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Services</h2>
          <ul>
            <li>BREWING GUIDE</li>
            <li>MENU</li>
            <li>COFFEE SHOP</li>
            <li>RESERVATIONS</li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact</h2>
          <ul>
            <li>CONTACT US</li>
            <li>Johannesburg</li>
            <li>Phone (123) 456-7891</li>
            <li>sacoffeecompany@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 SA Coffee Company - Coffee Theme. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
