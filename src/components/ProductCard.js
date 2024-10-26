import React, { useEffect, useState } from 'react'
import './ProductCard.css'
import { useCart } from '../context/CartContext';

export const ProductCard = ({product}) => {
  
    const {addToCart , cartlist , removeFromCart} = useCart();
    const {id,name, price, image} = product;
    const[isInCart, setIsInCart] = useState(false);

    useEffect(()=>{
      const productInCart = cartlist.find(cartItem => cartItem.id===id);
      if(productInCart){
        setIsInCart(true);
      }
      else {
        setIsInCart(false);
      }
    },[cartlist, id])

  return (
    <div className='productCard'>
        <img src ={image}></img>
        <p className="name">{name}</p>
        <div className='action'>
            <p>${price}</p>
            {isInCart? <button className='remove' onClick={()=>{removeFromCart(product)}}>Remove</button> : <button onClick={()=>{addToCart(product)}}>Add to Cart</button>}
        </div>
    </div>
  )
}
