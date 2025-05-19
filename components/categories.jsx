import React from 'react'
import { navCollections } from '../data';

const categories = () => {

    return (
        <>
        <div className='w-1/5'>
            <div className='bg-[#3C3C3C] text-[#929292] text-center'>Categories</div>

            {navCollections.map((category) => (
                <div key={category} className='bg-[#6E6E6E] text-center'><h1>{category}</h1></div>
            ))}
        </div>

        </>
        )
}

export default categories