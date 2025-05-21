import {loadStripe } from "@stripe/stripe-js";

let stripePromise;

export const getStripe = ()=>{
    if(!stripePromise){
        stripePromise = loadStripe(process.env.PUBLISHABLE_KEY)
    }
    return StripePromise
}