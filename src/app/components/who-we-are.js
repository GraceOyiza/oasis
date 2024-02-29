"use client";
import Image from "next/image";



const WhoWeAre = ({title, subtitle, Img1 ,Img2}, bgColor) => {
  return (
    <>
      <section  style={{ backgroundColor: bgColor }}>
        <div>
            <div className="flex flex-col lg:flex-row gap-20 p-20">
              <div className="relative lg:flex-1">
                      <Image src={Img2} className="relative"/>
                      <Image src={Img1} className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 max-w-[90%]"/>
              </div>
                <div className="lg:flex-1">
                    <h1 className="h2 font-semibold capitalize">{title}</h1>
                    <p className="text-2xl lg:text-3xl leading-[4rem]">{subtitle}</p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
