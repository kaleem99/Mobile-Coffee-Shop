import React from "react";
import { useState } from "react";
import { PiCoffee } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import logo2 from "../assets/images/SACoffeeCompanyLogo2.jpeg";

const Navbar = ({ setState, state }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const NavbBarSections = ["Home", "Our Story", "Booking", "Contact"];
  return (
    <nav className="navigation">
      <a href="#" onClick={() => setState("")} className="Logo">
        <img
          alt=""
          src={logo2}
          width={"50px"}
          style={{ borderRadius: "5px" }}
        ></img>
        &nbsp;SA Coffee Company&nbsp;
        <PiCoffee />{" "}
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <RxHamburgerMenu />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          {NavbBarSections.map((section) => {
            return (
              <li>
                <a
                  className={state === section ? "NavActive" : ""}
                  href="#"
                  onClick={() => {
                    setState(section);
                    setIsNavExpanded(false);
                  }}
                >
                  {section}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
