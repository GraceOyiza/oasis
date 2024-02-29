"use client";
import Image from "next/image";
import Link from "next/link";
import ArrowRight from "./arrowRight";


const StartYourJourney = ({imgDetails =[]}) => {
  return (
    <>
      <section>
        <div>
         <div>
          <div className="max-w-[70.6rem] mx-auto">
          <p className="text-primary text-center">OVERCOME YOUR BARRIERS</p>
          <h1 className="h2 font-bold text-center my-10">Start Your Journey of Excellence and Success Today </h1>
          </div>
          <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imgDetails.map(
              (
                { bgImg, title, subtitle},
                index
              ) => (
                <div key={`oasis-${index}`} className="relative bg-cover bg-no-repeat bg-center h-[30.7rem] flex flex-col pt-[89%] relative" style={{ backgroundImage: `url(${bgImg.src})`}}>
                  <div className="mt-auto backdrop-blur-lg text-white p-12 absolute bottom-0">
                    <div>
                      <h4 className="text-white text-2xl md:text-4xl font-semibold">{title}</h4>
                      <p  className="text-white text-2xl leading-8 my-6">{subtitle}</p>
                      <Link className="flex items-center text-2xl" href="/about-us">Learn More <ArrowRight /></Link>
                    </div>
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

export default StartYourJourney;
