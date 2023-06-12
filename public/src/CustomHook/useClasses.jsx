import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useClasses = () => {
    const { data: classes = [], isLoading: classesLoading ,refetch} = useQuery({
        queryKey: ["classes"],
        queryFn: async () => {
          const res = await fetch(" https://summer-camp-school-server-seven.vercel.app/classes");
          // console.log(res.data);
          return res.json();
          // return res.data;
        }
      });
      return [classes,  classesLoading ,refetch];
};

export default useClasses;