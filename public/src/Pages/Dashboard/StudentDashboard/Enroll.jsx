import React from 'react';
import useClasses from '../../../CustomHook/useClasses';
import { useState } from 'react';
import { useEffect } from 'react';
import DisplayEnrollClasses from './DisplayEnrollClasses';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import LoadingPage from '../../../components/LoadingPage';


const Enroll = ({ idArray }) => {
    // console.log(classesSpecificId);
    // console.log(idArray);
    const [allClasses, setAllClasses] = useState([]);
    // const [enrollClass,setEnrollClasses]=useState([]);

    useEffect(() => {
        fetch(' https://summer-camp-school-server-seven.vercel.app/classes')
            .then(res => res.json())
            .then(data => setAllClasses(data))
    }, [])

    // console.log(allClasses);

    const { loading } = useContext(AuthContext);


    // console.log(allClasses);
    let finalArray = [];
    idArray.forEach(data => {
        // console.log(data);
        const findEnrollClass = allClasses.find(classId => classId._id === data);
        finalArray.push(findEnrollClass);
        // console.log(findEnrollClass);
    })

    // console.log(finalArray);




    return (
        <div>

            <div className="hero-content w-full  -mt-8 ">
                <div className="   w-full   shadow-2xl  border  ">
                    <div className="card-body">
                        {
                            !loading ?
                                finalArray.map(enroll => <DisplayEnrollClasses
                                    enroll={enroll}
                                ></DisplayEnrollClasses>)
                                :
                                <LoadingPage></LoadingPage>
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Enroll;