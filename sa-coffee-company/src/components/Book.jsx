import React from "react";
import "./Book.css";

const Book = () => {
  return (
    <section className="book" id="Booking Section">
      <div className="container">
        <h1 className="heading">Book an event</h1>
        <form method="POST" target="_blank" action="https://formspree.io/f/xoqgrrrk">
          <div className="form-group">
            <input
              type="text"
              placeholder="Your name"
              className="box"
              name="name"
            />
            <input
              type="text"
              placeholder="Your surname name"
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
          <div className="form-group">
            <div className="date-group">
              <label>Start Date</label>
              <input
                type="datetime-local"
                placeholder="Date of your event (Start)"
                className="box"
                name="date-from"
              />
            </div>
            <div className="date-group">
              <label>End Date</label>
              <input
                type="datetime-local"
                placeholder="Date of your event (End)"
                className="box"
                name="date-to"
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Physical address of event"
              className="box"
              name="address"
            />
            <input
              type="text"
              placeholder="Address Line 2"
              className="box"
              name="address2"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="City"
              className="box"
              name="city"
            />
            <input
              type="text"
              placeholder="State/Province/Region"
              className="box"
              name="Region"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Street code"
              className="box"
              name="street code"
            />
            <input
              type="number"
              placeholder="Location Pin"
              className="box"
              name="Location Pin"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Number of people"
              className="box"
              name="Number-of-people"
            />
            <input
              type="number"
              placeholder="Your contact number"
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
          <button type="submit" className="btn">send message</button>
        </form>
      </div>
    </section>
  );
};

export default Book;
