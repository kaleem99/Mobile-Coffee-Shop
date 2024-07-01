import React from "react";
import "./Banner.css"; // Assuming you have a CSS file for styling
import image1 from "../assets/images/SACoffeeCompanyLandlords.jpeg";
import image2 from "../assets/images/SACoffeePoured.png";
import image3 from "../assets/images/newImage1.png"
import image4 from "../assets/images/newImage2.png"

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const allImages = [
  {
    value: image1,
  },
  { value: image2 },
];

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Espresso bar</h1>
        <h2>coffee news</h2>
        <p>
          Pellentesque ac ipsum at justo finibus commodo. Aliquam pellentesque
          ultricies nulla in egestas. Fusce porta scelerisque orci id.
        </p>
        <div className="banner-buttons">
          <button className="read-more">Read more</button>
          <button className="coffee-bean">Coffee bean</button>
        </div>
      </div>
      <div className="banner-image">
        {/* <Slide>
          {allImages.map((obj) => (
            <img src={obj.value} alt="" className="main-home-image" />
          ))}
         </Slide> */}
          <img src={image4} alt="" className="main-home-image" />
      </div>
      {/* <div className="floating-coffee-beans"></div> */}
    </div>
  );
};

export default Banner;
