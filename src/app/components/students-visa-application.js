"use client";
import Image from "next/image";


const StudentVisaApplication = ({visaApplication = [], bgColor}) => {
  return (
    <>
      <section style={{backgroundColor: bgColor}}>
        <div>
            <div>
            {visaApplication.map(
                (
                  { title,subtitle, img },
                  index
                ) => (
                  <div key={`oasis-${index}`}>
                      <div className="" >
                          <h2 className="h3">{title}</h2>
                          <p dangerouslySetInnerHTML={{ __html: subtitle }} />
                      </div>
                      <div>
                        <Image className="w-[2.4rem]" src={img} alt=""/> 
                      </div>
                    
                  </div>
                )
              )}
            </div>

        </div>
      </section>
    </>
  );
};

export default StudentVisaApplication;
