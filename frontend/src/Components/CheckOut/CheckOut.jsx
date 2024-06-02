import React from "react";
import { useState } from "react";
import { useAuth } from "../../Context/ShopContext";
import ErrorMessage from '../ErrorMessage/ErrorMessage';


const CheckOut = () =>{

    const { isLoggedIn } = useAuth();
    const [error, setError] = useState('');

    const handleCheckOut = () => {
        if (!isLoggedIn) {
            setError('You must be logged in to place an order.');
            return;
        }

        // Place order logic here
        // e.g., send order details to the server

        setError(''); // Clear error if any
        alert('Order placed successfully!');
    };

    return (
        <div>
            {error && <ErrorMessage message={error} />}
            <button onClick={handleCheckOut}>Place Order</button>
        </div>
    );
};





export default CheckOut