"use client";
import Image from "next/image";
import Link from "next/link";


const Steps = ({bgColor = "#258575", guideSteps = [], subGuideSteps=[]}) => {
  return (
    <>
      <section>
        <div className="pt-10 md:pt-[10rem] pb-20 custom-container"  style={{backgroundColor: bgColor}}>
          <div className="">
              <div  className="p"> 
                  <div className="">
                  {guideSteps.map(
                (
                  {  mainTitle, title, subtitle, stepImg},
                  index
                ) => (
                  <div key={`steps-${index}`} className={`flex flex-col pt-10  px-10 md:pt-20 lg:gap-[6rem] items-center ${index % 2 === 0 ? 'lg:flex-row lg:pe-0': 'lg:flex-row-reverse lg:ps-0'}`} >
                    <div className="w-full lg:w-[60%]">
                          <p className="text-[2.4rem] font-semibold" style={{color: "#FDEA60"}}>{mainTitle}</p>
                          <h4 className="text-white text-[3.2rem] font-semibold my-10">{title}</h4>
                          <p dangerouslySetInnerHTML={{ __html: subtitle }} className="text-white pb-10 text-[1.6rem] leading-10 content-wrapper"/>
                      </div>
                      <div className="w-full lg:w-[40%]">
                          <Image src={stepImg} width={447} height={476}/>
                      </div>
                  </div>
                )
              )}
                  </div>
              </div>
          </div>
        </div>
        <div>
          <div className="custom-container">     
            <div className="flex flex-col md:flex-row md:flex-wrap gap-12 p-14 lg:px-0">
              
                {subGuideSteps.map(
              (
                {  mainTitle, title, subtitle},
                index
              ) => (
                <div key={`steps-${index}`} className="bg-[#1B1B1B]/[0.05] w-full md:w-[48%]">
                   <div className=" p-20">
                        <p className="text-[2.4rem] font-semibold" style={{color: "#D5A100"}}>{mainTitle}</p>
                        <h4 className="text-[3.2rem] font-semibold my-10">{title}</h4>
                        <p className="pb-10 text-[1.6rem] leading-10 content-wrapper" dangerouslySetInnerHTML={{ __html: subtitle }} />
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

export default Steps;

