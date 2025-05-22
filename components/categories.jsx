// React imports
import React from 'react'

// Data imports
import { navCollections } from '../data';

const categories = ({ onSelectCategory }) => {
    // Returns html for all category buttons
    return (
        <>
        <div className='w-1/5 p-2 flex flex-col justify-center'>
            <div className='py-2'>
                <div className='bg-[#3C3C3C] text-3xl text-[#929292] text-center rounded-lg'>Categories</div>
            </div>

            <div className='bg-[#6E6E6E] h-full my-4 rounded-lg'>
                {navCollections.map((category) => (
                    <div key={category} className='bg-[#3C3C3C] text-3xl hover:bg-[#292929] text-center p-[1vw] rounded-full w-9/10 mx-auto my-4' onClick={() => category == 'computers' ? onSelectCategory('computers') : category == 'software' ? onSelectCategory('software') : onSelectCategory('accessories')}><button className='capitalize font-bold rounded-lg'>{category}</button></div>
                ))}
            </div>
        </div>

        </>
        )
}

export default categories