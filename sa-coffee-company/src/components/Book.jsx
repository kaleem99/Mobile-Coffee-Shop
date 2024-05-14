import React from "react";
import "./Book.css";
const Book = () => {
  return (
    <div className="aka">
      <section className="book" id="Booking Section">
        <h1 className="heading">Book an event</h1>
        <form
          method="POST"
          target="_blank"
          action="https://formspree.io/f/xoqgrrrk"
        >
          <div className="flexBook">
            <input
              type="text"
              placeholder="Your name"
              id="sameLine"
              className="box"
              name="name"
            />
            &nbsp;&nbsp;
            <input
              type="text"
              placeholder="Your surname name"
              id="sameLine"
              className="box"
              name="surname"
            />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Your email"
            className="box"
          />
          <div className="flexBook">
            <div className="startDate">
              <label>Start Date</label>
              <input
                type="datetime-local"
                placeholder="Date of your event (Start)"
                id="sameLine"
                className="box"
                name="date-from"
              />
            </div>
            &nbsp;&nbsp;
            <div className="endDate">
              <label>End Date</label>

              <input
                type="datetime-local"
                placeholder="Date of your event (End)"
                id="sameLine"
                className="box"
                name="date-to"
              />
            </div>
          </div>
          <div className="flexBook">
            <input
              type="text"
              placeholder="Physical address of event"
              className="box"
              name="address"
            />
            &nbsp;&nbsp;
            <input
              name="address2"
              type="text"
              placeholder="Address Line 2"
              className="box"
            />
          </div>
          <div className="flexBook">
            <input
              name="city"
              type="text"
              placeholder="City"
              id="sameLine"
              className="box"
            />
            &nbsp;&nbsp;
            <input
              type="text"
              placeholder="State/Province/Region"
              id="sameLine"
              className="box"
              name="Region"
            />
          </div>
          <div className="flexBook">
            <input
              type="number"
              placeholder="Street code"
              id="sameLine"
              className="box"
              name="street code"
            />
            &nbsp;&nbsp;
            <input
              type="number"
              placeholder="Location Pin"
              id="sameLine"
              name="Location Pin"
              className="box"
            />
          </div>
          <div className="flexBook">
            <input
              type="number"
              placeholder="Number of people"
              id="sameLine"
              className="box"
              name="Number-of-people"
            />
            &nbsp;&nbsp;
            <input
              type="number"
              placeholder="Your contact number"
              id="sameLine"
              className="box"
              name="contact-number"
            />
          </div>
          <textarea
            placeholder="your message"
            name="your-message"
            className="box"
            cols="30"
            rows="10"
          ></textarea>
          <br></br>
          <input type="submit" value="send message" className="btn" />
        </form>
      </section>
    </div>
  );
};

export default Book;
