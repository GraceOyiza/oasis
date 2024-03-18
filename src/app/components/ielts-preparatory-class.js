"use client";
import Image from "next/image";
import Img1 from "../assests/images/preparatory-exam1.png";
import Img2 from "../assests/images/prepareratory-exams2.png"

const IeltsPreparatoryClass= ({bgColor = "#D2FFF7"}) => {
  return (
    <>
      <section style={{backgroundColor: bgColor}} className="pt-[10rem] px-[2rem] lg:pt-[10rem]">
        <div className="custom-container">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex-1">
                <Image src={Img1} width={447} height={476} className="relative -lg:bottom-12"/>
            </div>
            <div className="text-center p-8 lg:pt-[10rem] lg:max-w-[52.3rem]">
                <h1 className="h1">IELTS Exam Preparatory Class</h1>
                <p>If you are looking to study, develop a career, or settle in an English-speaking country, IELTS can pave the way for you in all these endeavors    </p>
            </div>
            <div className="flex-1">
                <Image src={Img2} width={447} height={476} className="relative -lg:top-[5rem]"/>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default IeltsPreparatoryClass;

