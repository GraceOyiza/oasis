import Image from "next/image";
import ApplyImg from "../assests/images/ApplyImg.png";
import ApplyImgBg from "../assests/images/ApplyImgBg.png";
import VisaImg from "../assests/images/visa.png";
import BannerImg from "../assests/images/contact-banner-img.png";
import BannerImg2 from "../assests/images/contact-banner-img-2.png";
import PointerImg from "../assests/images/pointer.png";
import Link from "next/link";

 const Events = () => {
   
    const offeicerexpectations = [
        {
            text: 'Admission Confirmation letter from the applied university.',
            borderColor: '#3B68FF'
        },
        {
            text: 'Admission Confirmation letter from the applied university.',
            borderColor: '#FBB183'
        },
        {
            text: 'Admission Confirmation letter from the applied university.',
            borderColor: '#2BB69C'
        },
        {
            text: 'Admission Confirmation letter from the applied university.',
            borderColor: '#FFC325'
        },
        {
            text: 'Admission Confirmation letter from the applied university.',
            borderColor: '#FF86A8'
        }
    ];

    return(
        <>
        <section className="bg-[#FEF5DC] pt-[10rem] lg:pt-[15rem] lg:pb-[10rem]">
            <div className="custom-container p-20 lg:p-4">
                <div className="flex flex-col lg:flex-row gap-x-32 gap-y-40 items-center">
                    <div className="relative flex gap-x-8 w-full lg:w-[55%]">
                        <Image className="relative -top-12" width={315} height={511} src={BannerImg} />
                        <Image className="relative -bottom-12" width={315} height={511} src={BannerImg2} />
                        <Image className="absolute right-20" width={186} height={63} src={PointerImg} />
                    </div>
                    <div className="w-full lg:max-w-[51.9rem]">
                        <h2 className="h2 font-bold leading-[8rem] mb-20">Our Student Visa Application</h2>
                        <p className="text-3xl lg:text-[2rem] leading-[3rem] my-20">If you are looking for how to start your journey in this track, we&apos;re your haven and best bet, as we offer excellent services with track records to guarantee your success.</p>
                        <div className="flex gap-x-7">
                            <Link className="bg-primary w-[18.5rem] h-[5.4rem] flex items-center justify-center text-white text-[1.6rem] font-semibold rounded-md" href="/" >Connect with us</Link>
                            <Link className="text-primary text-[1.6rem] font-semibold border border-[#258575] bg-transparent w-[18.5rem] h-[5.4rem] flex items-center justify-center rounded-md" href="/about" >Learn more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
        <section  className="my-[14rem]">
            <div className="custom-container">
                <div className="flex flex-col lg:flex-row  gap-x-14 gap-y-32">
                    <div className="relative w-full lg:w-2/4 lg:min-w-[45%] lg:max-w-[52.9rem] flex items-end">
                        <Image width={575} height={675} src={ApplyImgBg} className="relative" />
                        <Image width={575} height={675} src={ApplyImg} className="absolute left-2/4 -translate-x-2/4 max-w-[95%] bottom-0" />
                    </div>
                    <div className="p-10 lg:p-0">
                        <h4 className="text-3xl font-semibold md:text-[4rem] mb-12 leading-10">When to Apply for a Student Visa?</h4>
                        <p className="mb-10 leading-[3rem] text-3xl">Students can start their visa application routine once they get an official confirmation mail of admission, from the university they have applied for.</p>

                        <p className="mb-10 leading-[3rem] text-3xl">Before applying for the student visa, the first thing students should do is update themselves about their university’s course starting date to initiate the visa process beforehand and to complete it in a relaxed way.</p>

                        <p className="mb-10 leading-[3rem] text-3xl">The next thing to follow is, to avail the scholarships or bursaries if they need any. To get this process done, students should shortlist the scholarships available for them (based on their merit score) and start applying for them. If any bursary is available for them, then they should apply for it as well. Because scholarship approval takes at least one month.</p>

                        <p className="mb-10 leading-[3rem] text-3xl">Then the third thing to be done is, appearing for the English proficiency exam(s), whichever seems comfortable for them. The English proficiency exam score is a must for visa approval.</p>

                        <p className="mb-10 leading-[3rem] text-3xl">All these tasks must take 3 or 4 months to complete and hence students are advised to start the visa process once they are done with these routines.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-[#001A15] text-white">
            <div className="custom-container">
                <div className="flex flex-col lg:flex-row gap-x-12 gap-y-26 px-14 py-32 md:px-12 md:py-36 lg:py-40 lg:px-0">
                    <div className="mb-28 lg:mb-0">
                        <h4 className="text-3xl font-semibold md:text-[4rem] mb-20 leading-10">Student Visa Application Process</h4>
                        <div>
                            <p className="text-[1.8rem] leading-10">As we said earlier, students can start their visa application routine once they receive the acceptance letter from the university they have applied for. Once students receive the acceptance letter through email, they can submit the visa application form in two ways.</p>
                            <p className="my-16 text-[1.8rem] leading-10">The second step is, students, after successfully submitting the application form and all the supporting documents, need to pay their visa application fee.</p>
                            <p className="text-[1.8rem] leading-10">After paying the fee, the following steps vary for each country, like the US requires students to fill in the SEVP and I-20 forms, while Canada doesn’t demand filling out such forms. So, to be better aware of the visa application forms of each country, it is advisable for the students to reach the visiting country’s visa information website.</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-y-20">
                            <div className="bg-white/5 p-14 rounded-lg">
                                <h6 className="font-bold capitalize text-2xl mb-10">Online</h6>
                                <p className="text-[1.4rem] leading-10">As everything becomes digital, the visa process can also be done Online. The more convenient of the two because right from filling the form to uploading the necessary documents will be easy. Students can start their visa application by creating a student profile on the visiting country’s embassy and consulate website.</p>
                            </div>

                            <div className="bg-white/5 p-14 rounded-lg">
                                <h6 className="font-bold capitalize text-2xl mb-10">Offline</h6>
                                <p className="text-[1.4rem] leading-10">In the Offline method, students can download the application form, fill in all the details as asked and submit it to the visiting country’s Embassy and Consulate office.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section>
            <div>
                <div className="custom-container p-20">
                    <div className="">
                        <h2 className="h2 text-black text-center mb-20 font-bold">Other common things visa officers expect</h2>
                        <div className="flex items-center flex-wrap gap-x-8 gap-y-16 justify-center">
                            {offeicerexpectations.map(({ text, borderColor }, index) => (
                                <span key={`expectation-${index}`} className={`border w-[34.3rem] h-[12.7rem] text-[2rem] font-bold flex items-center justify-center text-center`} style={{ borderColor }}>
                                    {text}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        </>
    )
}

export default Events;