import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './Product';
import "./shop.css";
import { Footer } from '../../components/footer'

export const Shop = () => {
  return (
    <div className="shop">
        <div className="products">
            {PRODUCTS.map((products) => (<Product data={products}/>))}
        </div>
    </div>
  )
}
