import React from 'react'
import './Cartcard.css'
import { useCart } from '../context/CartContext';

export const CartCard = ({product}) => {
    const{ removeFromCart } = useCart();
    const{id,name,price,image}= product;
  return (
    <div className='cartCard'>
        <img src ={image}></img>
        <p className='productName'>{name}</p>
        <p className='productPrice'>${price}</p>
        <button onClick={()=>removeFromCart(product)}>Remove</button>
    </div>
  )
}
