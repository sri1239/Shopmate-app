import React from 'react'
import './Cartcard.css'

export const CartCard = ({product}) => {
    const{id,name,price,image}= product;
  return (
    <div className='cartCard'>
        <img src ={image}></img>
        <p className='productName'>{name}</p>
        <p className='productPrice'>${price}</p>
        <button>Remove</button>
    </div>
  )
}
