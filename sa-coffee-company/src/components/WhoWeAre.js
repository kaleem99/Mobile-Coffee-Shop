import React from "react";
import "./WhoWeAre.css";
import mapImage from "../assets/images/image1Copy.jpg";
const shopTimes = [
  { day: "Monday", times: "9:00 - 19:00" },
  { day: "Tuesday", times: "9:00 - 19:00" },
  { day: "Wednesday", times: "9:00 - 19:00" },
  { day: "Thursday", times: "9:00 - 19:00" },
  { day: "Friday", times: "9:00 - 19:00" },
  { day: "Saturday", times: "11:00 - 16:00" },
  { day: "Sunday", times: "CLOSED" },
];
const WhoWeAre = () => {
  return (
    <section id="About Us Section" className="who-we-are">
      <div className="content">
        <div className="about">
          <h2>Who we are</h2>
          <h1>About our coffee-shop</h1>
          <p>
            SA Coffee Company is a proudly women-owned business based in
            Gauteng, South Africa. Our passion lies in delivering
            premium-quality coffee to our customers nationwide. With a focus on
            excellence, we take pride in our in-house roaster and packaging
            facility, ensuring full control over the consistency and quality of
            our coffee products. At SA Coffee Company, our mission is to bring
            the rich flavors of the world coffee to customers across the nation.
            Through strategic partnerships and a commitment to excellence, we
            aim to make our premium coffee accessible to coffee lovers
            everywhere.
          </p>
          <button>View products</button>
        </div>
        <div className="hours">
          <h2>Opening Hours</h2>
          <ul>
            {shopTimes.map((item, index) => (
              <li key={index}>
                <strong>{item.day}:</strong> {item.times}
              </li>
            ))}
          </ul>
        </div>
        <div className="image">
          <img src={mapImage} alt="Coffee" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
