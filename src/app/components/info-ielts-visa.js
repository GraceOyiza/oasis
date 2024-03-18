"use client";
import Image from "next/image";


const Info = ({info = [], bgColor}) => {
  return (
    <>
      <section style={{backgroundColor: bgColor}}>
        <div className="custom-container">
            <div >
                <div className="">
            {info.map(
                (
                    { bgImg, bgImg2, title, subtitle},
                    index
                ) => (
                    <div key={`info-${index}`} className="flex flex-col lg:flex-row gap-20 ">
                        <div className="p-20">
                            <h2 className="h2">{title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: subtitle }} />
                        </div>
                        <div className="w-full md:w-[40%] md:min-w-[40%] relative">
                            <Image src={bgImg2} className="relative" alt=""/>
                            <Image src={bgImg} className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 h-full object-contain" alt=""/>
                        </div>
                    </div>
                )
                )}
                </div>
            </div>

        </div>
      </section>
    </>
  );
};

export default Info;

