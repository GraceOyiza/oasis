"use client";
import Image from "next/image";



const UniApplicationBanner = ({title, subtitle, bgColor, bannerImg}) => {
  return (
    <>
      <section  style={{ backgroundColor: bgColor }}>
        <div>
            <div className="flex">
                <div>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
                <div>
                    <Image src={bannerImg}/>
                    <Image src={bannerImg}/>
                    <Image src={bannerImg}/>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default UniApplicationBanner;
