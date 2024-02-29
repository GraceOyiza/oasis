"use client";
import Image from "next/image";


const ApplicationProcess = () => {
  return (
    <>
      <section className="text-white bg-slate-950">
        <div className="custom-container">
           <div className="flex flex-col md:flex-row">
            <div>
                <h3 className="h4">Student Visa Application Process</h3>
                <p>As we said earlier, students can start their visa application routine once they receive the acceptance letter from
                     the university they have applied for. Once students receive the acceptance letter through email, they can submit the visa application form in two ways.</p>
                     <p>The second step is, students, after successfully submitting the application form and all the supporting documents, need to pay their visa application fee.</p>

                    <p>After paying the fee, the following steps vary for each country, like the US requires students to fill in the SEVP and I-20 forms, while Canada doesn’t demand filling out such forms. 
                    So, to be better aware of the visa application forms of each country, it is advisable for the students to reach the visiting country’s visa information website.</p>
            </div>
            <div className="bg-slate-900	">
                <div className="p-10 md:p-[5rem]">
                    <h5 className="h6">Online</h5>
                    <p className="p">As everything becomes digital, the visa process can also be done Online. The more convenient of the two because right from filling the form to uploading the necessary 
                        documents will be easy. Students can start their visa application by creating a student profile on the visiting country’s embassy and consulate website.</p>
                </div>
                <div className="p-10 md:p-[5rem]">
                    <h5 className="h6">Offline</h5>
                    <p className="p">In the Offline method, students can download the application form, fill in all the details 
                        as asked and submit it to the visiting country’s Embassy and Consulate office.</p>
                </div>
            </div>
           </div>

        </div>
      </section>
    </>
  );
};

export default ApplicationProcess;
