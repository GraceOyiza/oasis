import SameBanner from "../components/same-banner";
import BannerAboutUs from "../assests/images/banner-about-us.png";
import BannerAboutUs2 from "../assests/images/banner-about-us2.png";
import WhoWeAre from "../components/who-we-are";
import WhoWeAreImg from "../assests/images/main-bg.png";
import WhoWeAreImg2 from "../assests/images/yellow-bg.png";
import WhyChooseOasis from "../components/why-choose-oasis";
import Result from "../assests/images/results.png";
import Money from "../assests/images/moneys.png";
import  Experience from "../assests/images/experience.png";
import Ranking from "../assests/images/ranking.png";
import Classes from "../assests/images/classes.png";
import Calender from "../assests/images/calendar.png";
import StartYourJourney from "../components/start-your-journey2";
import Img10 from "../assests/images/image-10.png";
import Img11 from "../assests/images/image-11.png";
import Img12 from "../assests/images/image-12.png"
import TeachingMethods from "../components/our-teaching-method";
import TeachingMethodImg from "../assests/images/teaching-method.png";
import TeachingMethodImg2 from "../assests/images/teaching-method-2.png";
import TeachingMethodImg3 from "../assests/images/teaching-method-3.png";
import TeachingMethodImg4 from "../assests/images/teaching-method-4.png";
import TeachingMethodImg5 from "../assests/images/teaching-method-5.png";
import TeachingMethodImg6 from "../assests/images/teaching-method-6.png";
import Team from "../components/team";

export default function AboutUs() {
  const chooseOasis = [
    {
      icon: Result,
      iconText: "Proven Results",
    },
    {
      icon: Money,
      iconText: "Affordable Cost",
    },
    {
      icon: Experience,
      iconText: "Wealth of experience",
    },
    {
      icon: Ranking,
      iconText: "Reputation for Excellence",
    },
    {
      icon: Classes,
      iconText: "Flexible Classes",
    },
    {
      icon: Calender,
      iconText: "Convenient Schedule",
    },
  ];
  const imgDetails =[
    {
      title: "Study, Work & Live Abroad",
      subtitle: "An international degree gives you leverage in the global employment market. Start your study abroad journey with expert guide along the way.",
      bgImg: Img12,
    },
    {
      title: "Study, Work & Live Abroad",
      subtitle: "An international degree gives you leverage in the global employment market. Start your study abroad journey with expert guide along the way.",
      bgImg: Img11,
    },
    {
      title: "Study, Work & Live Abroad",
      subtitle: "An international degree gives you leverage in the global employment market. Start your study abroad journey with expert guide along the way.",
      bgImg: Img10,
    },
  ]
  const teachingMethods = [
    {
      icon: TeachingMethodImg,
      iconInfo: "Community Approach",
      borderColor: '#3B68FF'
    },
    {
      icon: TeachingMethodImg2,
      iconInfo: "Student-centered Instruction",
      borderColor: "#FBB183"
    },
    {
      icon: TeachingMethodImg3,
      iconInfo: "Experiential and Cooperative Learning",
      borderColor: "#2BB69C"
    },
    {
      icon: TeachingMethodImg4,
      iconInfo: "Authentic Learning Materials",
      borderColor: "#FFC325"
    },
    {
      icon: TeachingMethodImg5,
      iconInfo: "Integrated Grammar Instruction",
      borderColor: "#FF86A8"
    },
    {
      icon: TeachingMethodImg6,
      iconInfo: "Online Dedicated Learning Support",
      borderColor: "#9747FF"
    },

  ]

  const imgInfo = [
    {
      teamName: "Grace Joe",
      teamRole: "Team Role",
      bgImg: Img10,
    },
    {
      teamName: "Grace Joe",
      teamRole: "Team Role",
      bgImg: Img10,
    },
    {
      teamName: "Grace Joe",
      teamRole: "Team Role",
      bgImg: Img10,
    }
  ]
  return (
    <>
      <SameBanner
        title="We are Educational & Resource Experts"
        subtitle="Oasis and Oaks is an educational training 
        and resource provider, that helps you achieve your goals. "
        BannerImg={BannerAboutUs}
        BannerImg2={BannerAboutUs2}
        reverse={true}
      />
      <WhoWeAre
        title="Who We Are"
        subtitle="Oasis and Oaks is an educational training and resource provider, established in 2014. 
        Our language services include in-depth trainings and preparations for IELTS, TOEFL, IGCSE examinations, French development classes and Adult Education.
        We also provide consultation on studying abroad, securing genuine admissions in foreign institutions and support programmes in organisational development."
        Img1={WhoWeAreImg}
        Img2={WhoWeAreImg2}
      />
      <WhyChooseOasis
        title="Why choose Oasis and Oaks?"
        chooseOasis={chooseOasis}
      />
      <StartYourJourney imgDetails={imgDetails}/>
      <TeachingMethods detailsInfo={teachingMethods}/>
      <Team imgInfo={imgInfo}/>
    </>
  );
}
