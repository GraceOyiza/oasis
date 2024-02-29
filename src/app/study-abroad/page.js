"use client"
import Steps from "../components/steps";
import StudyAbroadBanner from "../components/study-abroad-banner";
import Step1 from "../assests/images/step1.png";
import Step2 from "../assests/images/step2.png";
import Step3 from "../assests/images/step3.png";
import Step4 from "../assests/images/step4.png";

export default function StudyAbroad() {
    const steps = [
        {
            stepImg: Step1,
            mainTitle: "STEP 1",
            title: 'Free Study Abroad Counselling',
            subtitle: "<p>To study abroad, particularly in English-speaking countries, there are many criteria that students have to fullfil. Starting from scoring high in the English subject in the senior-secondary school exams to in English proficiency exams, everything matters.</p><p>Some countries waivers the necessity of English proficiency exam scores only if certain conditions are met. They are, scoring high marks in English during school or must have had studied in a school with the medium of instruction as English.</p><p>At Oasis and Oaks, we provide students with professional tutors to help them learn about the English proficiency exams like TOEFL, IELTS, PTE, GMAT, GRE, SAT and ACT syllabus. They teach profoundly about each section of the exam and motivate them to score well in them. Scoring a remarkable mark in these exams will help students make a great first impression on the universities.</p>",
        },
        {
            stepImg: Step2,
            mainTitle: "STEP 2",
            title: 'Study Abroad Destination, Course & University',
            subtitle: `<p>In the above section, we have briefly explained us and what we do. From here, let us see all the indispensable steps, 
                        precisely, that have to be done and are crucial for realizing your overseas education dream.</p>

                        <p>After learning your interests and academic achievements, our expert counsellors will start preparing 
                        the list of the right education destinations, universities and the courses that can altogether propel your career growth 
                        If students have any other particular preferences, that will also be taken into consideration.</p>

                        <p>Then the prepared list will be shared with the students to help them understand their probabilities and possibilities. 
                        From the list, students have to select their preferred education destination, the country’s 3 to 4 universities, etc. 
                        Before that students have to make sure that they have high marks in hand to be eligible to apply to the top universities.</p>`,
        },
        {
            stepImg: Step3,
            mainTitle: "STEP 3",
            title: 'Eligibility Requirements',
            subtitle: `<p>To study abroad, particularly in English-speaking countries, there are many criteria that students have to fullfil. 
            Starting from scoring high in the English subject in the senior-secondary school exams to in English proficiency exams, everything matters.</p>

            <p>Some countries waivers the necessity of English proficiency exam scores only if certain conditions are met. 
            They are, scoring high marks in English during school or must have had studied in a school with the medium of instruction as English.</p>
            
            <p>At Oasis and Oaks, we provide students with professional tutors to help them learn about the English proficiency exams 
            like TOEFL, IELTS, PTE, GMAT, GRE, SAT and ACT syllabus. They teach profoundly about each section of the exam and motivate them to 
            score well in them. Scoring a remarkable mark in these exams will help students make a great first impression on the universities.<p>`,
        },
        {
            stepImg: Step4,
            mainTitle: "STEP 4",
            title: 'Document Review',
            subtitle: `<p>Once you are done with your English proficiency exam and achieved the desired score,
             it is time to prepare the documents for the university admission process. Since we have a professional establishment with the top universities, 
             our counsellors can assist you with the same. <p>

            <p> They will list out all the imperative documents like your academic mark sheets, letter of recommendation, statement of purpose, 
            curriculum vitae, score certificate of your English proficiency exam, etc. While filling in the application form, students have to be careful. 
            They should precisely fill in the information as asked in the form. Then students have to attach the proof for their statements which may be mark sheets, 
            citizenship proof, etc.</p>
            
            <p>If students want help in writing a clear and impressive Statement of Purpose, our counsellors can very well help with that.
             A letter of recommendation should be from the student’s previous institution head or company’s head. Once you have all the necessary documents,
              you can file them and hand them over to our counsellors. They will double-check them and send them to your preferred universities and track the status of your applications.</p>`,
        },
    ]

    const subSteps = [
        {
            mainTitle: "STEP 5",
            title: 'Admission Process',
            subtitle: `<p>Each university has its own admission process. Their application release date and ending date also vary. 
            In some countries like Canada, the admission process is purely based on academic marks while in some countries like the USA, 
            the admission is based on your unique talents, community involvement and extracurricular activities. Also, Some universities have two intakes per year.</p> 

           <p> While some universities have three intakes per year. So students have to be aware and be updated about all the information. 
           In this scenario, we will assist students in the complete admission process and will also inform them about the status of their applications.</p>`,
        },
        {
            mainTitle: "STEP 6",
            title: 'Interview Preparation',
            subtitle: `<p>When students’ applications are shortlisted by the universities, the next step for them is to 
            prepare for the interview conducted by them. In the interview, mainly students’ English skills are assessed.</p> 

            <p>If the universities waivers the English proficiency exam scores, then they will surely conduct 
            interviews to particularly find the students’ knowledge and understanding of English. The test is conducted to know the students’ 
            capability of sustaining in a new environment by having fluent English skills.</p>
            
            <p> Students, if need any help in the interview preparation process, our counsellors will be more than happy to assist.
             We provide one-on-one sessions for students giving them tips and points to score well in the interview. Students can also attend 
             our English-proficiency courses like IELTS, TOEFL, etc to improve their English skills.</p>`,
        },
        {
            mainTitle: "STEP 7",
            title: 'Scholarship Guidance',
            subtitle: `<p>Students can apply for scholarships only when their admission is confirmed by the universities 
            they have applied for. They have to choose the scholarships based on the score they have earned in their previous study course.</p> 

           <p> To apply for the scholarships, students need to attach their mark sheets, admission confirmation form, passport size photo, 
           citizenship proof and others. We promptly help students to apply for the scholarships also, if students face any difficulty in them.</p>`,
        },
        {
            mainTitle: "STEP 8",
            title: 'Fees Payment',
            subtitle: `<p>Once the admission is confirmed and also the scholarship, students need to initiate their fee payment. 
            If students are awarded fully-funded scholarship, they need not pay the tuition fees but if not, then students have to pay the tuition fees. </p>

            <p>Students, if face any trouble in paying the fees, can seek the help of our counsellors who can assist them in successfully completing the fee payment process.</p>`,
        },
        {
            mainTitle: "STEP 9",
            title: 'Visa Application Process',
            subtitle: `<p> Applying for visa is the last step in the Abroad education journey. Visa has to be applied only after the admission 
            is confirmed and the fee payment is done. The visa process varies from country to country so once the admission is done, students can 
            initiate their visa application process. </p>

            <p> There are two types of visas available in each country. One is a short-term visa and the other is a long-term visa.
             Students need to be attentive to which visa they want to apply for. During visa application, students need to provide
              the proof of admission confirmation, proof of their capacity to pay the tuition fees, airfare cost, living cost, 
              score certificate of English proficiency exam, proof of health check-up, etc. In the last step of the abroad education journey,
               our counsellors will be ready to assist you with how to answer the visa interview questions by conducting a mock session of the same.</p>`,
        },
        {
            mainTitle: "STEP 10",
            title: 'Pre Departure Sessions',
            subtitle: `<p>Pre-departure sessions are all about doing a last-minute checkup on the needed things and advising students 
            on the do’s and dont’s after arriving at their destination. </p>

            <p>It is also about preparing students on the behavioural and cultural change in the country. 
            Finally, our counsellors will make sure that students have a hassle-free education journey before and after their departure.</p>`,
        },
    ]
    return(
        <>
        <StudyAbroadBanner/>
        <Steps guideSteps={steps} subGuideSteps={subSteps}/>
       
        </>
    )
}