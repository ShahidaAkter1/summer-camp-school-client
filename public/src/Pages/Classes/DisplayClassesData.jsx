import React from 'react';
import image1 from '../../assets/slider/slider-5.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useRole from '../../CustomHook/useRole';

const DisplayClassesData = ({ singleClass, index, handleAddToClass }) => {

  // console.log(singleClass,index);
  const { className, email, instructorName, price, totalSeat, image, status, _id, feedback, available_seat } = singleClass;
  // console.log(singleClass)


  const { user } = useContext(AuthContext);


  let role = 'student';
  if (user) {
    const [findUserRole] = useRole();
    role = findUserRole;

  }


  // console.log(role);
  // const availableSeat = 0;



  return (




    <div>

      {/* <div className="card w-96  shadow-xl"> */}
      <div className={available_seat === 0 ? 'bg-red-600 card w-96  text-white shadow-xl ' : ' card w-96  shadow-xl'}>

        <figure>
          <img className='w-[450px] h-[200px]' src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
          <p>Instructor Name : {instructorName}</p>
          <p> Email : {email}</p>
          <p>Price: {price}</p>
          <p> Total seat : {totalSeat}</p>
          <p>Available seat : </p>


          <div className="card-actions justify-end">
            {/* <button onClick={( )=>handleAddToClass(singleClass)} className="btn btn-primary text-white">Select Class</button> */}


            {
              role !== 'student' || available_seat === 0 ?
                <button disabled onClick={() => handleAddToClass(singleClass)} className="btn btn-primary text-white border ">Select Class</button>

                :

                <button onClick={() => handleAddToClass(singleClass)} className="btn btn-primary text-white">Select Class</button>

            }



          </div>
        </div>
      </div>
    </div>








  );
};

export default DisplayClassesData;