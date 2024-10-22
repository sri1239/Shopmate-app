import React from 'react'
import './ProductCard.css'

export const ProductCard = ({product}) => {
    const {name, price, image} = product;
    console.log(product)
  return (
    <div className='productCard'>
        <img src ={image}></img>
        <p className="name">{name}</p>
        <div className='action'>
            <p>${price}</p>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}
