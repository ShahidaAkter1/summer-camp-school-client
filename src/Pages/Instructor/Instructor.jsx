import React from "react";
import SectionTitle from "../../components/SectionTitle";
import useInstructor from "../../CustomHook/useInstructor";

import SingleInstructor from "./SIngleInstructor";

const Instructor = () => {
  const [instructor] = useInstructor();
  console.log(instructor);

  return (
    <div className="">
      <SectionTitle heading={"All Instructor"}></SectionTitle>

      <div className="grid   grid-cols-2  gap-8  mt-16">
        {instructor.map((singleInstructorDetails) => (
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
