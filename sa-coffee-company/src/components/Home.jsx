import React from "react";
import { useState } from "react";
import homeImage2 from "../assets/images/image1.jpg";
import homeImage3 from "../assets/images/image2.jpg";
import homeImage4 from "../assets/images/image3.jpg";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const Home = () => {
  const backgroundImg = [
    { id: 0, value: homeImage2 },
    { value: homeImage3 },
    { value: homeImage4 },
  ];

  return (
    <div className="aka">
      <section className="home" id="Home">
        <div className="row">
          <div className="content">
            {/* <h3>SA COFFEE COMPANY</h3> */}
          </div>
          <div className="ImageSlider">
            <div className="image">
              <Slide>
                {/* {backgroundImg.map((obj) => (
                  <img src={obj.value} alt="" className="main-home-image" />
                ))} */}
              </Slide>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
