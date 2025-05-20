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
                <div className='bg-[#3C3C3C] text-[#929292] text-center rounded-lg'>Categories</div>
            </div>

            <div className='bg-[#6E6E6E] h-[100vh] my-4'>
                {navCollections.map((category) => (
                    <div key={category} className='bg-[#6E6E6E] hover:bg-[#6E6E5E] text-center p-[2vw]' onClick={() => category == 'computers' ? onSelectCategory('computers') : category == 'software' ? onSelectCategory('software') : onSelectCategory('accessories')}><button>{category}</button></div>
                ))}
            </div>
        </div>

        </>
        )
}

export default categories