"use client";
import Image from "next/image";
import HomeBannerImage from '../assests/images/home-banner.png';
import Link from "next/link";
import { usePathname } from "next/navigation";

const HomeBanner = () => {
    const pathname = usePathname()
  return (
    <>
      <section className={`home-banner ${!pathname.includes('blog') ? 'pt-[4rem]': 'pt-0'}`}>
        <div className="mt-[5rem] p-[2rem]">
            <div className="flex items-center relative home-banner__wrapper lg:mt-[5rem] flex-col-reverse md:flex-row">
                <div className="w-full custom-container ">
                    <div>
                        <h1 className="h1 text-white">Scale your Hurdles<br/> Lead The Way to your <span className="text-success">Future</span></h1>
                    </div>
                    <div className="max-w-[47rem]">
                        <p className=" text-white sub-title mb-8">
                            Connect with your goals - study, academic, career, language, professional, and personal goals.
                        </p>
                        <p className="text-white sub-title">
                            We can help you gain mastery of what matters to you, Learn from the Experts!
                        </p>
                    </div>
                    <div className="flex gap-8 mt-8">
                        <Link href="#" className="button text-white bg-[#D5A100] p-5 rounded-md">Connect with Us</Link>
                        <Link href="#" className="button text-white border border-white p-5 rounded-md">Learn More</Link>
                    </div>
                </div>
                <div className="relative lg:absolute right-0 bottom-0 w-full lg:w-1/2 mb-8 max-w-[81.2rem] max-h-[73.9rem]">
                    <Image src={HomeBannerImage} width={812} height={736} alt="home banner"/>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
