import React from 'react'
import { CartCard } from '../components/CartCard'
import { useTitle } from '../hooks/useTitle'
import { useCart } from '../context/CartContext'

export const Cart = () => {
    const {total , cartlist} = useCart();
    console.log("Cart"+cartlist)
    useTitle("Cart")

  return (
    <main>
        <section className='cart'>
            <h1>Cart items: {cartlist.length}/${total}</h1>
            {cartlist.map((product)=>(
            <CartCard key= {product.id} product={product}/>
        ))}
        </section>
    </main>
  )
}
