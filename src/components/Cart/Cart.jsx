import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {

    let message;

    if (cart.length === 0) {
        message = <p>Please select products</p>
    }

    else {
        message = <div>
            <h3>Selected product</h3>

            <p><small>Thanks for giving your money</small></p>
        </div>
    }


    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary{cart.length}</h2>
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name}
                    <button
                        onClick={() => handleRemoveFromCart(tshirt._id)}
                    >X</button>

                </p>)
            }

            {cart.length > 2
                ? <span className='purple'>Buy more</span>
                : <span>Poor</span>}


            { <p className={`bold border ${cart.length===3 ? 'yellow' : 'purple'}`}>SomeThing</p>}
            {cart.length === 3 && <p>Bunas Point</p>}
            {cart.length >= 3 || <p>more buy for bunas</p>}
        </div>
    );
};

export default Cart;