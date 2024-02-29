"use client";
import Image from "next/image";
import SideImg from "../assests/images/choose-side-img.png"

const WhyChooseOasis = ({title, chooseOasis={}}) => {
  return (
    <>
      <section  className="bg-[#001A15]">
        <div className=" px-20 md:px-10 md:pr-0">
           <div className="text-white">
            <div className="flex flex-col md:flex-row pl-0 md:pl-20 justify-between">
              <div className="flex-1">
              <h1 className="h2 font-semibold mt-20 mb-16">{title}</h1>
              <div className="grid grid-col-1 sm:grid-cols-2 gap-6 md:flex-1">
              {chooseOasis.map(
                (
                  { icon, iconText },
                  index
                ) => (
                  <div key={`oasis-${index}`}>
                      <div className="bg-white/[0.05] flex p-12 items-center" >
                          <Image className="w-[2.4rem]" src={icon}/> 
                          <p className="ms-10 text-3xl capitalize font-bold">{iconText}</p>
                      </div>
                    
                  </div>
                )
              )}
              </div>
              </div>
              <div className="md:w-[40%] mt-14 md:mt-0">
                <Image src={SideImg} />
              </div>
            </div>
           </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseOasis;
