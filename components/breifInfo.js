import Image from "next/image"
export default function BreifInfo({ img, title}) {
    return(
        <div>
            <Image
                src={img}
                alt='product img'
            />

            <p>{title}</p>
        </div>
    )
}