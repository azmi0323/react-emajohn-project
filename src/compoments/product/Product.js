import React from 'react';

const Product = (props) => {
   const {name,id,img,category,price,seller,ratings,stock}=props.product
    console.log(props);
    return (
        <div>
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h5>{name}</h5>
            </div>
        </div>
    );
};

export default Product;