"use client";
import Image from "next/image";
import IeltsPhoto from "../assests/images/ielts-info.png"

const IeltsInfo= () => {
  return (
    <>
        <section>
            <div className="custom-container">
                <div className="flex flex-col lg:flex-row justify-between pt-16 pb-12 lg:pt-20 px-10 lg:px-0">
                    <p>The International English Language Testing System (IELTS) seeks to test students English Language proficiency. The IELTS exam was developed by some of the world’s leading language assessment experts to test students' full range of skills, and is often needed to study or work successfully in an English speaking country. 
                    The IELTS exam is highly revered and widely recognised as a popular English language proficiency test for higher education and global migration.</p>
                    <p>If you are looking to study, develop a career, or settle in an English-speaking country, especially in nations like Australia, 
                        Canada, New Zealand and the United Kingdom, IELTS can pave the way for you in all these endeavors. This means when you take an IELTS test, 
                        you can be confident that the result will be recognized
                         by any educational institution, employer, or professional body, that wishes to verify your English language proficiency. </p>
                </div>
                <div>
                    <Image src={IeltsPhoto}/>
                </div>
            </div>
        </section>
    </>
  );
};

export default IeltsInfo;

