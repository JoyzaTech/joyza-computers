'use client';
//component imports
import BriefInfo from '../components/briefInfo';
import NavMenu from '../components/categories';
import TopArea from '../components/topArea';

//data imports
import { computers, software, accessories } from '../data'

//react imports
import { useState } from 'react';

//mongodb imports(if needed)
import { accessedDynamicData } from 'next/dist/server/app-render/dynamic-rendering';

export default function Home() {
  //data being red on screen
  const [data, setData] = useState(computers)

  //handles data change
  const handleDataChange = (theData) => {
    if (theData === 'computers'){
      setData(computers)
    } else if (theData === 'software') {
      setData(software)
    } else if (theData === 'accessories') {
      setData(accessories)
    }
  }

  //returns html
  return (
    <div className='flex flex-col'>
      <TopArea />

      <div className='flex'>
        <NavMenu onSelectCategory={handleDataChange}/>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 flex-1'>
          {Object.values(data).map((item, index) => {
            return(
              index == 0 ? <BriefInfo key={item.name} img={item.images[0]} title={item.name} className="col-span-2" /> : <BriefInfo key={item.name} img={item.images[0]} title={item.name} />
            )
          })}
        </div>
      </div>
      
    </div>
  )
}
