import React from "react";
import "./ProductList.css"; // Assuming you have a CSS file for styling
const products = [
  {
    id: 1,
    name: "MyCoffeeShop Cup",
    description: "Duis et aliquam orci. Vivamus augue quam, ...",
    originalPrice: "$23.00",
    discountedPrice: "$19.00",
    image: "path_to_cup_image",
    sale: true,
    buttonText: "read more",
  },
  {
    id: 2,
    name: "Ethiopian Aroma",
    description: "Duis et aliquam orci. Vivamus augue quam, ...",
    priceRange: "$9.00 – $19.99",
    image: "path_to_ethiopian_aroma_image",
    sale: false,
    buttonText: "select options",
  },
  {
    id: 3,
    name: "Green Africana",
    description: "Duis et aliquam orci. Vivamus augue quam, ...",
    price: "$9.00",
    image: "path_to_green_africana_image",
    sale: false,
    buttonText: "add to cart",
  },
  {
    id: 4,
    name: "American Black Coffee",
    description: "Duis et aliquam orci. Vivamus augue quam, ...",
    price: "$14.00",
    image: "path_to_american_black_coffee_image",
    sale: false,
    buttonText: "add to cart",
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      <h2 className="product-list-title">Choose your coffee</h2>
      <h3 className="product-list-subtitle">Recent Products</h3>
      <div className="product-categories">
        <a href="#coffee">Coffee</a>
        <a href="#green-coffee">Green coffee</a>
        <a href="#roasted-coffee">Roasted coffee</a>
        <a href="#italian">Italian</a>
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              {product.sale && <span className="sale-tag">SALE</span>}
            </div>
            <div className="product-info">
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <div className="product-price">
                {product.originalPrice && (
                  <>
                    <span className="original-price">
                      {product.originalPrice}
                    </span>
                    <span className="discounted-price">
                      {product.discountedPrice}
                    </span>
                  </>
                )}
                {product.priceRange && (
                  <span className="range-price">{product.priceRange}</span>
                )}
                {product.price && (
                  <span className="fixed-price">{product.price}</span>
                )}
              </div>
              <button className="product-button">{product.buttonText}</button>
            </div>
          </div>
        ))}
      </div>

      <button className="view-all-products">view all products</button>
    </div>
  );
};

export default ProductList;
