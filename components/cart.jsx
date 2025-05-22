export default function Cart({ items, prices, quantitys, onClose, onDelete }) {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-10 z--1 opacity-60" onClick={onClose}></div>
            <div className="bg-[#3A3A3A] shadow-lg max-w-md w-full relative flex flex-col items-center text-center m-3 p-3 rounded-xl z-50">
                <button className="absolute top-2 right-2 text-white text-xl hover:text-gray-400" onClick={onClose}>X</button>

                {items.length > 0 ? (
                    items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center w-full px-4 py-2 text-white">
                            <span>{item} x{quantitys[index]} - ${prices[index] * quantitys[index]}</span>
                            <button
                                onClick={() => onDelete(index)}
                                className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="text-white">Your cart is empty.</div>
                )}
            </div>
        </>
    );
}
