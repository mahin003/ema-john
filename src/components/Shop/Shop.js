import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first = fakeData.slice(0, 10);
    console.log(first);
    const [products, setProducts] = useState(first);
    const [cart,setCart]= useState([]);

    const handleAddProduct=(product)=>{
        console.log(product);
        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                
            
            {
                
                products.map(product => <Product
                    handleAddProduct={handleAddProduct} 
                     product={product}></Product>)
            }
                
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;