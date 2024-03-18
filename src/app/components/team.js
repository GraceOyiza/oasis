"use client";
import Image from "next/image";


const Team = ({imgInfo,  bgColor="#258575"}) => {
  return (
    <>
      <section  style={{ backgroundColor: bgColor }}>
        <div className="custom-container">
            <div>
                <h5 className="h5">THE TEAM</h5>
                <div>
                    <h1 className="h4 text-white">Meet Our Team</h1>
                    <div>
                        {/* carousel */}
                    </div>
                </div>
                <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imgInfo.map(
              (
                { bgImg, teamName, teamRole},
                index
              ) => (
                <div key={`oasis-${index}`} className="">
                  <div>
                    <div>
                      <Image src={bgImg}/>
                      <h4 className="h6">{teamName}</h4>
                      <p className="p">{teamRole}</p>
                     
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

export default Team;
