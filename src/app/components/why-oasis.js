"use client";
import Image from "next/image";


const HomeBanner = () => {
  return (
    <>
      <section>
        <div>
            <div>
                <Image/>
            </div>
            <div>
                <h5>WE HELP YOU ACHIEVE YOUR GOALS</h5>
                <h2>Why Oasis and Oaks</h2>
                <p>Oasis & Oaks is an educational resource provider that helps you achieve your goals. 
We offer services in language development, IELTS Preparatory Class, Adult Education, Workplace/Organisational Development Training as well as securing
 genuine admissions and work placements in foreign countries.
 </p>
                <div>
                    <div>
                        <Image/>
                        <p></p>
                    </div>
                    <div>
                        <Image/>
                        <p></p>
                    </div>
                    <div>
                        <Image/>
                        <p></p>
                    </div>
                    <div>
                        <Image/>
                        <p></p>
                    </div>
                </div>
                <button>Learn More</button>
            </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;