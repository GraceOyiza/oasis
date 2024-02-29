"use client";
import Image from "next/image";


const StudyAreas = ({ title, studyAreasImg=[] }) => {
    return (
        <section>
            <div>
                <div>
                    <h1>{title}</h1>
                    <div>
                    {studyAreasImg.map(
              (
                { src,country,info,moreInfo },
                index
              ) => (
                <div key={`areas-${index}`}>
                  <div>
                  </div>
                </div>
              )
            )}
                    </div>
                </div>
            </div>
        </section>
   
    );
  };

export default StudyAreas;
