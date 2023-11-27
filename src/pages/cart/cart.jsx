import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './CartItem'
import "./cart.css"
import {useNavigate} from "react-router-dom"
import { SmileySad } from "phosphor-react";


export const Cart = () => {
  const {cartItems,getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0){
            return <CartItem data={product}/>
          }
        })}
      </div>
      {totalAmount > 0 ?
      <div className='checkout'>
        <p className='total-price'><b>SubTotal : ${totalAmount}</b></p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
      </div>
      : <div className='cart-empty'>
          <h1 >Cart Empty</h1>
          <SmileySad size={32} />
        </div>
      }   
    </div>
    
  )
}
