import React from 'react';
import fakeData from '../../fakeData';
import { useState,useEffect } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first = fakeData.slice(0, 10);
    //console.log(first);
    const [products, setProducts] = useState(first);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const pdKey = Object.keys(savedCart);
        
        //console.log("cart ",pdKey);
        const CartPrduct = pdKey.map(key => {
            const product = fakeData.find(product => product.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        console.log("product ", CartPrduct);
        setCart(CartPrduct);
    }, [])


    const handleAddProduct = (product) => {
        //console.log(product);
        const tobeAdded=product.key;
        let newCart;
        const sameProduct = cart.find(product => product.key === product.key);
        let count=0;
        if(sameProduct){
            count=sameProduct.quantity+1;
            sameProduct.quantity=count;
            const others= cart.filter(product => product.key !== tobeAdded);
            newCart=[...others,sameProduct];
        }
        else{
            product.quantity=1;
            newCart=[...cart,product];
        }

        setCart(newCart);
        
        addToDatabaseCart(product.key, count);

    }
    return (
        <div className="shop-container">
            <div className="product-container">

                {

                    products.map(product => <Product
                        key={product.key}
                        ShowAddToCart={true}
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