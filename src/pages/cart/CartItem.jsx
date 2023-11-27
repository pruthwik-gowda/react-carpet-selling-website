import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context';
import './cart.css'

export const CartItem = (props) => {
  const { id,productName,price,productImage} = props.data;
  const { cartItems,addToCart,removeFromCart,updateCartItemCount } = useContext(ShopContext);
  const noOfItems = cartItems[id];
  return (
    <div className='cartItem'>
        <img src={productImage} alt="" />
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <div className='countHandler'>
                <button onClick={() => addToCart(id)}> + </button>
                <input value={noOfItems} onChange={(e) => updateCartItemCount(Number(e.target.value),id)}/>
                <button onClick={() => removeFromCart(id)}> - </button>
            </div>
        </div>
    </div>
  )
}
