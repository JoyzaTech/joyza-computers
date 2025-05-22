"use client";

import { useState } from "react";
import { getStripe } from "../lib/stripe-client"

export default function CheckoutStripe({items, prices, quantities}){
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckout = async () =>{
        setIsLoading(true)
    }

    try {
        const cartItems = items.map((item, index)=>({
            name: item,
            price: parseFloat(price[index]),
        }))

    if(cartItems.length === 0){
        alert("Your Cart is Empty");
        setIsLoading(false);
        return
    }
    const response = await fetch("/api/checkout", {
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            items: cartItems
        })
    })

    if(!response.ok){
        throw new Error("Network Response not good")
    }

    const {id} = await response.json();

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({sessionId:id})

    }
}