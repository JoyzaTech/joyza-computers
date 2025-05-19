'use client';
import BriefInfo from '../components/briefInfo'
import { computers, software } from '../data'
import { useState } from 'react';
import NavMenu from '../components/categories';

export default function Home() {
  const [data, setData] = useState(computers)
  return (
    <>
    <NavMenu/>
    <div>
      {Object.values(data).map((item, index) => {
        return(
          <BriefInfo key={item.name} img={item.images[0]} title={item.name} />
        )
      })}
    </div>
    
    </>
  )
}
