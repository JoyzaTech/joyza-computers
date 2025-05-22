'use client';
//component imports
import BriefInfo from '../components/briefInfo';
import NavMenu from '../components/categories';
import TopArea from '../components/topArea';
import Popup from '../components/popup';
import Cart from '../components/cart'

//data imports
import { computers, software, accessories, cartItems } from '../data'

//react imports
import { useState } from 'react';

export default function Home() {
  //data being read on screen
  const [data, setData] = useState(computers)

  //data for popup
  const [popupData, setPopupData] = useState(null)

  const [cart, setCart] = useState({
    items:[],
    prices:[],
    amounts:[]
  })
  const [isCart, setIsCart] = useState(false)

  const handleCart = () => {
    setIsCart(!isCart)
  }

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

  const addToCart = (newItem, newPrice, newAmount) => {
    setCart(prevCart => ({
      items: [...prevCart.items, newItem],
      prices: [...prevCart.prices, newPrice],
      amounts: [...prevCart.amounts, newAmount]
    }))
  }

  //returns html
  return (
    <div>
      <div className='flex flex-col'>
        <TopArea onCart={() => handleCart}/>

        <div className='flex'>
          <NavMenu onSelectCategory={handleDataChange}/>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 flex-1'>
            {Object.values(data).map((item, index) => {
              return(
                index == 0 ? <BriefInfo key={item.name} img={item.images[0]} title={item.name} className="col-span-2" onClick={() => setPopupData(item)} /> : <BriefInfo key={item.name} img={item.images[0]} title={item.name} onClick={() => setPopupData(item)} />
              )
            })}
          </div>
        </div>
        
      </div>

      {popupData && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <Popup info={popupData} onClick={() => setPopupData(null)} onAdd={addToCart} />
        </div>
      )}

      {isCart && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <Cart items={cart.items} prices={cart.prices} quantitys={cart.amounts} onClose={() => setIsCart(!isCart)} />
        </div>
      )}
    </div>
  )
}
