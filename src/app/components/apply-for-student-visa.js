"use client";
import ApplyImg from "../assests/images/ApplyImg.png";
import ApplyImgBg from "../assests/images/ApplyImgBg.png";
import Image from "next/image";

const ApplyForStudentVisa = () => {
  return (
    <section className="my-[14rem]">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row  gap-x-14 gap-y-32">
          <div className="relative w-full lg:w-2/4 lg:min-w-[45%] lg:max-w-[52.9rem] flex items-end">
            <Image
              width={575}
              height={675}
              src={ApplyImgBg}
              className="relative"
              alt=""
            />
            <Image
              width={575}
              height={675}
              src={ApplyImg}
              className="absolute left-2/4 -translate-x-2/4 max-w-[95%] bottom-0"
              alt=""
            />
          </div>
          <div className="p-10 lg:p-0">
            <h4 className="text-3xl font-semibold md:text-[4rem] mb-12 leading-10">
              When to Apply for a Student Visa?
            </h4>
            <p className="mb-10 leading-[3rem] text-3xl">
              Students can start their visa application routine once they get an
              official confirmation mail of admission, from the university they
              have applied for.
            </p>

            <p className="mb-10 leading-[3rem] text-3xl">
              Before applying for the student visa, the first thing students
              should do is update themselves about their university’s course
              starting date to initiate the visa process beforehand and to
              complete it in a relaxed way.
            </p>

            <p className="mb-10 leading-[3rem] text-3xl">
              The next thing to follow is, to avail the scholarships or
              bursaries if they need any. To get this process done, students
              should shortlist the scholarships available for them (based on
              their merit score) and start applying for them. If any bursary is
              available for them, then they should apply for it as well. Because
              scholarship approval takes at least one month.
            </p>

            <p className="mb-10 leading-[3rem] text-3xl">
              Then the third thing to be done is, appearing for the English
              proficiency exam(s), whichever seems comfortable for them. The
              English proficiency exam score is a must for visa approval.
            </p>

            <p className="mb-10 leading-[3rem] text-3xl">
              All these tasks must take 3 or 4 months to complete and hence
              students are advised to start the visa process once they are done
              with these routines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyForStudentVisa;
