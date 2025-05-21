'use client';

// React icon imports
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

// Next component imports
import Image from "next/image";

// Inner image imports
import icon from '../public/capstoneIcon.png'


export default function TopArea({ onCart }) {
    return(
        <div className="flex flex-cols p-4 items-center justify-center">
            <Image src={icon} alt='Icon' width='50' height='50' className="rounded-lg" />
            <h1 className="px-4 text-[3vw]">Joyza Computers</h1>
            <button className="bg-[#1D6ED7] hover:bg-[#005FA8] h-[2vw] p-2 m-2 rounded-sm my-[1vw] flex items-center"><FaSearch className="bg-[#1D6ED7] hover:bg-[#005FA8] text-black"/></button>
            <textarea placeholder="Search..." className="bg-[#6E6E6E] text-white h-[4vh] my-[1vw] w-[30vw]"></textarea>
            <button className="bg-[#0071C7] hover:bg-[#005FA8] py-1 px-2 flex flex-row mx-2 rounded-lg" onClick={onCart()}>Cart <FaShoppingCart className="mx-4 my-1" /></button>
        </div>
    )
}