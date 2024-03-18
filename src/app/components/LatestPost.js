"use client"
import Image from "next/image"
import Link from "next/link"

const LatestPost = ({ title, tag, date, coverImage, slug, subtitle, blogPage=false, square=false}) => {
  return (
    <div key={ slug } className="m-2  overflow-hidden flex flex-col">
        <Image
        width={ 1650 }
        height={ 1340 }
        alt={ title }
        src={ `http://localhost:3000/assets${coverImage}` }
        className={`${square ? "blog__image-square" : "blog__image-rect"} object-cover`}
        />
        <div className="flex gap-x-3 items-center mt-12">
            <span className={`rounded-full flex items-center justify-center text-[1.4rem] uppercase border font-semibold ${blogPage ? 'border-[#D5A100] text-[#D5A100]' : 'text-[#5C5C5C] border-[#5C5C5C]'} p-3`}>{tag}</span>
            <span className="text-[#5C5C5C] text-[1.4rem] font-semibold">{date}</span>
        </div>
        

        <h1 className="py-4 px-0 text-[3.2rem] font-bold text-[#5C5C5C]">{title}</h1>
        <p className="text-[1.8rem] text-[#5C5C5C] px-0">{subtitle}</p>
        
    <Link className="text-success flex gap-3 items-center text-[1.8rem] font-bold" href={ `/blogs/${slug}` }><span className="underline"> Read More </span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<path d="M12.1462 7.04706L16.803 7.04705C17.3553 7.04705 17.803 7.49477 17.803 8.04705L17.803 12.7039" stroke="#258575" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M17.0948 7.75419L7.19531 17.6537" stroke="#258575" strokeWidth="1.5" strokeLinecap="round"/>
</svg></Link>
            </div>
  )
}

export default LatestPost;