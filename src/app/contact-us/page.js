import StudentVisaApplication from "../components/students-visa-application";
import SmilingMan from "../assests/images/smiling-man.png";
import Lady from "../assests/images/lady.png";
import ApplicationProcess from "../components/application-process";
import VisaOfficerExpect from "../components/visa-officers";
import Info from "../components/info-ielts-visa";
import InfoVisa from "../assests/images/info-visa.png";
import InfoVisa2 from "../assests/images/info-visa-2.png"
import SameBanner from "../components/same-banner";
import ContactBanner from "../assests/images/contact-banner.png"
import ContactBanner2 from "../assests/images/contact-banner2.png"

export default function ContactUs() {
    const visa =[
        {
            title: 'Oasis & Oaks Student Visa Application',
            subtitle: `<p> A Visa (Visitors International Stay Admission) is a legal endorsement on a person’s 
            passport stating that the approval allows a particular person to enter, stay or leave a country for a specific reason.
             Student Visa is one of the four types of visas that will enable students to legally enter a foreign country to commence their study program. </p>

            <p> A student visa is a must for those who aspire to study abroad for a particular period.
             And obtaining the visa is not easy, as it involves so many sub-processes to finalise the application form. 
             Each foreign nation has its visa processing timeline, so students should be aware of the same and start their visa application
              process at the earliest irrespective of the start date of their study program.</p>`,
              img: SmilingMan
        }
    ]
    const visa2 = [
        {
            title: 'When to Apply for a Student Visa?',
            subtitle: `<p>Students can start their visa application routine once they get an 
            official confirmation mail of admission, from the university they have applied for.</p>

            <p>Before applying for the student visa, the first thing students should do is update themselves 
            about their university’s course starting date to initiate the visa process beforehand and to complete it in a relaxed way.</p>
            
            <p> The next thing to follow is, to avail the scholarships or bursaries if they need any. 
            To get this process done, students should shortlist the scholarships available for them (based on their merit score) 
            and start applying for them. If any bursary is available for them, then they should apply for it as well. Because scholarship approval takes at least one month.</p>
            
            <p>Then the third thing to be done is, appearing for the English proficiency exam(s), whichever seems comfortable for them. 
            The English proficiency exam score is a must for visa approval.</p>
            
           <p> All these tasks must take 3 or 4 months to complete and hence students are advised to start the visa process once they are done with these routines.`,
              img: Lady,
        }
    ]

    const visa3 = [
        {
            title: 'How Does Oasis & Oaks Help You in Visa Process?',
            subtitle: `<p>Oasis & Oaks, the professional study abroad consultancy, can make things easier 
            for you in getting you the visa. We know it’s a long and tedious process that needs thoughtful financial and academic 
            preparation to set things in place before you start the process. </p>

            <p>Thus to ease things for you, we have expert counsellors in the house who can assist you in
             the process by explaining the procedures precisely and giving you first-hand information on the do’s and don’ts. 
             Furthermore, our counsellors always help you with updated visa laws that eliminate unnecessary errors and help you finish your visa process within your stipulated time.</p>`,
              img: Lady
        }
    ]

    const officersExpectation =[
        {
            title: " Admission Confirmation letter from the applied university.",
            border: "1px solid #3B68FF",
        },
        {
            title: "Proof of funds like bank statements, scholarships, bursaries, etc.",
            border: "1px solid #FBB183",
        },
        {
            title: " A valid passport that covers your stay period with six more months of validity.",
            border: "1px solid #2BB69C",
        },
        {
             title: "  Score certificate of the English proficiency exam that you attended.",
            border: "1px solid #FFC325",
        },
        {
            title: "Proof of Health Checkups and Police Inspections.",
            border: "1px solid #FF86A8",
        },
       

    ]

    const info =[
        {
            title: "How Does Oasis & Oaks Help You in Visa Process?",
            subtitle: `<p>Oasis & Oaks, the professional study abroad consultancy, can make things easier for you in getting you the visa. 
            We know it’s a long and tedious process that needs thoughtful financial and academic preparation to set things in place before you start the process.</p>

            <p>Thus to ease things for you, we have expert counsellors in the house who can assist you in the process
             by explaining the procedures precisely and giving you first-hand information on the do’s and don’ts. 
             Furthermore, our counsellors always help you with updated visa laws that eliminate unnecessary errors and help you finish your visa process within your stipulated time.</p>`,
             bgImg: InfoVisa,
             bgImg2: InfoVisa2,
        }
    ]
    return(
        <>
        <SameBanner  bannerImg1={ContactBanner}  bannerImg2={ContactBanner2} title="Our Student Visa Application" subtitle="If you are looking for how to start your journey in this track, we're your haven and best bet, 
        as we offer excellent services with track records to guarantee your success."/>
        <StudentVisaApplication visaApplication={visa}/>
        <StudentVisaApplication visaApplication={visa2}/>
        <ApplicationProcess/>
        <VisaOfficerExpect visaInfo={officersExpectation}/>
        <Info info={info}/>
        </>
    )
}