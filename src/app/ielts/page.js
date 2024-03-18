
import FourSkillsIelts from "../components/four-skills-ielts";
import IeltsInfo from "../components/ielts-info";
import IeltsPreparatoryClass from "../components/ielts-preparatory-class";
import SkillsIelts from "../components/ielts-skills";
import IeltsImg from "../assests/images/ielts.png";
import Ielts2Img from "../assests/images/ielts2.png";
import Info from "../components/info-ielts-visa";




 const Ielts = () => {
    const info =[
        {
            subtitle: `<p>Overall, the IELTS exam band score ranges from point 9 - which represents an expert English language user,
             to a 4.5 which indicates a  limited user. The score you'll need depends on what is required either by the school you wish
             to apply to or the government body you're  applying to. The validity of your test result spans for two years, within which
              you are expected to make all the arrangements needed.<p>

            <p>Our Prep Class gives you access to: Free Mock-test, Detailed and comprehensive lectures, 
            Tips on time management and idea generation, Tips on all four modules, Tips on registration.</p>`,
             bgImg: IeltsImg,
             bgImg2: Ielts2Img,
        }
    ]

    return(
        <>
            <IeltsPreparatoryClass />
            <IeltsInfo />
            <SkillsIelts/>
            <FourSkillsIelts bgColor="#5C5C5C"/>
            <Info info={info} bgColor="#FEF5DC" />
        </>
    )
}

export default Ielts;