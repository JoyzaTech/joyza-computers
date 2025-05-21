export default function Cart({ items, prices, quantitys, onClose }) {
    return(
        <div className="bg-[#6E6E6E] shadow-lg max-w-md w-full relative flex flex-col items-center text-center m-3 p-3 rounded-lg">
            <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" onClick={onClose}>X</button>
            {items.length > 0 ? (
                items.map((item, index) => {
                    return(
                        <div key={index}>
                            {item} X{quantitys[index]} - ${prices[index] * quantitys[index]}
                        </div>
                    )
                })
            )
            :
            <div>Your cart is empty.</div>
            }
        </div>
    )
}