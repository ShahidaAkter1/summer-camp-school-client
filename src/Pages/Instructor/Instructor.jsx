import React from "react";
import SectionTitle from "../../components/SectionTitle";
import useInstructor from "../../CustomHook/useInstructor";

import SingleInstructor from "./SIngleInstructor";
import UseAllUser from "../../CustomHook/UseAllUser";

const Instructor = () => {
  const [instructor] = useInstructor();
  // console.log(instructor);
  const allInstructor=instructor.filter(sd=>sd.role==='instructor');
  // console.log(allInstructor);



  return (
    <div className="">
      <SectionTitle heading={"All Instructor"}></SectionTitle>

      <div className="grid   grid-cols-2 justify-items-center gap-8  mt-16">
        {allInstructor.map((singleInstructorDetails) => (
          <SingleInstructor
            key={singleInstructorDetails._id}
            singleInstructorDetails={singleInstructorDetails}
          ></SingleInstructor>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
