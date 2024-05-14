import React from "react";
import { useState } from "react";
import storyText from "./storyText.js";

import StoryImg1 from "../assets/images/StoryImg1.jpg";
import StoryImg2 from "../assets/images/StoryImg2.jpg";
import StoryImg3 from "../assets/images/StoryImg3.jpg";
import StoryImg4 from "../assets/images/StoryImg4.jpg";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Story = () => {
  const [data, setData] = useState(storyText);
  const backgroundImg = [
    { id: 0, value: StoryImg1 },
    { value: StoryImg2 },
    { value: StoryImg3 },
    { value: StoryImg4 },
  ];
  return (
    <div className="aka">
      <section className="story" id="Story">
        <h1 className="heading">Our Story</h1>

        <div className="box-container">
          {data.map((value) => {
            const { id, story, images } = value;
            return (
              <>
                <a href="#" className="box" key={id}>
                  <img style={{ borderRadius: "40%" }} src={images} alt="" />
                  <div className="content">
                    <p>{story} </p>
                  </div>
                </a>
              </>
            );
          })}

          <div className="ImageSlider">
            <div className="image">
              <Slide>
                {backgroundImg.map((obj) => (
                  <img src={obj.value} alt="" className="main-home-image" />
                ))}
              </Slide>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
