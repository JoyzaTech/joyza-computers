'use client';

// React icon imports
import { FaSearch } from "react-icons/fa";

export default function TopArea() {
    return(
        <div className="flex flex-cols p-4">
            <h1 className="px-4">Joyza Computers</h1>
            <div className="px-4">
                <button><FaSearch className="text-blue-200"/></button>
            </div>
        </div>
    )
}