"use client";
import Image from "next/image";
import Banner from "../assests/images/study-abroad-banner-img.png";
import Banner1 from "../assests/images/study-abroad-banner-img1.png";
import Banner2 from "../assests/images/study-abroad-banner-img2.png";
import Vector5 from "../assests/images/Vector-5.png";

const StudyAbroadBanner = () => {
    return (
        <section className="pt-[10rem] lg:pt-[15rem] bg-[#FFE4D2] bg-opacity-60 pb-0">
            <div>
                <div className="relative">
                    <div className="custom-container2 text-center">
                        <h1 className="h1 mb-14">University Application Process</h1>
                        <p className=" mb-20 lg:mb-32 p-10 text-[2rem]"> If you are looking for how to start your journey in this track, 
                            we&apos;re your haven and best bet, as we offer excellent services with track 
                            records to guarantee your success.</p>
                        <div className="w-[10%] absolute right-20">
                            <Image src={Vector5} alt=""/>
                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row items-end">
                        <div className="pt-10 w-full md:w-[30%]">
                            <Image src={Banner} alt=""/>
                        </div>
                       <div className="w-full md:w-[40%]">
                            <Image src={Banner1} alt=""/>
                       </div>
                        <div className="w-full md:w-[30%]">
                            <Image src={Banner2} alt=""/>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
   
    );
  };

export default StudyAbroadBanner;
