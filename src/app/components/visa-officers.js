"use client";



const VisaOfficerExpect = ({visaInfo=[]}) => {
  return (
    <>
      <section>
        <div className="custom-container">
            <div>
              <h2 className="h3">Other common things visa officers expect</h2>
            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visaInfo.map(
              (
                {title,border},
                index
              ) => (
                <div key={`visa-${index}`} >
                  <div style={{border: border}} className="p-10 md:p-[3rem]">
                    <p className="font-bold">{title}</p>
                  </div>
                </div>
              )
            )}
            </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default VisaOfficerExpect;
