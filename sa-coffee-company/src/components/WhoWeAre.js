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
    <div className="who-we-are">
      <div className="content">
        <div className="about">
          <h2>Who we are</h2>
          <h1>About our coffee-shop</h1>
          <p>
            Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id
            vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.
            Praesent gravida hendrerit ex, nec eleifend sem convallis vitae.
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
    </div>
  );
};

export default WhoWeAre;
