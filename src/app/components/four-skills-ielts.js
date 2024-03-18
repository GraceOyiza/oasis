"use client";



const FourSkillsIelts= ({bgColor="#1B1B1B"}) => {
  return (
    <>
        <section>
            <div className="custom-container">
                <div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-opacity-15 text-[#5C5C5C] p-10" style={{backgroundColor: bgColor}}>
                            <h3 className="h5 font-bold">Listening Section</h3>
                            <p>This assesses how well students understand ideas, 
                                recognise opinions and follow the development of an argument. The section 
                                consists of forty questions, broken down into four sub-sections of ten questions each
                            </p>
                        </div>
                        <div className="opacity-15 text-black p-10" style={{backgroundColor: bgColor}}>
                            <h3 className="h5 font-bold">Reading Section</h3>
                            <p>This evaluates how well students can read and identify general ideas, main ideas and details, and whether students 
                                understand the author&apos;s inferences and opinions. The section consists of forty questions with three passages  and 
                                a random combination of the IELTS Reading question types.
                            </p>
                        </div>
                    
                        <div className="opacity-15 text-black p-10" style={{backgroundColor: bgColor}}>
                            <h3 className="h5 font-bold">Writing Section</h3>
                            <p>This is sub-divided into two- tasks 1 and 2. Task 1 is a report to be written by students after assessing a chart, graph, map, 
                                table, or process diagram while task 2 is an essay. Students are expected to answer both questions in 60minutes. 
                                The section evaluates how well and accurately students can organise their ideas and write a response, along with an ability 
                                to use a  wide-range of vocabulary and accurate grammar.
                            </p>
                        </div>
                        <div className="opacity-15 text-black p-10" style={{backgroundColor: bgColor}}>
                            <h3 className="h5 font-bold">Speaking Section</h3>
                            <p>This assesses students&apos; communication prowess, how well they can articulate opinions and 
                                information on everyday topics, common experiences, as well as express and justify their opinions. The section is sub-divided into three parts.
                                </p>
                                <ul>
                                    <li>general questions on students&apos; name, career, hobbies and preferences </li>
                                    <li>the use of a cue card containing a question students are expected to share their experience on in two minutes.</li>
                                    <li>students are expected to express their ideas on selected questions.</li>
                                </ul>
                        </div>
                   </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default FourSkillsIelts;

