"use client";

import Image from "next/image";
import VisaImg from "../assests/images/visa.png";

const StudentVisaApplication = () => {
  return (
    <section className="bg-[#81410B]">
    <div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-x-20 gap-y-32 relative">
            {/* <div></div> */}
            <div className="p-10 lg:w-[35%]">
                <div className="lg:absolute lg:top-2/4 lg:-translate-y-2/4 lg:w-[100%]">
                    <div className="relative custom-container">
                        <div className="lg:max-w-[62.7rem]">
                            <h4 className="text-3xl lg:text-5xl text-white font-bold mb-16">Oasis & Oaks Student Visa Application</h4>
                            <div className="">
                                <p className="text-3xl text-white leading-[3rem] mb-16"> A Visa (Visitors International Stay Admission) is a legal endorsement on a person’s passport stating that the approval allows a particular person to enter, stay or leave a country for a specific reason. Student Visa is one of the four types of visas that will enable students to legally enter a foreign country to commence their study program.</p>
                                <p className="text-3xl text-white leading-[3rem]"> A student visa is a must for those who aspire to study abroad for a particular period. And obtaining the visa is not easy, as it involves so many sub-processes to finalise the application form. Each foreign nation has its visa processing timeline, so students should be aware of the same and start their visa application process at the earliest irrespective of the start date of their study program.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:min-w-[65%]">
                <Image src={VisaImg} />
            </div>
        </div>
    </div>
</section>
  );
};

export default StudentVisaApplication;
