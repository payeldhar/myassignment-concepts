import React, { useState } from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
  let time = 0;
  for(const product of cart){
   time = time + product.time
  }
const [breaker, setBreak] = useState(0)
 function addToFirst(params){
    setBreak(params)
 }

      return(
        <div className='cart'>
          <p className='name'>
          <h3>Zahid Hossain</h3>
        <h4>Sydney, Australia</h4>
        </p>
        <p className='history'>
          <h2>75Kg</h2>
          <h2>6.5</h2>
          <h2>25Years</h2>
        </p>

              <h3>Add a break</h3>
              <p className='break'> 
                <button onClick={() =>addToFirst(14)}>14s</button>
                <button onClick={() =>addToFirst(11)}>11s</button>
                <button onClick={() =>addToFirst(19)}>19s</button>
                <button onClick={() =>addToFirst(17)}>17s</button>
                <button onClick={() =>addToFirst(15)}>15s</button>
                <button onClick={() =>addToFirst(16)}>16s</button>
              </p>
              <h3>Exercise Details</h3>
              <p className='exercise'>
              <h3 className=''>Exercise time</h3>
              <h3>{time} seconds</h3>
           </p>
           <p className='break'>
            <h3>Break Time</h3>
            <h3>{breaker}Seconds</h3>
           </p>
        </div>
    );
};

export default Cart;