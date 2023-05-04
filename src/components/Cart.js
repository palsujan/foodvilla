import React from 'react'
import { useSelector } from 'react-redux' 
import FoodItem from './FoodItem'

function Cart() {
  const cartItems = useSelector(store => store.cart.items )
  return (
    <div>
        <h1>Cart Items - { cartItems.length}</h1>
        
        {cartItems.map((item) =>(
          <FoodItem {...item?.card?.info}/>
        ))}
        
    </div>
  )
}

export default Cart