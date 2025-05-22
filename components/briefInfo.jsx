// Next component imports
import Image from "next/image"

export default function BriefInfo({ img, title, className, onClick }) {
    // Returns a div with info from the data, 'img' and 'title'
    return(
        <div className={`bg-[#3A3A3A] hover:bg-[#292929] h-[20vw] min-h-[200px] flex  flex-col items-center justify-center p-4 rounded-xl ${className}`} onClick={onClick}>
            <div className="relative w-full flex-1">
                <Image
                    src={img}
                    alt='product img'
                    fill
                    className="object-contain p-4"
                />
            </div>

            <p className="text-2xl font-bold">{title}</p>
        </div>
    )
}