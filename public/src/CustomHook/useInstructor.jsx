import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const useInstructor = () => {
  // const [instructor,setInstructor]=useState([])
  // const [instructorLoading,setInstructorLoading]=useState(true);
  // useEffect(()=>{
  //     fetch('instructor.json')
  //     .then(res=>res.json())
  //     .then(data=>{
  //         setInstructor(data);
  //         setInstructorLoading(false);
  //     })
  // } ,[])
  // return [instructor,instructorLoading];


  const { data: instructor = [], isLoading: instructorLoading } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await fetch(" https://summer-camp-school-server-seven.vercel.app/users");
      return res.json();
    },
  });
  return [instructor, instructorLoading];


// const [instructor,setInstructor]=useState([]);
// axios.get(' https://summer-camp-school-server-seven.vercel.app/users')
//   .then(response => {
//     const instructor = response.data;
//     // console.log(instructors);
//     setInstructor(instructor);
//   })
//   .catch(error => {
//     console.error('Error retrieving instructors:', error);
//   });
//   return [instructor];
};

export default useInstructor;
