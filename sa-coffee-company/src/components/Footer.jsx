import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
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
    <div className="aka">
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Connect with us</h3>
            <p>
              Follow us on social media to stay up-to-date with the latest news,
              promotions, and coffee tips from SA Coffee Company.
            </p>
            {FooterData.map((obj) => (
              <a rel="noreferrer" target="_blank" href={obj.url}>
                <div className="box-A-Icon">{obj.icon}</div>
                &nbsp;{obj.name}
              </a>
            ))}
          </div>
        </div>
        <div className="credit">
          <FaRegCopyright className="lod" />
          Copyright All rights reserved
        </div>
      </section>
    </div>
  );
};

export default Footer;
