'use client';

import { useState } from 'react';
import { getStripe } from '../lib/stripe-client';
import PaymentStatusAlert from './PaymentStatusAlert';

export default function Cart({ items, prices, quantitys, onClose, onDelete }) {
    const [isLoading, setIsLoading] = useState(false);

    // this gives you the total price of everything
const totalPrice = items.reduce((total, item, index) => {
    const price = parseFloat(prices[index]) || 0;
    const quantity = parseInt(quantitys[index]) || 0;
    return total + price * quantity;
}, 0);


    const handleCheckout = async () => {
        if (items.length === 0) {
            alert('Your cart is empty');
            return;
        }

        setIsLoading(true);

        try {
            // formates the cart for stripes organization
            const cartItems = items.map((item, index) => ({
                name: item,
                price: parseFloat(prices[index]),
                quantity: 1
            }));

            // sends the cart stuff over
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: cartItems
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const { id } = await response.json();
            
            const stripe = await getStripe();
            
            if (!stripe) {
                alert('Stripe failed to load. Please check your publishable key configuration.');
                return;
            }
            
            const { error } = await stripe.redirectToCheckout({ sessionId: id });
            
            if (error) {
                alert(`Payment failed: ${error.message}`);
            }
        } catch (error) {
            alert('Payment process failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <PaymentStatusAlert />
            <div className="fixed inset-0 bg-black bg-opacity-10 z--1 opacity-60" onClick={onClose}></div>
            <div className="bg-[#3A3A3A] shadow-lg max-w-md w-full relative flex flex-col items-center text-center m-3 p-3 rounded-xl z-50">
                <button className="absolute top-2 right-2 text-white text-xl hover:text-gray-400" onClick={onClose}>X</button>

                {items.length > 0 ? (
                    <>
                        {items.map((item, index) => (
                            <div key={index} className="flex justify-between items-center w-full px-4 py-2 text-white">
                                <span>{item} x{quantitys[index]} - ${prices[index] * quantitys[index]}</span>
                                <button
                                    onClick={() => onDelete(index)}
                                    className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        
                        {/* Total Price */}
                        <div className="w-full border-t border-gray-600 mt-4 pt-4">
                            <div className="text-white text-lg font-bold">
                                Total: ${totalPrice.toFixed(2)}
                            </div>
                        </div>

                        {/* Checkout Button */}
                        <button
                            disabled={isLoading}
                            onClick={handleCheckout}
                            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-full mt-4"
                        >
                            {isLoading ? 'Processing...' : 'Checkout with Stripe'}
                        </button>
                    </>
                ) : (
                    <div className="text-white">Your cart is empty.</div>
                )}
            </div>
        </>
    );
}