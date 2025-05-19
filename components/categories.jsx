import React from 'react'
import { NavCollections } from '../data';

const categories = () => {
    const categoryNames = Object.keys(NavCollections);

    return (
        <>
        <div>Categories</div>

        {categoryNames.map((name) => (
            <div>
                {name}
            </div>
        ))}
        </>
        )
}

export default categories