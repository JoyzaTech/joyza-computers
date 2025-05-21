'use client';

// Next component imports
import Image from "next/image";

// React imports
import { useState } from "react";

// Icon imports
import { CgMathMinus } from "react-icons/cg";
import { CgMathPlus } from "react-icons/cg";


//html area
export default function Popup({ info, onClick }) {
    const [quantity, setQuantity] = useState(1)

    return(
        <div className="p-6 rounded flex flex-row items-center">
            <div className="bg-[#6E6E6E] shadow-lg max-w-md w-full relative flex flex-col items-center text-center m-3 p-3 rounded-lg">
                <h1 className="text-[3vw] p-3">{info.name}</h1>
                <Image src={info.images[0]} alt='popup info' width='200' height='200' />
                <p className="text-[1.5vw] p-3">{info.price}</p>
                <div className="purcahse-container flex flex-row p-2">
                    <button onClick={() => quantity > 0 ? setQuantity(quantity - 1) : setQuantity(quantity)} className="m-2"><CgMathMinus /></button>
                    <div className="bg-[#5D5D5D] w-[2vw] h-[2vw] rounded-lg text-white my-2"><p>{quantity}</p></div>
                    <button onClick={() => setQuantity(quantity + 1)} className="m-2"><CgMathPlus /></button>
                    <button className="bg-[#0071C7] p-2 rounded-lg">Add to cart</button>
                </div>
            </div>

            <div className="bg-[#6E6E6E] shadow-lg max-w-md w-full relative flex flex-col items-center text-center m-3 p-3 rounded-lg">
                <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" onClick={onClick}>X</button>
                <h1 className="text-[2vw] p-3">Description: </h1>
                <p className="text-[1.5vw]">{info.description}</p>
                <hr className="bg-[#5D5D5D] w-full h-[4px] border-none my-4"/>
                <h1 className="text-[2vw] p-3">Features: </h1>
                {info.features.map((feature) => {
                    return(
                        <li key={feature}>{feature}</li>
                    )
                })}
                <hr className="bg-[#5D5D5D] w-full h-[4px] border-none my-4"/>
                <h1 className="text-[2vw] p-3">specifications: </h1>
                {Object.values(info.specifications).map((specification) => {
                    return(
                        <li key={specification}>{specification}</li>
                    )
                })}
            </div>
        </div>
    )
}