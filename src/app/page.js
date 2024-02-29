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
      <section>
        <div className="custom-container">
          <p className="text-primary text-center text-success">OVERCOME YOUR BARRIERS</p>
          <h3 className="h3 text-center">Start Your Journey of Excellence and Success Today</h3>
          <div className="grid grid-cols-1 grid-rows-6 gap-8 md:grid-cols-2 md:grid-rows-3">
            {successStories.map(({ title, description, image, borderColor }, index) => (
              <SuccessCard key={`sucess-${index}`}  title={title} description={description} image={image} borderColor={borderColor} />
            ))}
          </div>
        </div>
      </section>
      <section className="why-oasis">
        <div className="flex gap-10 flex-col md:flex-row items-center">
          <Image className="flex-1" width={880} height={739} src={WhyOasis} alt="lop" />
          <div className="flex-1">
            <h5>WE HELP YOU ACHIEVE YOUR GOALS</h5>
            <h2 className="uppercase">Why Oasis and Oaks</h2>
            <p>Oasis & Oaks is an educational resource provider that helps you achieve your goals. <br/> We offer services in language development, IELTS Preparatory Class, Adult Education, Workplace/Organisational Development Training as well as securing genuine admissions and work placements in foreign countries.</p>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
              <div className="p-3 bg-white/[0.05] rounded">
                <svg className="mb-8" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <circle cx="25.0476" cy="25.0303" r="24.1707" fill="#D9D9D9" fillOpacity="0.08"/>
                  <g clipPath="url(#clip0_298_5433)">
                  <path d="M36.0144 20.5146C34.6787 14.6373 29.5519 11.9912 25.0485 11.9912C25.0485 11.9912 25.0485 11.9912 25.0358 11.9912C20.5452 11.9912 15.4057 14.6245 14.07 20.5018C12.5816 27.0661 16.6015 32.6253 20.2398 36.1237C21.5883 37.4213 23.3184 38.0701 25.0485 38.0701C26.7787 38.0701 28.5088 37.4213 29.8445 36.1237C33.4828 32.6253 37.5028 27.0788 36.0144 20.5146ZM25.0485 26.888C22.835 26.888 21.0413 25.0943 21.0413 22.8807C21.0413 20.6672 22.835 18.8735 25.0485 18.8735C27.2621 18.8735 29.0558 20.6672 29.0558 22.8807C29.0558 25.0943 27.2621 26.888 25.0485 26.888Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_298_5433">
                  <rect width="30.5314" height="30.5314" fill="white" transform="translate(9.7832 9.76489)"/>
                  </clipPath>
                  </defs>
                </svg>
                <p>Located in 15 Countries</p>
              </div>
              <div className="p-3 bg-white/[0.05] rounded">
                <svg className="mb-8" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <circle cx="25.0476" cy="25.0303" r="24.1707" fill="#D9D9D9" fillOpacity="0.08"/>
                  <g clipPath="url(#clip0_298_5433)">
                  <path d="M36.0144 20.5146C34.6787 14.6373 29.5519 11.9912 25.0485 11.9912C25.0485 11.9912 25.0485 11.9912 25.0358 11.9912C20.5452 11.9912 15.4057 14.6245 14.07 20.5018C12.5816 27.0661 16.6015 32.6253 20.2398 36.1237C21.5883 37.4213 23.3184 38.0701 25.0485 38.0701C26.7787 38.0701 28.5088 37.4213 29.8445 36.1237C33.4828 32.6253 37.5028 27.0788 36.0144 20.5146ZM25.0485 26.888C22.835 26.888 21.0413 25.0943 21.0413 22.8807C21.0413 20.6672 22.835 18.8735 25.0485 18.8735C27.2621 18.8735 29.0558 20.6672 29.0558 22.8807C29.0558 25.0943 27.2621 26.888 25.0485 26.888Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_298_5433">
                  <rect width="30.5314" height="30.5314" fill="white" transform="translate(9.7832 9.76489)"/>
                  </clipPath>
                  </defs>
                </svg>
                <p>Located in 15 Countries</p>
              </div>
              <div className="p-3 bg-white/[0.05] rounded">
                <svg className="mb-8" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <circle cx="25.0476" cy="25.0303" r="24.1707" fill="#D9D9D9" fillOpacity="0.08"/>
                  <g clipPath="url(#clip0_298_5433)">
                  <path d="M36.0144 20.5146C34.6787 14.6373 29.5519 11.9912 25.0485 11.9912C25.0485 11.9912 25.0485 11.9912 25.0358 11.9912C20.5452 11.9912 15.4057 14.6245 14.07 20.5018C12.5816 27.0661 16.6015 32.6253 20.2398 36.1237C21.5883 37.4213 23.3184 38.0701 25.0485 38.0701C26.7787 38.0701 28.5088 37.4213 29.8445 36.1237C33.4828 32.6253 37.5028 27.0788 36.0144 20.5146ZM25.0485 26.888C22.835 26.888 21.0413 25.0943 21.0413 22.8807C21.0413 20.6672 22.835 18.8735 25.0485 18.8735C27.2621 18.8735 29.0558 20.6672 29.0558 22.8807C29.0558 25.0943 27.2621 26.888 25.0485 26.888Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_298_5433">
                  <rect width="30.5314" height="30.5314" fill="white" transform="translate(9.7832 9.76489)"/>
                  </clipPath>
                  </defs>
                </svg>
                <p>Located in 15 Countries</p>
              </div>
              <div className="p-3 bg-white/[0.05] rounded">
                <svg className="mb-8" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <circle cx="25.0476" cy="25.0303" r="24.1707" fill="#D9D9D9" fillOpacity="0.08"/>
                  <g clipPath="url(#clip0_298_5433)">
                  <path d="M36.0144 20.5146C34.6787 14.6373 29.5519 11.9912 25.0485 11.9912C25.0485 11.9912 25.0485 11.9912 25.0358 11.9912C20.5452 11.9912 15.4057 14.6245 14.07 20.5018C12.5816 27.0661 16.6015 32.6253 20.2398 36.1237C21.5883 37.4213 23.3184 38.0701 25.0485 38.0701C26.7787 38.0701 28.5088 37.4213 29.8445 36.1237C33.4828 32.6253 37.5028 27.0788 36.0144 20.5146ZM25.0485 26.888C22.835 26.888 21.0413 25.0943 21.0413 22.8807C21.0413 20.6672 22.835 18.8735 25.0485 18.8735C27.2621 18.8735 29.0558 20.6672 29.0558 22.8807C29.0558 25.0943 27.2621 26.888 25.0485 26.888Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_298_5433">
                  <rect width="30.5314" height="30.5314" fill="white" transform="translate(9.7832 9.76489)"/>
                  </clipPath>
                  </defs>
                </svg>
                <p>Located in 15 Countries</p>
              </div>
            </div>
            <Link href="/about-us">Learn More</Link>
          </div>
        </div>
      </section>
      <section className="world-section">
        <div className="xs:bg-none sm:bg-none bg-no-repeat bg-right bg-auto w-full h-full world-section__wrapper">
          <div className="flex items-center h-full">
            <div>
              <h3>Trusted by over 100s of Students, Parents & Professionals Worldwide. Since 2014.</h3>
              <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                <div className="flex flex-col">
                  <span className="text-success">100+</span>
                  <span>Clients Reviews</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-success">55+</span>
                  <span>Clients Reviews</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-success">A+</span>
                  <span>Clients Reviews</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-success">5+</span>
                  <span>Clients Reviews</span>
                </div>
              </div>
              <Link href="/about-us">Connect with us</Link>
            </div>
            <Image className="md:hidden" width={880} height={739} src={WorldMap} alt="lop"  />
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="custom-container">
          <h2 className="text-5xl text-center font-extrabold text-white py-12 px-8 ">Where are you thinking of Studying?</h2>
          <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col items-center md:w-[44%]">
              <h6>LET&apos;S HEAR WHAT THEY HAVE TO SAY</h6>
              <h2 className="text-5xl">Sweet Words From Our Students</h2>
              <Image src={GroupImage} width={534} height={484} alt="Group image" />
            </div>
            <div className="bg-[#FFC727] p-12 md:p-14 lg:p-20 md:w-[56%]">
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
