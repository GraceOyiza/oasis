"use client";



const VisaOfficerExpect = ({expectations=[]}) => {
  return (
    <section>
    <div>
        <div className="custom-container p-20">
            <div className="">
                <h2 className="h2 text-black text-center mb-20 font-bold">Other common things visa officers expect</h2>
                <div className="flex items-center flex-wrap gap-x-8 gap-y-16 justify-center">
                    {expectations.map(({ text, borderColor }, index) => (
                        <span key={`expectation-${index}`} className={`border w-[34.3rem] h-[12.7rem] text-[2rem] font-bold flex items-center justify-center text-center`} style={{ borderColor }}>
                            {text}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default VisaOfficerExpect;
