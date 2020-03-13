import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    const total = cart.reduce((total,prd) => total+prd.price,0);
    let shippingCost=0;
    if(total>35)
    {
        shippingCost=0;
    }
    else if(total>15){
        shippingCost=4.99;
    }
    else if(total>0)
    {
        shippingCost=12.99;
    }
    let tax=(total/10).toFixed(2);
    let grandTotal=(total+shippingCost+Number(tax)).toFixed(2);
    return (
        <div>
            <h4>Order summary</h4>
            <p>items ordered : {cart.length} </p>
            <p>Product Price : {total}</p>
            <p><small>Shipping Cost : {shippingCost.toFixed(2)}</small></p>
            <p><small>Tax-Vat : {tax}</small></p>
            <p>Total Price : {grandTotal}</p>
        </div>
    );
};

export default Cart;