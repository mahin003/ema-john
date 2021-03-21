import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart= props.cart;
    const total = cart.reduce((total,prd) =>total+prd.price,0);
    return (
        <div>
            <h4>Order summary</h4>
            <p>items ordered: {cart.length}</p>
            <p>Total Price: {total}</p>
            <Link to='/Order'><button>Review order</button></Link>
            
        </div>
    );
};

export default Cart;