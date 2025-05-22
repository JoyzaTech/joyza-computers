'use client';

// Component imports
import BriefInfo from '../components/briefInfo';
import NavMenu from '../components/categories';
import TopArea from '../components/topArea';
import Popup from '../components/popup';
import Cart from '../components/cart';

// Data imports
import { computers, software, accessories } from '../data';

// React imports
import { useState } from 'react';

export default function Home() {
  // Currently displayed products
  const [data, setData] = useState(computers);

  // Popup item info
  const [popupData, setPopupData] = useState(null);

  // Cart state
  const [cart, setCart] = useState({
    items: [],
    prices: [],
    amounts: [],
  });

  const [isCart, setIsCart] = useState(false);

  // Toggle cart visibility
  const handleCart = () => {
    setIsCart(!isCart);
  };

  // Handle category switching
  const handleDataChange = (theData) => {
    if (theData === 'computers') {
      setData(computers);
    } else if (theData === 'software') {
      setData(software);
    } else if (theData === 'accessories') {
      setData(accessories);
    }
  };

  // Add item to cart
  const addToCart = (newItem, newPrice, newAmount) => {
    setCart((prevCart) => ({
      items: [...prevCart.items, newItem],
      prices: [...prevCart.prices, newPrice],
      amounts: [...prevCart.amounts, newAmount],
    }));
  };

  // Delete item from cart
  const handleDeleteFromCart = (indexToRemove) => {
    setCart((prevCart) => ({
      items: prevCart.items.filter((_, i) => i !== indexToRemove),
      prices: prevCart.prices.filter((_, i) => i !== indexToRemove),
      amounts: prevCart.amounts.filter((_, i) => i !== indexToRemove),
    }));
  };

  // HTML render
  return (
    <div>
      <div className='flex flex-col'>
        <TopArea onCart={() => handleCart} />

        <div className='flex'>
          <NavMenu onSelectCategory={handleDataChange} />
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 flex-1'>
            {Object.values(data).map((item, index) => (
              index === 0 ? (
                <BriefInfo
                  key={item.name}
                  img={item.images[0]}
                  title={item.name}
                  className="col-span-2"
                  onClick={() => setPopupData(item)}
                />
              ) : (
                <BriefInfo
                  key={item.name}
                  img={item.images[0]}
                  title={item.name}
                  onClick={() => setPopupData(item)}
                />
              )
            ))}
          </div>
        </div>
      </div>

      {/* Popup */}
      {popupData && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <Popup
            info={popupData}
            onClick={() => setPopupData(null)}
            onAdd={addToCart}
          />
        </div>
      )}

      {/* Cart */}
      {isCart && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <Cart
            items={cart.items}
            prices={cart.prices}
            quantitys={cart.amounts}
            onClose={() => setIsCart(!isCart)}
            onDelete={handleDeleteFromCart}
          />
        </div>
      )}
    </div>
  );
}
