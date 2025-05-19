import React from 'react'
import { navCollections } from '../data';

const categories = () => {

    return (
        <>
        <div>Categories</div>

        {navCollections.map((category) => (
            <div key={category}>{category}</div>
        ))}
        </>
        )
}

export default categories