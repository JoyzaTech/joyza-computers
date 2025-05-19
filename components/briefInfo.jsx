import Image from "next/image"
export default function BriefInfo({ img, title }) {
    return(
        <div>
            <Image
                src={img}
                alt='product img'
                width='100'
                height='100'
            />

            <p>{title}</p>
        </div>
    )
}