import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useClasses = () => {
    const { data: classes = [], isLoading: classesLoading ,refetch} = useQuery({
        queryKey: ["classes"],
        queryFn: async () => {
          const res = await fetch("http://localhost:5000/classes");
          // console.log(res.data);
          return res.json();
          // return res.data;
        }
      });
      return [classes,  classesLoading ,refetch];
};

export default useClasses;