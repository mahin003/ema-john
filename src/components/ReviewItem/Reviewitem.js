import React from 'react';

const Reviewitem = (props) => {
    return (
        <div>
            <h2>Name: {props.product.name}</h2>
            <h4>Quantity: {props.product.quantity}</h4>
            <button onClick={()=>props.removeitem(props.product.key)} >Remove</button>
        </div>
    );
};

export default Reviewitem;