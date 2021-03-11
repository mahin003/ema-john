import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    const total = cart.reduce((total,prd) =>total+prd.price,0);
    return (
        <div>
            <h4>Order summary</h4>
            <p>items ordered: {cart.length}</p>
            <p>Total Price: {total}</p>
        </div>
    );
};

export default Cart;