
import Image from "next/image";
import Info from "../components/info-ielts-visa";
import InfoVisaImg2 from "../assests/images/info-visa-2.png"
import InfoVisaImg from "../assests/images/info-visa.png";


import BannerImg from "../assests/images/contact-banner-img.png";
import BannerImg2 from "../assests/images/contact-banner-img-2.png";
import PointerImg from "../assests/images/pointer.png";
import Link from "next/link";
import VisaOfficerExpect from "../components/visa-officers";
import StudentVisaApplication from "../components/students-visa-application";
import ApplyForStudentVisa from "../components/apply-for-student-visa";
import SameBanner from "../components/same-banner";

export default function ContactUs() {
   const info =[
        {
            title: "How Does Oasis & Oaks Help You in Visa Process?",
            subtitle: `<p>Oasis & Oaks, the professional study abroad consultancy, can make things easier for you in getting you the visa. 
            We know it’s a long and tedious process that needs thoughtful financial and academic preparation to set things in place before you start the process.</p>

            <p>Thus to ease things for you, we have expert counsellors in the house who can assist you in the process
             by explaining the procedures precisely and giving you first-hand information on the do’s and don’ts. 
             Furthermore, our counsellors always help you with updated visa laws that eliminate unnecessary errors and help you finish your visa process within your stipulated time.</p>`,
             bgImg: InfoVisaImg,
             bgImg2: InfoVisaImg2,
        }
    ]
  
    const offeicerexpectations = [
        {
            text: 'Admission Confirmation letter from the applied university.',
            borderColor: '#3B68FF'
        },
        {
            text: "Proof of funds like bank statements, scholarships, bursaries, etc.",
            borderColor: '#FBB183'
        },
        {
            text: " A valid passport that covers your stay period with six more months of validity.",
            borderColor: '#2BB69C'
        },
        {
            text: "  Score certificate of the English proficiency exam that you attended.",
            borderColor: '#FFC325'
        },
        {
            text: "Proof of Health Checkups and Police Inspections.",
            borderColor: '#FF86A8'
        }
    ];
    return(
        <>
        {/* <section className="bg-[#FEF5DC] pt-[10rem] lg:pt-[15rem] lg:pb-[10rem]">
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
        </section> */}
        <SameBanner title="Our Student Visa Application" subtitle="If you are looking for how to start your journey in this track, we&apos;re your 
        haven and best bet, as we offer excellent services with track records to guarantee your success." BannerImg={BannerImg} BannerImg2={BannerImg2} PointerImg={PointerImg}/>
        <StudentVisaApplication/>
        <ApplyForStudentVisa/>
        
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
       
        <VisaOfficerExpect expectations={offeicerexpectations} />
        <Info info={info}/>
        </>
    )
}