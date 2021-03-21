import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakedata from '../../fakeData';
import Reviewitem from '../ReviewItem/Reviewitem';
import Cart from '../Cart/Cart';
const Review = () => {
    const [cart, setCart] = useState([]);

    const Removeitem = (key) => {
        console.log("clicked ",key);
        removeFromDatabaseCart(key);
        const newCart=  cart.filter(product=>product.key!==key);
        setCart(newCart);
        }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const pdKey = Object.keys(savedCart);
        
        //console.log("cart ",pdKey);
        const CartPrduct = pdKey.map(key => {
            const product = fakedata.find(product => product.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        console.log("product ", CartPrduct);
        setCart(CartPrduct);
    }, [])

    return (
        <div>
            <div>
            This is review {cart.length};
            {
                cart.map(product => <Reviewitem 
                    removeitem={ Removeitem }
                    product={product}
                    
                ></Reviewitem>)
            }
            </div>
            <div className="cart-container">
                    <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;