"use client";
import Image from "next/image";
import Link from "next/link";


const SameBanner = ({title, subtitle, bgColor, bannerImg1, bannerImg2}) => {
  return (
    <>
      <section  style={{ backgroundColor: bgColor }}>
        <div className="custom-container py-14 px-10 pb-40">
            <div className="flex flex-col lg:flex-row justify-between md:gap-16 lg:gap-20">
                <div className="max-w-[48.6rem] mb-10 md:mb-0">
                    <h1 className="h2 font-semibold">{title}</h1>
                    <p>{subtitle}</p>
                    <div className="flex">
                      <Link href="/" className="link-connect">Connect with us</Link>
                      <Link href="/"className="link-learn">Learn More</Link> 
                       
                    </div>
                </div>
                <div className="flex md:flex-1">
                  <Image src={bannerImg2} className="relative flex-1 object-cover"/>
                  <Image src={bannerImg1} className="relative ms-5 top-20 flex-1 object-cover"/>
               
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default SameBanner;
