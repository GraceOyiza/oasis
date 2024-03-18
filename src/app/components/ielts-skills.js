"use client";
import Image from "next/image";
import IeltSkills from "../assests/images/ieltsskills.png"

const SkillsIelts= () => {
  return (
    <>
      <section>
        <div className="custom-container">
            <div className="flex flex-col lg:flex-row pt-20 pb-0 lg:py-40 gap-16">
                <div className="flex-1">
                    <Image src={IeltSkills} alt="" />
                </div>
                <div className="flex-1 gap-16">
                    <p className="p-20">IELTS exam can be Academic or General, and it assesses four key skills - Listening, Reading, Writing, and Speaking.  Both versions 
                        provide valid and accurate assessment of the four language skills. While the Listening and Speaking section of both Academic and General 
                        exams are the same, the Reading and Writing Task 1 sections, differ. The Academic exam is for people applying for professional registration
                         or higher education, particularly to universities in the UK, Ireland, Australia, New Zealand, the US and Canada while the General
                         Training is for those migrating to Australia, Canada and the UK, or applying for training programs and work experience in an English-speaking environment. </p>
                </div>
            </div>
           

        </div>
      </section>
    </>
  );
};

export default SkillsIelts;

