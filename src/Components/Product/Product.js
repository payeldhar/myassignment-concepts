import React from 'react';
import './Product.css'
const Product = ({handleAddToCart ,product}) => {
    // const {handleAddToCart } = product;
   const {name ,about , image , age,time} = product
    return (
        <div className='product'>
            <img src={image} alt=''></img>
            <div className='product-info'>
            <h3 className='product-name'>name :{name}</h3>
            <p>{about}</p>
            <p>Age:{age}</p>
            <p>Time Required :{time}</p>
            </div>
         <button onClick={() => handleAddToCart(product)} className='btn-cart'>
            <p>Add to cart</p>
         </button>
    
        </div>
    );
};

export default Product;