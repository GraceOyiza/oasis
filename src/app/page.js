"use client"
import Image from "next/image";
import Link from "next/link";
import HomeBanner from "./components/home-banner";
import SuccessCard from './components/successCard';
import SuccessStoryImage1 from './assests/images/success_1.png';
import SuccessStoryImage2 from './assests/images/success_2.png';
import SuccessStoryImage3 from './assests/images/success_3.png';
import SuccessStoryImage4 from './assests/images/success_4.png';
import SuccessStoryImage5 from './assests/images/success_5.png';
import SuccessStoryImage6 from './assests/images/success_6.png';
import WhyOasis from './assests/images/why-oasis.png';
import WorldMap from './assests/images/world.png';
import UkFlag from './assests/images/uk-flag.png';
import Canada from './assests/images/canada.png';
import Australia from './assests/images/australia.png';
import Ireland from './assests/images/ireland.png';
import NewZealand from './assests/images/new-zealand.png';
import Usa from './assests/images/usa.png';
import GroupImage from './assests/images/groupie.png';
import ArrowRight from "./components/arrowRight";
import UserIcon from "./components/UserIcon";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/home.css';
import OvercomingYourBarrier from "./components/overcome-your-barriers";
import WhyOasisSession from "./components/why-oasis";


const Home = () => {
  const successStories = [
    {
      title: 'Application Process',
      description: `We know that applying for a foreign university can be tedious and nerve-racking, and that is where we excel!
      We got you covered, as we can help you ace your international university application process without worry!`,
      image: SuccessStoryImage1,
      borderColor:'#FFAF00'
    },
    {
      title: 'Application Process',
      description: `We know that applying for a foreign university can be tedious and nerve-racking, and that is where we excel!
      We got you covered, as we can help you ace your international university application process without worry!`,
      image: SuccessStoryImage2,
      borderColor:'#FFAF00'
    },
    {
      title: 'Application Process',
      description: `We know that applying for a foreign university can be tedious and nerve-racking, and that is where we excel!
      We got you covered, as we can help you ace your international university application process without worry!`,
      image: SuccessStoryImage3,
      borderColor:'#FFAF00'
    },
    {
      title: 'Application Process',
      description: `We know that applying for a foreign university can be tedious and nerve-racking, and that is where we excel!
      We got you covered, as we can help you ace your international university application process without worry!`,
      image: SuccessStoryImage4,
      borderColor:'#FFAF00'
    },
    {
      title: 'Application Process',
      description: `We know that applying for a foreign university can be tedious and nerve-racking, and that is where we excel!
      We got you covered, as we can help you ace your international university application process without worry!`,
      image: SuccessStoryImage5 ,
      borderColor:'#FFAF00'
    },
    {
      title: 'Application Process',
      description: `We know that applying for a foreign university can be tedious and nerve-racking, and that is where we excel!
      We got you covered, as we can help you ace your international university application process without worry!`,
      image: SuccessStoryImage6,
      borderColor:'#FFAF00'
    }
  ];

  const studyLocations = [
    {
      image: Canada,
      country: 'Canada',
      title: 'Diversity and open-mindedness are the fabrics of Canada. This is the reason why thousands of international students have chosen to study in Canada and make the country their permanent home in recent times.'
    },
    {
      image: Australia,
      country: 'Australia',
    },
    {
      image: UkFlag,
      country: 'United Kingdom',
    },
    {
      image: Ireland,
      country: 'Ireland',
    },
    {
      image: Usa,
      country: 'United states of America',
    },
    {
      image: NewZealand,
      country: 'New Zealand',
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <HomeBanner />
      <OvercomingYourBarrier successStories={successStories}/>
      <WhyOasisSession/>
      <section className="world-section">
        <div className="xs:bg-none sm:bg-none bg-no-repeat bg-right bg-auto w-full lg:h-full world-section__wrapper py-[3rem] lg:py-0">
          <div className="flex flex-col md:flex-row items-center h-full">
            <div className="max-w-[62.5rem] p-4 md:p-0 ms-8 lg:ms-32">
              <h3 className="text-5xl	lg:text-[4.8rem] mb-10 text-extrabold">Trusted by over 100s of Students, Parents & Professionals Worldwide. Since 2014.</h3>
              <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                <div className="flex flex-col gap-5">
                  <span className="text-success text-3xl lg:text-7xl font-extrabold">100+</span>
                  <span className="text-2xl font-semibold">Clients Reviews</span>
                </div>
                <div className="flex flex-col gap-5">
                  <span className="text-success text-3xl lg:text-7xl font-extrabold">55+</span>
                  <span className="text-2xl font-semibold">Student Ratings</span>
                </div>
                <div className="flex flex-col gap-5">
                  <span className="text-success text-3xl lg:text-7xl font-extrabold">A+</span>
                  <span className="text-2xl font-semibold">Grade Results</span>
                </div>
                <div className="flex flex-col gap-5">
                  <span className="text-success text-3xl lg:text-7xl font-extrabold">5+</span>
                  <span className="text-2xl font-semibold">Countries</span>
                </div>
              </div>
              <Link href="/about-us" className="block w-max bg-[#258575] text-white py-6 px-[3rem] rounded mt-10 text-xl lg:text-3xl">Connect with us</Link>
            </div>
            <Image className="lg:hidden" width={880} height={739} src={WorldMap} alt="lop"  />
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="custom-container">
          <h2 className="text-5xl text-center font-extrabold text-white py-12 px-8 ">Where are you thinking of Studying?</h2>
          <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyLocations.map(({ image, country, title }, index) => (
               <div key={`study-location-${index}`} className="relative bg-cover bg-no-repeat bg-center h-[30.7rem] flex flex-col p-12 justify-end"  style={{ backgroundImage: `url(${image.src})`}}>
                <h6 className="text-white">{country}</h6>
                <p className="text-white">{title}</p>
                {index === 0 && <Link className="flex items-center" href="/about-us">Learn More <ArrowRight /></Link>}

              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="reviews">
        <div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col items-center lg:w-[44%] bg-[#FEFDF5]">
              <h6 className="h6 pt-[10rem]">LET&apos;S HEAR WHAT THEY HAVE TO SAY</h6>
              <h2 className="text-3xl md:text-7xl ps-[5.9rem] font-extrabold">Sweet Words From Our Students</h2>
              <Image src={GroupImage} width={534} height={484} alt="Group image" />
            </div>
            <div className="bg-[#FFC727] p-12 md:p-14 lg:p-20 lg:w-[56%]">
              <div className="max-w-[67.7rem] mx-auto">
                <Slider {...sliderSettings}>
                  <div className="bg-[#F1F3F6]/[0.26] p-8 md:p-16 rounded-tr-3xl rounded-bl-3xl">
                    <div className="bg-white rounded-tr-3xl rounded-bl-3xl p-8 md:p-16">
                      <div>
                        <p className="text-2xl leading-[3.5rem]">
                        I was referred by a colleague to commence my IELTS academics class with Oasis & Oaks. My band scores were always low except for listening before I commenced classes, but I am so grateful to my tutor who was never tired of me; always there to keep me going with words of encouragement. I was given more tasks to work on, strategies on how to tackle different question and followed up on me to ensure my assignments were done within the stipulated time. I can categorically say that my confidence was well built to face the exams with the mind of me succeeding. I attempted 3 times and finally got the desired band score in the 3rd attempt. Are you contemplating on where to register for your IELTS class?? Oasis & Oaks is your right choice.
                        </p>
                      </div>
                      <p className="flex items-center mt-12">
                        <span className="border border-2 rounded-full p-4 bg-[#E5E7EB] me-8">
                          <UserIcon />
                        </span>
                        <span className="text-2xl font-semibold text-[#1B1B1B]">Oyewande Funmi</span>
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#F1F3F6]/[0.26] p-8 md:p-16 rounded-tr-3xl rounded-bl-3xl">
                    <div className="bg-white rounded-tr-3xl rounded-bl-3xl p-8 md:p-16">
                      <div>
                        <p className="text-2xl leading-[3.5rem]">
                        I was referred by a colleague to commence my IELTS academics class with Oasis & Oaks. My band scores were always low except for listening before I commenced classes, but I am so grateful to my tutor who was never tired of me; always there to keep me going with words of encouragement. I was given more tasks to work on, strategies on how to tackle different question and followed up on me to ensure my assignments were done within the stipulated time. I can categorically say that my confidence was well built to face the exams with the mind of me succeeding. I attempted 3 times and finally got the desired band score in the 3rd attempt. Are you contemplating on where to register for your IELTS class?? Oasis & Oaks is your right choice.
                        </p>
                      </div>
                      <p className="flex items-center mt-12">
                        <span className="border border-2 rounded-full p-4 bg-[#E5E7EB] me-8">
                          <UserIcon />
                        </span>
                        <span className="text-2xl font-semibold text-[#1B1B1B]">Oyewande Funmi</span>
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#F1F3F6]/[0.26] p-8 md:p-16 rounded-tr-3xl rounded-bl-3xl">
                    <div className="bg-white rounded-tr-3xl rounded-bl-3xl p-8 md:p-16">
                      <div>
                        <p className="text-2xl leading-[3.5rem]">
                        I was referred by a colleague to commence my IELTS academics class with Oasis & Oaks. My band scores were always low except for listening before I commenced classes, but I am so grateful to my tutor who was never tired of me; always there to keep me going with words of encouragement. I was given more tasks to work on, strategies on how to tackle different question and followed up on me to ensure my assignments were done within the stipulated time. I can categorically say that my confidence was well built to face the exams with the mind of me succeeding. I attempted 3 times and finally got the desired band score in the 3rd attempt. Are you contemplating on where to register for your IELTS class?? Oasis & Oaks is your right choice.
                        </p>
                      </div>
                      <p className="flex items-center mt-12">
                        <span className="border border-2 rounded-full p-4 bg-[#E5E7EB] me-8">
                          <UserIcon />
                        </span>
                        <span className="text-2xl font-semibold text-[#1B1B1B]">Oyewande Funmi</span>
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#F1F3F6]/[0.26] p-8 md:p-16 rounded-tr-3xl rounded-bl-3xl">
                    <div className="bg-white rounded-tr-3xl rounded-bl-3xl p-8 md:p-16">
                      <div>
                        <p className="text-2xl leading-[3.5rem]">
                        I was referred by a colleague to commence my IELTS academics class with Oasis & Oaks. My band scores were always low except for listening before I commenced classes, but I am so grateful to my tutor who was never tired of me; always there to keep me going with words of encouragement. I was given more tasks to work on, strategies on how to tackle different question and followed up on me to ensure my assignments were done within the stipulated time. I can categorically say that my confidence was well built to face the exams with the mind of me succeeding. I attempted 3 times and finally got the desired band score in the 3rd attempt. Are you contemplating on where to register for your IELTS class?? Oasis & Oaks is your right choice.
                        </p>
                      </div>
                      <p className="flex items-center mt-12">
                        <span className="border border-2 rounded-full p-4 bg-[#E5E7EB] me-8">
                          <UserIcon />
                        </span>
                        <span className="text-2xl font-semibold text-[#1B1B1B]">Oyewande Funmi</span>
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
