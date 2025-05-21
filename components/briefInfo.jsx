// Next component imports
import Image from "next/image"

export default function BriefInfo({ img, title, className, onClick }) {
    // Returns a div with info from the data, 'img' and 'title'
    return(
        <div className={`bg-[#6E6E6E] hover:bg-[#5D5D5D] h-[20vw] min-h-[200px] flex  flex-col items-center justify-center p-4 rounded-lg ${className}`} onClick={onClick}>
            <div className="relative w-full flex-1">
                <Image
                    src={img}
                    alt='product img'
                    fill
                    className="object-contain p-4"
                />
            </div>

            <p className="text-2xl">{title}</p>
        </div>
    )
}