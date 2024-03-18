"use client"

import Image from "next/image"
import Link from "next/link"

const BlogBanner = ({ frontmatter, slug, displayReadMore=true}) => {
  return (
    <div className="text-white bg-primary relative md:h-[42.5rem] mb-20 lg:mb-60">
    <div className="relative lg:absolute left-1/2 top-[15%] -translate-x-1/2 w-full max-w-[91.8rem]">
      <span className="h6 text-[1.8rem]">{frontmatter.tag}</span>
      <h1 className="text-[3.5rem] lg:text[4rem] my-5">{ frontmatter.title }</h1>
      <p className="mb-8 text-[1.8rem]">{ frontmatter.date }</p>
      <Image
              width={ 928 }
              height={ 358 }
              alt={ frontmatter.title }
              src={ `http://localhost:3000/assets${frontmatter.cover_image}` }
            />
            {frontmatter.subtitle && slug && (
                <>
                <p className="lg:text-[#5C5C5C] text-[1.6rem] mt-10 text-white ">{frontmatter.subtitle}</p>
                <Link className="text-success flex gap-3 items-center text-[1.8rem] font-bold" href={ `/blogs/${slug}` }><span className="underline"> Read More </span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
    <path d="M12.1462 7.04706L16.803 7.04705C17.3553 7.04705 17.803 7.49477 17.803 8.04705L17.803 12.7039" stroke="#258575" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17.0948 7.75419L7.19531 17.6537" stroke="#258575" strokeWidth="1.5" strokeLinecap="round"/>
    </svg></Link>
    </>
            )}

    </div>
  </div>
  )
}

export default BlogBanner
