import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

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
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });


  return [instructor, instructorLoading];

  // const {user}=useContext(AuthContext);


  // const { data: instructor = [], isLoading: instructorLoading ,refetch} = useQuery({
  //     queryKey: ["users",user?.role],
  //     queryFn: async () => {
  //       const res = await fetch('http://localhost:5000/users/role');
  //       // console.log(res.data);
  //       return res.json();
  //       // return res.data;
  //     }
  //   });
  //   return [instructor, instructorLoading]; 

};

export default useInstructor;
