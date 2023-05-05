import React from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import FoodItem from './FoodItem'
import { clearCart } from '../utils/cartSlice';

function Cart() {
  const cartItems = useSelector(store => store.cart.items )
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  return (
    <div>
      <button onClick={()=> handleClearCart()}> Clear Cart</button>
        <h1>Cart Items - { cartItems.length}</h1>
        
        {cartItems.map((item) =>(
          <FoodItem {...item?.card?.info}/>
        ))}
        
    </div>
  )
}

export default Cart