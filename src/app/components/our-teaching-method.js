"use client";
import Image from "next/image";



const TeachingMethods = ({detailsInfo = {}}) => {
  return (
    <>
      <section  >
        <div className="custom-container px-10">
            <div>
                <h2 className="h2 font-bold">Our teaching Methods</h2>
                <div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                    {detailsInfo.map(
              (
                { borderColor,icon,iconInfo },
                index
              ) => (
                <div key={`service-${index}`} className={`border rounded-xl border-[${borderColor}] border-opacity-45`}>
                 <div className="flex items-center gap-8 p-8">
                    <Image src={icon} className="w-[5.6rem]"/>
                    <h4 className="font-bold text-2xl md:text-3xl">{iconInfo}</h4>
                 </div>
                </div>
              )
            )}
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default TeachingMethods;
