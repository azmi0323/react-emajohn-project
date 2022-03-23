import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, id, img, category, price, seller, ratings, stock } =
    props.product;
  console.log(props);
  return (
    <div className="product-container">
      <div>
        <img className="product-img" src={img} alt="" />
      </div>
      <div className="mt-3">
        <h5>{name}</h5>
        <h6>price: {price}</h6>
        <p>ratings: {ratings}</p>
        <p>seller:{seller}</p>
        <p>stock: {stock}</p>
      </div>
    </div>
  );
};

export default Product;
