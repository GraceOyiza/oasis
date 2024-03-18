"use client";
import Image from "next/image";
import Link from "next/link";


const SameBanner = ({title, subtitle, bgColor ="bg-[#FEF5DC]", BannerImg, BannerImg2, PointerImg, reverse=false}) => {
  return (
    <>
        <section className=" pt-[10rem] lg:pt-[15rem] lg:pb-[10rem]" style={{ backgroundColor: bgColor }}>
            <div className="custom-container p-6 lg:p-4">
                <div className={`flex flex-col lg:flex-row gap-x-32 gap-y-40 items-center ${reverse
            ? "flex-sm-column-reverse lg:flex-row-reverse"
            : "flex-sm-column flex-lg-row"
        }`}>
                    <div className="relative flex gap-x-8 w-full lg:w-[55%]">
                        <Image className="relative -top-12" width={315} height={511} src={BannerImg} alt=""/>
                        <Image className="relative -bottom-12" width={315} height={511} src={BannerImg2} alt="j"/>
                        {PointerImg && <Image className="absolute right-20" width={186} height={63} src={PointerImg} alt="y"/>}
                        
                    </div>
                    <div className="w-full lg:max-w-[51.9rem]">
                        <h2 className="h2 font-bold leading-[8rem] mb-20">{title}</h2>
                        <p className="text-3xl lg:text-[2rem] leading-[3rem] my-20">{subtitle}</p>
                        <div className="flex gap-x-7">
                            <Link className="bg-primary w-[18.5rem] h-[5.4rem] flex items-center justify-center text-white text-[1.6rem] font-semibold rounded-md" href="/" >Connect with us</Link>
                            <Link className="text-primary text-[1.6rem] font-semibold border border-[#258575] bg-transparent w-[18.5rem] h-[5.4rem] flex items-center justify-center rounded-md" href="/about" >Learn more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default SameBanner;
