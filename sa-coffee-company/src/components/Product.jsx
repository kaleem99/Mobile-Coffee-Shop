import React from "react";
import { useState } from "react";
import { mobileOptions, productInfo } from "./productData";

const Products = () => {
  const [data, setData] = useState(productInfo);
  const [options, setOptions] = useState(mobileOptions);
  return (
    <div className="aka">
      <section className="product" id="product">
        <h1 className="heading">our products </h1>

        <div className="box-container">
          {data.map((value) => {
            const { id, titles, descs, images } = value;

            return (
              <>
                <a href="#" className="box" key={id}>
                  <img src={images} alt="" />
                  <div className="content">
                    <h3>{titles} </h3>
                    <p>{descs} </p>
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </section>

      <section className="product" id="product">
        <h1 className="heading">let's talk </h1>
        <h3>what works for you </h3>
        <div className="box-container">
          {options.map((value) => {
            const { id, titles, descs, images } = value;

            return (
              <>
                <a href="#" className="box" key={id}>
                  <img src={images} alt="" />
                  <div className="content">
                    <h3>{titles} </h3>
                    <p>{descs} </p>
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Products;
