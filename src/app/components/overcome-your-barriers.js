"use client";
import SuccessCard from "./successCard";
const OvercomingYourBarrier = ({successStories=[]}) => {
  return (
    <>
       <section className="py-10 lg:py-[16rem]">
        <div className="custom-container">
          <p className="text-primary text-center text-success">OVERCOME YOUR BARRIERS</p>
          <h3 className="h3 text-center max-w-[70.2rem] m-auto">Start Your Journey of Excellence and Success Today</h3>
          <div className="grid grid-cols-1 grid-rows-6 gap-y-8 gap-x-40 md:grid-cols-2 md:grid-rows-3 p-5 md:p-8 lg:p-0">
            {successStories.map(({ title, description, image, borderColor }, index) => (
              <SuccessCard key={`sucess-${index}`}  title={title} description={description} image={image} borderColor={borderColor} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OvercomingYourBarrier;
