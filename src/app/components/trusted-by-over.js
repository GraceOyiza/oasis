"use client";
import Image from "next/image";


const TrustedBy = () => {
  return (
    <>
      <section>
        <div>
          <div>
                <h2>Trusted by over 100s of Students, 
                  Parents & Professionals Worldwide. Since 2014.
                  </h2>
                <div>
                    <ul>
                      <li>
                        <p>100+</p>
                        <span>Clients Reviews</span>
                      </li>
                      <li>
                        <p>55+</p>
                        <span>Student Ratings</span>
                      </li>
                      <li>
                        <p>A+</p>
                        <span>Grade Results</span>
                      </li>
                      <li>
                        <p>5+</p>
                        <span>Countries</span>
                      </li>
                    </ul>
                </div>
                <button>Connect with Us</button>
          </div>
          <div>
            <Image />
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedBy;
