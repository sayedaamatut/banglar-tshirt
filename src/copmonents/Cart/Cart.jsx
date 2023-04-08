import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length===0){
        message=<p>Please add some product</p>
    }
    else{
        message = <div>
            <h3>Boroloxxxxx</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            <h3 className={cart.length === 1 ?'blue' : 'red'}>Order summary{cart.length}</h3>
            <p className={`bold bordered ${cart.length===3 ? 'red':'purple'}`}>something</p>
            {cart.length >2 ? <span className='blue'>Aro kino</span> : <span>Fokira</span>}
            {message}
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                    >{tshirt.name} <button 
                    onClick={() =>handleRemoveFromCart(tshirt._id)}
                    >X</button></p>)
            }
            {
                cart.length ===2 && <p>Double bonanza!!!</p>
            }
            {
                cart.length ===3 || <h3>Tinta to hoilo na!!</h3>
            }
        </div>
    );
};

export default Cart;