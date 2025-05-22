export default function Cart({ items, prices, quantitys, onClose }) {
    return(
        <>
            <div className="fixed inset-0 bg-black bg-opacity-10 z--1 opacity-60"></div>
            <div className="bg-[#3A3A3A] shadow-lg max-w-md w-full relative flex flex-col items-center text-center m-3 p-3 rounded-xl">
                <button className="absolute top-2 right-2 text-white text-xl hover:text-gray-400" onClick={onClose}>X</button>
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
        </>
    )
}